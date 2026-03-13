"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Play, Pause, FileText, Database } from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// SVG CONSTANTS
// ============================================================================
const SVG_WIDTH = 600;
const SVG_HEIGHT = 300;

export function PlanToBeadsViz() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const totalSteps = 4;

  useEffect(() => {
    if (isPlaying && isInView) {
      timerRef.current = setTimeout(() => {
        setStep((s) => (s + 1) % totalSteps);
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step, isPlaying, isInView]);

  const handleNext = () => {
    setIsPlaying(false);
    setStep((s) => Math.min(totalSteps - 1, s + 1));
  };
  
  const handlePrev = () => {
    setIsPlaying(false);
    setStep((s) => Math.max(0, s - 1));
  };

  const steps = [
    {
      title: "The Monolithic Plan",
      desc: "All context lives in a single, un-executable markdown document.",
    },
    {
      title: "Decomposition",
      desc: "The agent extracts distinct workflows and features.",
    },
    {
      title: "Context Injection",
      desc: "Each extracted piece is enriched with its specific context.",
    },
    {
      title: "Dependency Graph (Beads)",
      desc: "Tasks are serialized into JSONL with strict prerequisites.",
    }
  ];

  // Visual state mapping
  const docOpacity = step === 0 ? 1 : step === 1 ? 0.6 : step === 2 ? 0.2 : 0;
  
  // Beads nodes data
  const beads = [
    { id: 1, x: 200, y: 50, label: "DB Init" },
    { id: 2, x: 350, y: 100, label: "Auth Flow" },
    { id: 3, x: 200, y: 150, label: "API Base" },
    { id: 4, x: 350, y: 200, label: "Dash UI" },
    { id: 5, x: 500, y: 150, label: "E2E Tests" },
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
  ];

  return (
    <div ref={ref} className="my-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0c] shadow-2xl glass-subtle overflow-hidden">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-white/[0.05] bg-white/[0.01]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/20 text-violet-400">
              <Database className="h-3.5 w-3.5" />
            </span>
            <h4 className="text-sm font-semibold text-white/90">Interactive: Plan Translation</h4>
          </div>
          <p className="text-xs text-white/50">{steps[step].desc}</p>
        </div>

        {/* CONTROLS */}
        <div className="mt-4 sm:mt-0 flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/[0.05]">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-white/10 text-white/70 transition-colors"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 pl-0.5" />}
          </button>
          
          <div className="h-4 w-px bg-white/10" />
          
          <button onClick={handlePrev} disabled={step === 0} className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-white/10 text-white/70 disabled:opacity-30 transition-colors">
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>
          <div className="flex gap-1.5 px-2">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-300",
                  step === i ? "bg-violet-400 scale-125 shadow-[0_0_8px_rgba(167,139,250,0.5)]" : "bg-white/20"
                )}
              />
            ))}
          </div>
          <button onClick={handleNext} disabled={step === totalSteps - 1} className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-white/10 text-white/70 disabled:opacity-30 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* VISUALIZATION CANVAS */}
      <div className="relative w-full aspect-[2/1] min-h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.05),transparent_70%)] overflow-hidden flex items-center justify-center">
        
        {/* Step 0 & 1: Markdown Document */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 top-1/2 -translate-y-1/2 w-[180px] h-[240px] bg-[#1e1e24] border border-white/10 rounded-lg shadow-2xl flex flex-col p-4 z-10"
          initial={false}
          animate={{
            opacity: docOpacity,
            scale: step === 0 ? 1 : 0.95,
            x: step >= 2 ? -50 : 0
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-4 w-4 text-violet-400" />
            <div className="h-2.5 w-24 bg-white/20 rounded-full" />
          </div>
          
          {/* Doc lines */}
          <div className="space-y-2 flex-1 relative">
            <div className="h-2 w-full bg-white/10 rounded-full" />
            <div className="h-2 w-5/6 bg-white/10 rounded-full" />
            
            <motion.div 
              className="h-8 w-full border border-violet-500/50 bg-violet-500/10 rounded-md mt-4 relative overflow-hidden"
              animate={{ borderColor: step >= 1 ? "rgba(167,139,250,0.8)" : "rgba(167,139,250,0.2)" }}
            >
               {step >= 1 && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent"
                  />
               )}
            </motion.div>
            
            <motion.div 
              className="h-8 w-4/5 border border-cyan-500/50 bg-cyan-500/10 rounded-md mt-2 relative overflow-hidden"
              animate={{ borderColor: step >= 1 ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.2)" }}
            >
               {step >= 1 && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  />
               )}
            </motion.div>
          </div>
        </motion.div>

        {/* Step 2 & 3: Beads Graph */}
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="20" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
            </marker>
          </defs>

          {/* Edges */}
          {edges.map((edge, i) => {
            const from = beads.find(b => b.id === edge.from)!;
            const to = beads.find(b => b.id === edge.to)!;
            
            return (
              <motion.line
                key={`edge-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="white"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                initial={{ strokeOpacity: 0, pathLength: 0 }}
                animate={{ 
                  strokeOpacity: step >= 3 ? 0.3 : 0,
                  pathLength: step >= 3 ? 1 : 0 
                }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            );
          })}
        </svg>

        {/* Bead Nodes (HTML overlaid to match SVG coordinates, responsive positioning is tricky so we use % relative to container center) */}
        {beads.map((bead, i) => {
          // Normalize coordinates to percentages relative to SVG viewbox (which is 600x300, so centered around 300x150)
          const pctX = ((bead.x - 300) / 600) * 100;
          const pctY = ((bead.y - 150) / 300) * 100;

          return (
            <motion.div
              key={`node-${i}`}
              className="absolute z-30 flex flex-col items-center"
              style={{
                left: `calc(50% + ${pctX}%)`,
                top: `calc(50% + ${pctY}%)`,
                transform: "translate(-50%, -50%)"
              }}
              initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
              animate={{
                opacity: step >= 2 ? 1 : 0,
                scale: step >= 2 ? 1 : 0,
                filter: step >= 3 ? "blur(0px)" : "blur(4px)",
              }}
              transition={{
                duration: 0.6,
                delay: step >= 2 ? i * 0.1 : 0,
                type: "spring"
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/40 bg-[#12121a] shadow-[0_0_15px_rgba(167,139,250,0.15)] relative">
                 {/* Internal contextual text lines filling up */}
                 <div className="flex flex-col gap-1 w-full px-2">
                    <motion.div 
                      className="h-1 bg-violet-400/60 rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: step >= 2 ? "100%" : 0 }}
                      transition={{ duration: 0.5, delay: step >= 2 ? i * 0.1 + 0.3 : 0 }}
                    />
                    <motion.div 
                      className="h-1 bg-violet-400/40 rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: step >= 2 ? "80%" : 0 }}
                      transition={{ duration: 0.5, delay: step >= 2 ? i * 0.1 + 0.5 : 0 }}
                    />
                    <motion.div 
                      className="h-1 bg-violet-400/20 rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: step >= 2 ? "60%" : 0 }}
                      transition={{ duration: 0.5, delay: step >= 2 ? i * 0.1 + 0.7 : 0 }}
                    />
                 </div>
              </div>
              <motion.span 
                className="mt-2 font-mono text-[10px] text-white/70 bg-black/50 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 3 ? 1 : 0 }}
                transition={{ delay: step >= 3 ? i * 0.1 + 0.4 : 0 }}
              >
                {bead.label}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
