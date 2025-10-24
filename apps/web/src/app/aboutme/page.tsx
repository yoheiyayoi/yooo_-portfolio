import SkillBadge from '@/components/SkillBadge'
import ColourfulText from '@/components/ui/colourful-text'
import { Briefcase, Notebook, Sparkles } from 'lucide-react'

import { TypeScript, JavaScript, Lua, Python, Kotlin, Nextjs, Bun, ReactDark, TailwindCSS, ShadcnUiDark, ShadcnUiLight, TanStack, PrismaLight, MySQL, Supabase, MongoDB, RobloxLight, GodotEngine, VisualStudioCode, ZedLight, RustLight, AstroLight, RobloxDark } from "@ridemountainpig/svgl-react";
import Image from 'next/image';
import Link from 'next/link';
import Roblox from '@/components/ui/svgs/roblox';

export default function page() {
    const techStacks = {
        Languages: [
            { name: "TypeScript", icon: <TypeScript /> },
            { name: "JavaScript", icon: <JavaScript /> },
            { name: "Luau", icon: <Lua /> },
            { name: "Python", icon: <Python /> },
        ],

        Frameworks: [
            { name: "Bun", icon: <Bun /> },
            { name: "Next.js", icon: <Nextjs /> },
            { name: "React", icon: <ReactDark /> },
            { name: "TailwindCSS", icon: <TailwindCSS /> },
            { name: "shadcn/ui", icon: <ShadcnUiLight /> },
            { name: "Tanstack", icon: <TanStack /> },
            { name: "Prisma", icon: <PrismaLight /> }
        ],

        Databases: [
            { name: "MySQL", icon: <MySQL /> },
            { name: "Supabase", icon: <Supabase /> },
        ],

        Tools: [
            { name: "Roblox Studio", icon: <RobloxLight /> },
            { name: "VSCode", icon: <VisualStudioCode /> },
            { name: "Zed", icon: <ZedLight /> },
        ],

        "Currently Exploring": [
            { name: "Astro", icon: <AstroLight /> },
            { name: "Godot Engine", icon: <GodotEngine /> },
            { name: "Kotlin", icon: <Kotlin /> },
            { name: "Rust", icon: <RustLight /> },
        ]
    }

    const Experience = [
        {
            image: "/experience/rottendoge.png",
            title: "Developer at",
            place: "RottenDoge",
            link: "https://www.roblox.com/communities/34121244/RottenDoge#!/about",
            date: "Since Oct 2024",
            platform: "roblox"
        },
        {
            image: "/experience/ghost.png",
            title: "Developer at",
            place: "Ghost Extermination Company",
            link: "https://www.roblox.com/communities/14813831/Ghost-Extermination-Company#!/about",
            date: "Since July 2024",
            platform: "roblox"
        },
        {
            image: "/experience/zeal.png",
            title: "Developer at",
            place: "Zeal Studios",
            link: "https://zealstudios.vercel.app/",
            date: "Since July 2023",
            platform: "roblox"
        },
        {
            image: "/experience/ntun.png",
            title: "Student at",
            place: "NTUN",
            link: "http://ntun.ac.th/",
            date: "Since 2021",
            platform: "school"
        },
    ]

    return (
        <div className="w-full min-h-screen max-w-4xl mx-auto p-4 pt-24">
            <div className="w-full">

                <div className="mb-12">
                    <h1 className='font-bold text-3xl md:text-4xl mb-3 inline-flex items-baseline'>
                        <Notebook className="mr-2" /> <span>About me</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        <ColourfulText text="เกี่ยวกับผม" />
                    </p>
                </div>
            </div>

            <div className="w-full flex items-center">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
                    <div className="">
                        <div className="w-full">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold flex justify-center">
                                Hi, I'm Yohei 👋
                            </h1>

                            <p className="py-3 text-md md:text-lg lg:text-lg font-medium text-foreground">
                                I'm 16 who started coding in Roblox since 2020. <br />
                                I’ve built small projects, made plugins for Roblox Studio and Minecraft, a few Discord bots, and some websites. I love coding, space, and reading comics.
                            </p>

                            <div className="mt-6">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-blue-500" />
                                    Experience
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-2">
                                    {Experience.map((exp, index) => (
                                        <div
                                            className="group relative flex gap-3 items-start rounded-lg hover:bg-slate-50 transition-colors duration-200 p-3"
                                            key={index}
                                        >
                                            {/* Platform Badge */}
                                            {exp.platform === "roblox" && (
                                                <div className="absolute top-2 right-2 bg-white rounded-md p-1.5 shadow-sm ring-1 ring-slate-200 w-7 h-7 flex items-center justify-center" title="Roblox Platform">
                                                    <Roblox />
                                                </div>
                                            )}
                                            
                                            <div className="shrink-0 mt-0.5">
                                                <Image
                                                    className="rounded-md shadow-sm ring-1 ring-slate-200"
                                                    height={40}
                                                    width={40}
                                                    alt={exp.place}
                                                    src={exp.image}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-muted-foreground mb-0.5">
                                                    {exp.title}
                                                </p>
                                                <Link
                                                    href={exp.link as any}
                                                    target='_blank'
                                                    className="font-semibold text-base hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                                                >
                                                    {exp.place}
                                                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </Link>
                                                <p className="text-sm text-muted-foreground mt-0.5">
                                                    {exp.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="shrink-0">
                        <img
                            src="/silly_cat3.jpg"
                            alt="Some cute cat"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="w-full mt-16">
                <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-blue-500" />
                        Tech Stack
                    </h2>
                    <p className="text-muted-foreground">
                        Technologies and tools I work with
                    </p>
                </div>

                <div>
                    {Object.keys(techStacks).map((category) => (
                        <div key={category} className="mb-6">
                            <span className="font-semibold">{category}:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {/* vvv What did i just change */}
                                {techStacks[category as keyof typeof techStacks].map((item) => (
                                    <SkillBadge key={item.name} text={item.name} icon={item.icon} className="bg-white cursor-default" />
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
