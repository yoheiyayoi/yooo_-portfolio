"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, MousePointerClick, Calendar, Briefcase, X, List } from 'lucide-react'
import { projects, roblox_maps } from "@/data/project";
import Link from "next/link";
import Image from "next/image";
import Badge from '@/components/Badge';
import { useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';

const experiences = [
    {
        image: "/experience/rottendoge.png",
        title: "Game Developer",
        place: "RottenDoge",
        link: "https://www.roblox.com/communities/34121244/RottenDoge#!/about",
        date: "Oct 2024 - Now",
        platform: "roblox"
    },
    {
        image: "/experience/ghost.png",
        title: "Game Developer",
        place: "Ghost Extermination Company",
        link: "https://www.roblox.com/communities/14813831/Ghost-Extermination-Company#!/about",
        date: "Sept 2023 - July 2024",
        platform: "roblox"
    },
    {
        image: "/experience/ntun.png",
        title: "Student",
        place: "NTUN",
        link: "http://ntun.ac.th/",
        date: "2021 - Now",
        platform: "school"
    },
]

export default function page() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    const categories = [
        "All",
        ...Array.from(new Set(projects.map((p) => p.category || "Others"))),
    ];

    return (
        <div className="w-full min-h-screen p-4 pt-24">
            <div className="w-full max-w-4xl mx-auto">

                <div>
                    <div className="mb-5">
                        <h1 className="font-bold text-2xl md:text-3xl mb-3 flex items-center gap-2">
                            <Briefcase className="w-7 h-7 text-blue-500" />
                            Experience
                        </h1>
                    </div>

                    <div className="space-y-0 border-l border-blue-200 ml-2 mb-12">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative pl-6 pb-8 last:pb-0">
                                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-blue-400 border border-white" />

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <div className="flex items-start gap-3">
                                        <div className="relative shrink-0 mt-1">
                                            <Image
                                                src={exp.image}
                                                alt={exp.place}
                                                height={32}
                                                width={32}
                                                className="rounded-lg border border-zinc-100 shadow-sm object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col min-w-0">
                                            <Link
                                                href={exp.link as any}
                                                className="text-xl font-semibold hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                                            >
                                                {exp.place}
                                                <span className="text-[10px] opacity-50">↗</span>
                                            </Link>
                                            <h3 className="text-md text-zinc-600 leading-none mb-1">
                                                {exp.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                                        <Badge text={exp.date} className='bg-white text-gray-700 font-semibold text-md' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="mb-5">
                        <h1 className="font-bold text-2xl md:text-3xl mb-3 flex items-center gap-2">
                            <List className="w-7 h-7 text-blue-500" />
                            Roblox Work
                        </h1>
                    </div>

                    <div className="flex flex-col gap-6">
                        {roblox_maps.map((item, index) => (
                            <ProjectCard key={index} project={item} setSelectedImage={setSelectedImage} />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="mb-5">
                        <h1 className="font-bold text-2xl md:text-3xl mb-3 flex items-center gap-2">
                            <List className="w-7 h-7 text-blue-500" />
                            Other Projects
                        </h1>

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
                                        {filteredProjects.map((item, index) => (
                                            <ProjectCard key={index} project={item} setSelectedImage={setSelectedImage} />
                                        ))}
                                    </div>
                                </TabsContent>
                            );
                        })}
                    </Tabs>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
