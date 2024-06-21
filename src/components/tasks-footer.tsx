import { Link } from "react-router-dom"
import { useTasksContext } from "../contexts/tasks-context"

export function TasksFooter() {

  const { tasksLeft, clearCompletedTasks } = useTasksContext()

  return (
    <>
      {Boolean(tasksLeft) && (
        <header className="flex justify-between px-4 py-2 border-t border-gray-200 sheets-effect">
          <span>{tasksLeft} itens left!</span>
          <div className="flex gap-4">
            <Link
              to={"/"}
              className="hover:border-red-700 border border-transparent px-2 rounded-[3px] cursor-pointer"
            >
              All
            </Link>
            <Link
              to={"/active"}
              className="hover:border-red-700 border border-transparent px-2 rounded-[3px] cursor-pointer"
            >
              Active
            </Link>
            <Link
              to={"/completed"}
              className="hover:border-red-700 border border-transparent px-2 rounded-[3px] cursor-pointer"
            >
              Completed
            </Link>
          </div>
          <button
            onClick={clearCompletedTasks}
            className="hover:underline cursor-pointer"
          >
            Clear completed
          </button>
        </header>
      )}
    </>
  )
}

//TODO: ALTERAR A LOGICA, PRA APARECER COM 0 ITENS, POREM ESCONDER QUANDO O "ARRAY" TIVER VAZIO