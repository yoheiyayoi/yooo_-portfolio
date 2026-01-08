import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, MousePointerClick } from 'lucide-react'
import type { Projects } from "@/types/project.type";
import { cn } from '@/lib/utils';
import Badge from './Badge';
import Roblox from './ui/svgs/roblox';

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

export const ProjectCard = ({ project, setSelectedImage }: { project: Projects, setSelectedImage: Function }) => {
    const isPrivate = project.type === "Private";

    return (
        <div
            key={project.title}
            className="group flex flex-col md:flex-row gap-4 md:gap-6 p-4 rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 transition-colors duration-200"
        >

            {/* Image */}
            <div className="shrink-0">
                <div
                    className="relative cursor-pointer overflow-hidden rounded-xl group/image"
                    onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
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
                                <span>{project.title}</span>
                                <span className={cn("size-1 rounded-full", getTypeColor(project.type).dot)} />
                                <span className={cn("text-sm font-semibold", getTypeColor(project.type).text)}>
                                    {project.type}
                                </span>
                            </div>
                        </h3>

                        <div className="flex gap-2 shrink-0">
                            {project.linkGithub && (
                                <Link
                                    href={project.linkGithub as any}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </Link>
                            )}
                            {project.linkWebsite && (
                                <Link
                                    href={project.linkWebsite as any}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}
                            {project.linkRoblox && (
                                <Link
                                    href={project.linkRoblox as any}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </div>
                    <p className="text-base text-muted-foreground mb-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.stacks.map((tech, i) => (
                            <Badge key={i} text={tech} />
                        ))}
                    </div>
                </div>

                {/* Year Badge */}
                {project.year && (
                    <div className="mt-4 flex justify-end">
                        <Badge text={project.year.toString()} className='bg-white text-gray-700 font-semibold text-md' />
                    </div>
                )}
            </div>
        </div>
    )
}
