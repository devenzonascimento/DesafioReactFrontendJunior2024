import { useTasksContext } from "../contexts/tasks-context";

import { CheckButton } from "./check-button";
import { X } from "lucide-react";

import { Task } from "../types";

interface ReadableTaskItemProps {
  task: Task
}

export function ReadableTaskItem({ task }: ReadableTaskItemProps) {

  const { toggleTaskCheck, removeTask } = useTasksContext()

  function handleCheck() {
    toggleTaskCheck(task.id)
  }

  function handleRemove() {
    removeTask(task.id)
  }

  return (
    <>
      <CheckButton isDone={task.isDone} onCheck={handleCheck} />
      <p
        className={`w-full px-2 py-4 pr-9 text-2xl max-sm:text-xl break-all ${task.isDone ? "text-gray-400 line-through" : "text-[#484848]"} transition-all duration-700`}
        data-testid="task"
      >
        {task.title}
      </p>
      <button onClick={handleRemove} data-testid="remove-button">
        <X className="remove-icon" data-testid="remove-icon" />
      </button>
    </>
  )
}