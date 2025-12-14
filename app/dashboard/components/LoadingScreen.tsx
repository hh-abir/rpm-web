import { Terminal } from "lucide-react";

export default function LoadingScreen() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <div className="flex flex-col items-center gap-4">
                <Terminal className="w-8 h-8 text-red-500 animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-red-500">AUTHENTICATING ADMIN PRIVILEGES...</span>
            </div>
        </div>
    );
}