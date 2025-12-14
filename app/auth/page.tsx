"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Cpu, ShieldCheck, ArrowRight, Loader2, AlertTriangle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // Form States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [designation, setDesignation] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (isLogin) {
                // --- LOGIN LOGIC ---
                await authClient.signIn.email({
                    email,
                    password,
                }, {
                    onSuccess: () => {
                        router.push("/dashboard"); // <--- CHANGED THIS
                    },
                    onError: (ctx) => {
                        setError(ctx.error.message);
                        setLoading(false);
                    }
                });
            } else {
                // --- SIGN UP LOGIC ---
                await authClient.signUp.email({
                    email,
                    password,
                    name,
                    designation,
                    studentId,
                    phoneNumber: phone,
                } as any, { // Added 'as any' to fix the TS error
                    onSuccess: () => {
                        router.push("/dashboard"); // <--- CHANGED THIS
                    },
                    onError: (ctx) => {
                        setError(ctx.error.message);
                        setLoading(false);
                    }
                });
            }
        } catch (err) {
            setError("An unexpected system error occurred.");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">

            {/* Background Matrix */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="w-full max-w-md relative z-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-900/20 border border-red-500/30 rounded-lg mb-4">
                        <ShieldAlert className="w-6 h-6 text-red-500" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        Admin Access Only
                    </h1>
                    <p className="text-xs font-mono text-red-400 mt-2 uppercase tracking-widest">
                        Restricted to Council & Faculty
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Top Gradient Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* --- ERROR DISPLAY --- */}
                        {error && (
                            <div className="p-3 bg-red-950/20 border border-red-500/20 rounded flex items-center gap-2 text-xs text-red-400">
                                <AlertTriangle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        {/* --- FIELDS FOR BOTH --- */}
                        <AuthInput label="Email Address" type="email" value={email} onChange={setEmail} placeholder="u1234@bracu.ac.bd" />

                        {!isLogin && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-4 overflow-hidden">
                                <AuthInput label="Full Name" type="text" value={name} onChange={setName} placeholder="John Doe" />
                                <div className="grid grid-cols-2 gap-4">
                                    <AuthInput label="Student ID" type="text" value={studentId} onChange={setStudentId} placeholder="2210xxxx" />
                                    <AuthInput label="Phone Number" type="tel" value={phone} onChange={setPhone} placeholder="017xxxxxxxx" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Designation</label>
                                    <select
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                        className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors"
                                    >
                                        <option value="" disabled>Select Role</option>
                                        <option value="General Member">General Member</option>
                                        <option value="Executive">Executive</option>
                                        <option value="Director">Director</option>
                                    </select>
                                </div>
                            </motion.div>
                        )}

                        <AuthInput label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />

                        {/* --- SUBMIT BUTTON --- */}
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs rounded transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {loading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    {isLogin ? "Authenticate" : "Submit Credentials"}
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                    </form>

                    {/* Toggle Login/Signup */}
                    <div className="mt-6 pt-6 border-t border-white/5 text-center">
                        <p className="text-xs text-neutral-500">
                            {isLogin ? "No clearance?" : "Already authorized?"}
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-blue-400 hover:text-white font-bold underline underline-offset-4 transition-colors"
                            >
                                {isLogin ? "Request Access" : "Log In"}
                            </button>
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}

const AuthInput = ({ label, type, value, onChange, placeholder }: any) => (
    <div className="space-y-1">
        <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{label}</label>
        <input
            required
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-neutral-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
        />
    </div>
);