import { ChevronDown } from "lucide-react"

interface CheckAllButtonProps {
  allComplete: boolean
  onClick: () => void
}
//TODO: Estava invertendo responsabilidade
export function CheckAllButton({ allComplete, onClick }: CheckAllButtonProps) {
  return (
    <button
      type="button"
      className="w-14 flex items-center justify-center pr-1"
      onClick={onClick}
    >
      <ChevronDown
        size={28}
        className={allComplete ? "text-[#333]" : "text-[#AAA]"}
        data-testid="chevron-icon"
      />
    </button>
  )
}