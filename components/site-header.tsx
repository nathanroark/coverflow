import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { artImages } from "@/lib/carousel-images-1"
import { albumIMAGES } from "@/lib/carousel-images-2"

interface SiteHeaderProps {
  setImages: React.Dispatch<
    React.SetStateAction<
      {
        src: string
        href: string
        alt: string
      }[]
    >
  >
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ setImages }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full items-center px-8">
        <MainNav />

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <div className="flex size-full items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size={"lg"}>
                    <span>Select Images</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setImages(artImages)}>
                    Art
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setImages(albumIMAGES)}>
                    Albums
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
