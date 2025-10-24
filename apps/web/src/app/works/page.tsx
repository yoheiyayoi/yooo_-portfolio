"use client"

import ColourfulText from '@/components/ui/colourful-text'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, MousePointerClick, Pickaxe, ScrollText, X } from 'lucide-react'
import { projects } from "@/data/project";
import Link from "next/link";
import Image from "next/image";
import Badge from '@/components/Badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const getTypeColor = (type: string) => {
  switch (type) {
    case "Private":
      return { dot: "bg-red-500", text: "text-red-500" };
    case "Public":
      return { dot: "bg-green-500", text: "text-green-500" };
    case "Customer Work":
      return { dot: "bg-blue-500", text: "text-blue-500" };
    default:
      return { dot: "bg-gray-500", text: "text-gray-500" };
  }
};

export default function page() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category || "Others"))),
  ];

  return (
    <div className="w-full min-h-screen p-4 pt-24">
      <div className="w-full max-w-4xl mx-auto">

        <div className="mb-12">
          <h1 className='font-bold text-3xl md:text-4xl mb-3 inline-flex items-baseline'>
            <Pickaxe className='mr-2' /> <span>My Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            <ColourfulText text="งานต่าง ๆ ของผม" />
          </p>
          <p className='mt-2 flex flex-col sm:flex-row gap-2 sm:items-center text-sm sm:text-base'>
            <span>โน๊ต: คลิกที่รูปภาพเพื่อดูขนาดเต็ม และ แนะนำให้ดูงานทั้งหมดใน</span>
            <Button variant="outline" size="sm" asChild className="w-fit hover:scale-105 hover:rotate-3 transition">
              <Link href={"https://discord.gg/qp7rTNMgUD"} target='_blank'>
                <ExternalLink /> ดิสคอร์ด
              </Link>
            </Button>
            <span>จะอัปเดตเร็วกว่า</span>
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="All" className="w-full">
          <TabsList className='w-full bg-background rounded-md border-b p-0'>
            {categories.map(cat => (
              <TabsTrigger
                key={cat}
                value={cat}
                className='bg-background rounded-md data-[state=active]:border-primary h-full border-0 border-b-2 border-transparent data-[state=active]:shadow-none'
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Project Cards */}
          {categories.map((category) => {
            const filteredProjects = (category === "All"
              ? projects
              : projects.filter((p) => p.category === category))
              .sort((a, b) => (b.year || 0) - (a.year || 0));

            return (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="flex flex-col gap-6">
                  {filteredProjects.map((item) => (
                    <div
                      key={item.title}
                      className="group flex flex-col md:flex-row gap-4 md:gap-6 p-4 rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 transition-colors duration-200"
                    >

                      {/* Image */}
                      <div className="shrink-0">
                        <div
                          className="relative cursor-pointer overflow-hidden rounded-xl group/image"
                          onClick={() => setSelectedImage({ src: item.image, alt: item.title })}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={800}
                            height={600}
                            className="w-full md:w-48 md:h-32 object-cover rounded-xl transition-transform duration-300 group-hover/image:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <span className="flex gap-2 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 text-sm font-medium">
                              <MousePointerClick /> กดคลิกเพื่อซูม
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between min-w-0 relative">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="font-semibold text-lg">
                              <div className="inline-flex items-center gap-2">
                                <span>{item.title}</span>
                                <span className={cn("size-1 rounded-full", getTypeColor(item.type).dot)} />
                                <span className={cn("text-sm font-semibold", getTypeColor(item.type).text)}>
                                  {item.type}
                                </span>
                              </div>
                            </h3>

                            <div className="flex gap-2 shrink-0">
                              {item.linkGithub && (
                                <Link
                                  href={item.linkGithub as any}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <Github className="w-5 h-5" />
                                </Link>
                              )}
                              {item.linkWebsite && (
                                <Link
                                  href={item.linkWebsite as any}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </Link>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.stacks.map((tech, i) => (
                              <Badge key={i} text={tech} />
                            ))}
                          </div>
                        </div>

                        {/* Year Badge */}
                        {item.year && (
                          <div className="mt-4 flex justify-end">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-linear-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 rounded-full text-xs font-semibold shadow-sm">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {item.year}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain rounded-lg animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </div>
  )
}
