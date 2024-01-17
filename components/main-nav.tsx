import { ShadcnIcon } from "@/components/icons"

export const MainNav = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <a href="/" className="flex items-center space-x-2 md:mr-6">
        <ShadcnIcon strokeWidth="32" fill="currentColor" className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          React Coverflow
        </span>
      </a>
    </div>
  )
}
