import ColourfulText from '@/components/ui/colourful-text'
import { Briefcase, Notebook, Sparkles } from 'lucide-react'

import { TypeScript, JavaScript, Lua, Python, Kotlin, Nextjs, Bun, ReactDark, TailwindCSS, ShadcnUiDark, ShadcnUiLight, TanStack, PrismaLight, Supabase, RobloxLight, GodotEngine, VisualStudioCode, ZedLight, RustLight, AstroLight, RobloxDark, Tauri, GoLight } from "@ridemountainpig/svgl-react";
import Image from 'next/image';
import Link from 'next/link';
import Roblox from '@/components/ui/svgs/roblox';
import SkillBadge from '@/components/SkillBadge';

export default function page() {
    const techStacks = {
        Languages: [
            { name: "Luau", icon: <Lua /> },
            { name: "Python", icon: <Python /> },
            { name: "TypeScript", icon: <TypeScript /> },
            { name: "JavaScript", icon: <JavaScript /> },
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

        Tools: [
            { name: "Roblox Studio", icon: <RobloxLight /> },
            { name: "VSCode", icon: <VisualStudioCode /> },
            { name: "Zed", icon: <ZedLight /> },
        ],

        "Currently Exploring": [
            { name: "Godot Engine", icon: <GodotEngine /> },
            { name: "Go", icon: <GoLight /> },
            { name: "Tauri", icon: <Tauri /> },
        ]
    }

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
                                I'm 17 who started coding in Roblox since 2020. <br />
                                I’ve built small projects, made plugins for Roblox Studio and Minecraft, a few Discord bots, and some websites. I love coding, space, and reading comics.
                            </p>

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
                                {/* vvv i don't know what this this but it's work */}
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
