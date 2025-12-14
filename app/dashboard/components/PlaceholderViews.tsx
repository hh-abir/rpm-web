import { Users, Settings, LayoutDashboard } from "lucide-react";

export const MembersView = () => (
    <div className="flex flex-col items-center justify-center h-full text-neutral-600 animate-in fade-in zoom-in duration-500">
        <Users className="w-16 h-16 mb-4 opacity-20" />
        <h3 className="text-lg font-bold text-neutral-400">Operative Database</h3>
        <p className="text-xs font-mono mt-2">ACCESS_DENIED: MODULE UNDER CONSTRUCTION</p>
    </div>
);

export const SettingsView = () => (
    <div className="flex flex-col items-center justify-center h-full text-neutral-600 animate-in fade-in zoom-in duration-500">
        <Settings className="w-16 h-16 mb-4 opacity-20" />
        <h3 className="text-lg font-bold text-neutral-400">System Configuration</h3>
        <p className="text-xs font-mono mt-2">ACCESS_DENIED: MODULE UNDER CONSTRUCTION</p>
    </div>
);

export const OverviewView = () => (
    <div className="flex flex-col items-center justify-center h-full text-neutral-600 animate-in fade-in zoom-in duration-500">
        <LayoutDashboard className="w-16 h-16 mb-4 opacity-20" />
        <h3 className="text-lg font-bold text-neutral-400">Mission Overview</h3>
        <p className="text-xs font-mono mt-2">STATUS: SYSTEM OPTIMAL</p>
    </div>
);