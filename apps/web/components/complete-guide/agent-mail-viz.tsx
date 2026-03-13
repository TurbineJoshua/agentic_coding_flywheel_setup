"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Mail, Zap, XOctagon, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "broadcast" | "agentmail";

export function AgentMailViz() {
  const [mode, setMode] = useState<Mode>("agentmail");
  const ref = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const rm = prefersReducedMotion ?? false;

  const agents = [
    { id: 1, x: 20, y: 20, color: "#22d3ee", name: "A1 (UI)" },
    { id: 2, x: 80, y: 20, color: "#a855f7", name: "A2 (DB)" },
    { id: 3, x: 20, y: 80, color: "#f472b6", name: "A3 (API)" },
    { id: 4, x: 80, y: 80, color: "#34d399", name: "A4 (Tests)" }
  ];

  // Draw lines between all nodes for broadcast
  const broadcastLines = [];
  for (let i = 0; i < agents.length; i++) {
    for (let j = 0; j < agents.length; j++) {
      if (i !== j) {
        broadcastLines.push({ from: agents[i], to: agents[j] });
      }
    }
  }

  // Targeted lines for Agent Mail
  const directLines = [
    { from: agents[0], to: agents[2], active: true, msg: "Need /api/users" },
    { from: agents[1], to: agents[2], active: true, msg: "Schema updated" },
  ];

  return (
    <div ref={ref} className="my-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0c] shadow-2xl glass-subtle overflow-hidden flex flex-col">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.05] bg-white/[0.01]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={cn(
              "flex h-6 w-6 items-center justify-center rounded-md transition-colors duration-300",
              mode === "broadcast" ? "bg-red-500/20 text-red-400" : "bg-cyan-500/20 text-cyan-400"
            )}>
              <Mail className="h-3.5 w-3.5" />
            </span>
            <h4 className="text-sm font-semibold text-white/90">Interactive: Broadcast vs. Point-to-Point</h4>
          </div>
          <p className="text-xs text-white/50">
            {mode === "broadcast" 
              ? "Broadcast spam burns context window with O(N²) irrelevant messages." 
              : "Agent Mail uses targeted delivery and advisory locks to stay efficient."}
          </p>
        </div>

        {/* CONTROLS */}
        <div className="mt-4 sm:mt-0 flex p-1 bg-black/40 rounded-xl border border-white/[0.05]">
          <button 
            onClick={() => setMode("broadcast")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-1.5",
              mode === "broadcast" ? "bg-red-500/20 text-red-400 shadow-sm" : "text-white/40 hover:text-white/70"
            )}
          >
            <XOctagon className="h-3.5 w-3.5" />
            Broadcast
          </button>
          <button 
            onClick={() => setMode("agentmail")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-1.5",
              mode === "agentmail" ? "bg-cyan-500/20 text-cyan-400 shadow-sm" : "text-white/40 hover:text-white/70"
            )}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            Agent Mail
          </button>
        </div>
      </div>

      {/* CANVAS */}
      <div className="relative flex-1 min-h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.03),transparent_70%)] flex items-center justify-center p-8 overflow-hidden">
        
        {/* State Indicators */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          {mode === "broadcast" ? (
             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-1">
               <span className="text-xs font-mono text-red-400/80 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">O(N²) Messages</span>
               <span className="text-xs font-mono text-red-400/80 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">High Token Burn</span>
               <span className="text-xs font-mono text-red-400/80 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">Context Dilution</span>
             </motion.div>
          ) : (
             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-1">
               <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">O(1) Messages</span>
               <span className="text-xs font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Advisory Locks</span>
               <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">High SNR</span>
             </motion.div>
          )}
        </div>

        <div className="relative w-full max-w-sm aspect-square">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <AnimatePresence>
              {mode === "broadcast" ? (
                // Broadcast Lines
                broadcastLines.map((line, i) => (
                  <motion.line
                    key={`bc-${i}`}
                    x1={`${line.from.x}%`}
                    y1={`${line.from.y}%`}
                    x2={`${line.to.x}%`}
                    y2={`${line.to.y}%`}
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0, strokeDashoffset: 20 }}
                    animate={{ opacity: 0.4, strokeDashoffset: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      opacity: { duration: 0.3 },
                      strokeDashoffset: { duration: 0.5, repeat: Infinity, ease: "linear" }
                    }}
                  />
                ))
              ) : (
                // Targeted Lines
                directLines.map((line, i) => (
                  <motion.line
                    key={`am-${i}`}
                    x1={`${line.from.x}%`}
                    y1={`${line.from.y}%`}
                    x2={`${line.to.x}%`}
                    y2={`${line.to.y}%`}
                    stroke={line.from.color}
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.6, pathLength: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    filter="url(#glow)"
                  />
                ))
              )}
            </AnimatePresence>
          </svg>

          {/* Mail Packets Animating */}
          {mode === "agentmail" && directLines.map((line, i) => (
            <motion.div
              key={`packet-${i}`}
              className="absolute h-4 w-4 -ml-2 -mt-2 rounded-full border-2 border-white/50 bg-[#0a0a0c] z-10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ borderColor: line.from.color }}
              animate={{
                left: [`${line.from.x}%`, `${line.to.x}%`],
                top: [`${line.from.y}%`, `${line.to.y}%`],
              }}
              transition={{
                duration: 2,
                delay: i * 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: line.from.color }} />
            </motion.div>
          ))}

          {/* Broadcast Spam Packets */}
          {mode === "broadcast" && broadcastLines.map((line, i) => (
            <motion.div
              key={`spam-${i}`}
              className="absolute h-2 w-2 -ml-1 -mt-1 rounded-full bg-red-500/80 z-10 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              animate={{
                left: [`${line.from.x}%`, `${line.to.x}%`],
                top: [`${line.from.y}%`, `${line.to.y}%`],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1 + (i % 3) * 0.4,
                delay: (i * 0.7) % 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Node HTML Overlays */}
          {agents.map((agent) => (
            <div
              key={`node-${agent.id}`}
              className="absolute z-20 flex flex-col items-center"
              style={{
                left: `${agent.x}%`,
                top: `${agent.y}%`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div 
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-[#12121a] shadow-xl"
                style={{ borderColor: `${agent.color}50` }}
              >
                {/* File Lock overlay (Agent Mail Mode) */}
                <AnimatePresence>
                  {mode === "agentmail" && agent.id === 2 && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-3 -right-3 bg-emerald-500/20 border border-emerald-500/50 rounded-full p-1 shadow-[0_0_10px_rgba(16,185,129,0.3)] backdrop-blur-md"
                    >
                      <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Noise visualizer for Broadcast Mode */}
                <AnimatePresence>
                  {mode === "broadcast" && (
                    <motion.div
                      className="absolute inset-0 bg-red-500/20 rounded-2xl mix-blend-screen"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                <Zap className="h-6 w-6" style={{ color: agent.color }} />
              </div>
              <span className="mt-3 font-mono text-[11px] font-semibold tracking-wider text-white/80 bg-black/60 px-2 py-1 rounded border border-white/10">
                {agent.name}
              </span>
              
              {/* Message Toast */}
              {mode === "agentmail" && directLines.find(l => l.from.id === agent.id) && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-[-30px] whitespace-nowrap text-[9px] font-mono px-2 py-0.5 rounded border bg-black/80"
                  style={{ borderColor: `${agent.color}40`, color: agent.color }}
                >
                  {directLines.find(l => l.from.id === agent.id)?.msg}
                </motion.div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
