import { Button } from '@/components/ui/button'
import ColourfulText from '@/components/ui/colourful-text'
import { CornerLeftUp, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="shrink-0 -rotate-3">
          <img
            src="/silly_cat2.webp"
            alt="Some cute cat"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="text-center rotate-3">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center">
              <img src="/yooo_.png" className="w-60 md:w-72 lg:w-80 h-auto" />
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-medium px-4">
              <ColourfulText text="เขียนโค้ดเล่นๆ ทำกราฟิกนิดหน่อย ทำเว็บเล็กน้อย ทำเกมนิดนึง" />
            </p>
            <p className="py-3 text-lg md:text-xl lg:text-2xl font-medium px-4">
              และชอบนอนกับชอบแมวและแมวน้ำ（￣︶￣）↗
            </p>

            <div className="flex justify-center gap-2">
              <Button className="hover:scale-105 hover:-rotate-3 transition" size="lg" asChild>
                <Link href="/works"><CornerLeftUp /> ดูผลงานของผม</Link>
              </Button>
              <Button className="hover:scale-105 hover:-rotate-3 transition" size="lg" variant="outline" asChild>
                <a href="https://github.com/yoheiyayoi" target="_blank"><Github /> ดู github ผม</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
