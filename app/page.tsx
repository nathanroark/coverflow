"use client"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import Coverflow from "@/components/coverflow"
import { artImages } from "@/lib/carousel-images-1"
import { useWindowSize } from "@/hooks/useWindowSize"

export default function Page() {
  const { width } = useWindowSize()
  const [IMAGES, setImages] = useState(artImages)
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader setImages={setImages} />
      <div className="flex-1">
        <div className="flex size-full flex-col">
          <div className="w-[calc(100% - 200px)] flex h-1/2 items-center justify-center lg:size-full">
            <div className="flex size-full min-h-[70vh] items-center justify-center overflow-hidden">
              <Coverflow
                images={IMAGES}
                slidesPerSide={3}
                rotation={35}
                width={
                  width < 720
                    ? 200
                    : width < 1024
                      ? 300
                      : width < 1536
                        ? 400
                        : 600
                }
                height={
                  width < 720
                    ? 200
                    : width < 1024
                      ? 300
                      : width < 1536
                        ? 400
                        : 600
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
