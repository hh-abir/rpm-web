import React from "react";
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
    active: boolean;
    onClick: () => void;
    icon: LucideIcon;
    label: string;
    badge?: string;
}

export default function NavButton({ active, onClick, icon: Icon, label, badge }: NavButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 group ${active
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                }`}
        >
            <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${active ? "text-black" : "text-neutral-500 group-hover:text-white"}`} />
                <span>{label}</span>
            </div>
            {badge && (
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${active ? "bg-black text-white" : "bg-red-500 text-white"}`}>
                    {badge}
                </span>
            )}
        </button>
    );
}