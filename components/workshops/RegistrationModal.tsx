import { Workshop } from "@/lib/workshop-data";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function RegistrationModal({ workshop, onClose }: { workshop: Workshop | null; onClose: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const ROBU_DEPTS = ["RPM", "SP", "HR", "EM", "IT", "F&M", "A&D", "E&P"];
    const ROBU_DESIGNATIONS = ["DADS", "Executive", "Junior Executive", "Apprentice", "General Member", "Probationary Member"];

    // Helper Inputs
    const FormInput = ({ label, placeholder, type = "text", required = true }: any) => (
        <div className="space-y-1">
            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{label} {required && "*"}</label>
            <input required={required} type={type} placeholder={placeholder} className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all" />
        </div>
    );

    // --- FIX APPLIED HERE ---
    // Using defaultValue="" on select, and removed 'selected' from the first option
    const FormSelect = ({ label, options }: any) => (
        <div className="space-y-1">
            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{label} *</label>
            <div className="relative">
                <select
                    required
                    defaultValue=""
                    className="w-full appearance-none bg-[#050505] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all cursor-pointer"
                >
                    <option value="" disabled>Select Option</option>
                    {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                    <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>
    );

    return (
        <AnimatePresence>
            {workshop && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

                        {/* Modal Header */}
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center shrink-0">
                            <div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Secure Registration Protocol</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    <p className="text-[10px] text-neutral-500 font-mono">TARGET: {workshop.title}</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-1 hover:text-red-400 transition-colors"><X className="w-5 h-5" /></button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* 1. Identity */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[01] PERSONAL_IDENTITY</span></div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormInput label="Full Name" placeholder="Ex: Adnan Sami" />
                                            <FormInput label="Student ID" placeholder="Ex: 22101xxx" />
                                            <FormInput label="Mobile No" placeholder="01xxxxxxxxx" type="tel" />
                                            <FormInput label="BracU Semester" placeholder="Ex: Spring 2025" />
                                        </div>
                                    </div>

                                    {/* 2. Contact */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[02] COMMS_UPLINK</span></div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormInput label="Personal Gmail" placeholder="example@gmail.com" type="email" />
                                            <FormInput label="G-Suite Email" placeholder="id@g.bracu.ac.bd" type="email" />
                                            <div className="col-span-1 md:col-span-2"><FormInput label="Facebook ID Link" placeholder="https://facebook.com/profile..." /></div>
                                        </div>
                                    </div>

                                    {/* 3. ROBU Info */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[03] ROBU_CLEARANCE</span></div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormSelect label="ROBU Department" options={ROBU_DEPTS} />
                                            <FormSelect label="ROBU Designation" options={ROBU_DESIGNATIONS} />
                                        </div>
                                    </div>

                                    {/* 4. Hardware/Misc */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5"><span className="text-[10px] font-mono text-blue-500">[04] SYSTEM_CHECK</span></div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Do you have a laptop? *</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer p-2 border border-white/10 rounded w-full hover:bg-white/5">
                                                    <input type="radio" name="laptop" value="yes" required className="accent-blue-500" /> Yes, I will bring it.
                                                </label>
                                                <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer p-2 border border-white/10 rounded w-full hover:bg-white/5">
                                                    <input type="radio" name="laptop" value="no" required className="accent-blue-500" /> No, I don't.
                                                </label>
                                            </div>
                                            <p className="text-[9px] text-yellow-500/80 font-mono">* Note: A laptop may be mandatory for this module.</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Expectations from Workshop *</label>
                                            <textarea required rows={3} placeholder="What skills do you hope to acquire?" className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-neutral-700 focus:border-blue-500 focus:outline-none transition-all resize-none" />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Remarks (Optional)</label>
                                            <textarea rows={2} placeholder="Any specific requirements or questions?" className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-neutral-700 focus:border-blue-500 focus:outline-none transition-all resize-none" />
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <button disabled={isSubmitting} type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group">
                                            {isSubmitting ? <>Encryting Data <span className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent" /></> : <>Confirm Registration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]"><CheckCircle className="w-10 h-10 text-green-500" /></div>
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Registration Confirmed</h3>
                                    <p className="text-neutral-400 text-sm max-w-xs mx-auto mb-8 leading-relaxed">Your credentials have been verified and added to the roster for <strong>{workshop.title}</strong>.<br /><br /><span className="text-xs font-mono text-neutral-500">CONFIRMATION_PACKET_SENT_TO_EMAIL</span></p>
                                    <button onClick={onClose} className="px-8 py-2 bg-white text-black font-bold uppercase text-xs tracking-wider rounded hover:bg-neutral-200 transition-colors">Close Protocol</button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}