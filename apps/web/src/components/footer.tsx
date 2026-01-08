import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
interface FooterLink {
    text: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

interface FooterProps {
    logo?: ReactNode;
    name?: string;
    columns?: FooterColumnProps[];
    copyright?: string;
    policies?: FooterLink[];
    showModeToggle?: boolean;
    className?: string;
}

export default function FooterSection({
    className,
}: FooterProps) {
    return (
        <footer className={cn("bg-white/30 w-full", className)}>
            <div className="container max-w-7xl mx-auto">
                <div className="text-slate-900 font-medium p-3">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <Image src="/yooo_.png" width={45} height={45} alt="yooo_" />
                        </div>
                        <p className="text-sm text-slate-600 ml-1">
                            © 2026 yooo_. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}
