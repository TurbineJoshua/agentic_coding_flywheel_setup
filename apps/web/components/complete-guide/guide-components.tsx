"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import {
  Check,
  Copy,
  Lightbulb,
  AlertTriangle,
  Info,
} from "lucide-react";
import { copyTextToClipboard } from "@/lib/utils";

export { FlywheelDiagram } from "./flywheel-diagram";

// =============================================================================
// GUIDE SECTION - Anchored sections with gradient headers + scroll reveal
// =============================================================================
type GuideSectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

export function GuideSection({
  id,
  number,
  title,
  children,
}: GuideSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const rm = prefersReducedMotion ?? false;

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={rm ? {} : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={rm ? {} : { type: "spring", stiffness: 80, damping: 20, mass: 1 }}
      className="relative scroll-mt-32 pb-24 md:pb-40 w-full"
    >
      {/* Naked Typography Header */}
      <div className="relative mb-16 flex flex-col xl:flex-row items-start xl:items-baseline gap-6 xl:gap-12">
        {typeof number === "string" && number !== "" && (
          <div className="flex-shrink-0">
            <span className="font-mono text-[4rem] sm:text-[6rem] xl:text-[8rem] font-black leading-none tracking-tighter text-white opacity-10 xl:absolute xl:-left-32 xl:top-0">
              {number.padStart(2, '0')}
            </span>
          </div>
        )}

        <div className="flex-1 min-w-0 z-10 relative">
          {title.startsWith('Phase ') ? (
            <div className="flex flex-col gap-4">
              <span className="text-[#FF5500] font-mono text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.3em] font-bold flex items-center gap-4">
                <span className="w-8 h-px bg-[#FF5500]/40" />
                {title.split(':')[0]}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1.05]">
                {title.split(':').slice(1).join(':').trim()}
              </h2>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <span className="text-[#FF5500] font-mono text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.3em] font-bold flex items-center gap-4">
                <span className="w-8 h-px bg-[#FF5500]/40" />
                Section {number}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1.05]">
                {title}
              </h2>
            </div>
          )}
        </div>
      </div>
      
      <div className="w-full">{children}</div>
    </motion.section>
  );
}

// =============================================================================
// SUBSECTION
// =============================================================================
export function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-20 first:mt-12 group/sub relative w-full">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight flex items-baseline gap-4">
        <span className="text-[#FF5500] text-xl opacity-50 font-normal">/</span>
        {title}
      </h3>
      <div className="space-y-6 sm:space-y-8">{children}</div>
    </div>
  );
}

// =============================================================================
// PARAGRAPH
// =============================================================================
export function P({
  children,
  highlight,
}: {
  children: ReactNode;
  highlight?: boolean;
}) {
  return (
    <p
      className={`text-[1.1rem] sm:text-[1.2rem] lg:text-[1.25rem] leading-[1.7] tracking-[-0.015em] max-w-[65ch] ${
        highlight 
          ? "text-white font-medium bg-transparent p-0 rounded-none border-l-0 border-transparent shadow-none" 
          : "text-zinc-400 font-light"
      }`}
    >
      {highlight && <span className="inline-block w-2 h-2 rounded-full bg-[#FF5500] mr-3 relative -top-0.5 shadow-[0_0_8px_rgba(255,85,0,0.6)]" />}
      {children}
    </p>
  );
}

// =============================================================================
// BLOCKQUOTE - Clean typographic quote
// =============================================================================
export function BlockQuote({ children }: { children: ReactNode }) {
  return (
    <div className="relative pl-6 sm:pl-8 py-4 my-12 border-l-[3px] border-[#FF5500]/40 bg-transparent rounded-none max-w-[65ch]">
      <div className="relative text-white/90 italic leading-[1.7] text-[1.25rem] sm:text-[1.5rem] font-light tracking-tight">
        {children}
      </div>
    </div>
  );
}

// =============================================================================
// CODE BLOCK - Terminal-style wrapper
// =============================================================================
export function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-white/[0.08] bg-[#000000] shadow-2xl relative w-full group/cb">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5500]/20 to-transparent" />
      <div className="flex items-center gap-3 bg-white/[0.02] border-b border-white/[0.04] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="text-[0.6rem] font-mono uppercase tracking-widest text-white/30">{language}</div>
      </div>
      <div className="p-5 sm:p-6 overflow-x-auto">
        <code className="text-[0.85rem] sm:text-[0.95rem] text-zinc-300 font-mono leading-[1.7]">
          <pre>{code}</pre>
        </code>
      </div>
    </div>
  );
}

// =============================================================================
// PROMPT BLOCK - Naked Terminal Marginalia Style
// =============================================================================
export function PromptBlock({
  title,
  prompt,
  where,
  whyItWorks,
}: {
  title: string;
  prompt: string;
  where?: string;
  whyItWorks?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    const ok = await copyTextToClipboard(prompt);
    if (!ok) return;
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCopied(false);
      timerRef.current = null;
    }, 2000);
  }, [prompt]);

  const highlightPrompt = (text: string) => {
    const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const keywords = ['Search', 'Review', 'Read', 'Write', 'Fix', 'Create', 'Update', 'Do we have', 'OK', 'Look', 'Execute'];
    let highlighted = escaped;
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b(${kw})\\b`, 'g');
      highlighted = highlighted.replace(regex, '<span class="text-[#FF5500] font-medium">$1</span>');
    });
    highlighted = highlighted.replace(/(\[[A-Z_]+\])/g, '<span class="text-white/60 font-medium bg-white/10 px-1 rounded">$1</span>');
    return highlighted;
  };

  return (
    <div className="group relative border-l-2 border-white/10 bg-transparent py-2 pl-6 sm:pl-8 my-10 transition-colors duration-500 hover:border-[#FF5500]/40 w-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h4 className="text-[0.7rem] font-mono font-bold text-white uppercase tracking-[0.2em]">{title}</h4>
        <button
          onClick={handleCopy}
          className="text-white/30 hover:text-[#FF5500] transition-colors"
        >
          {copied ? <Check className="h-4 w-4 text-[#FF5500]" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      <div
        className="text-[0.85rem] sm:text-[0.95rem] text-zinc-400 whitespace-pre-wrap font-mono font-light leading-[1.6] selection:bg-[#FF5500]/20 selection:text-white"
        dangerouslySetInnerHTML={{ __html: highlightPrompt(prompt) }}
      />

      {(where || whyItWorks) && (
        <div className="mt-6 pt-4 border-t border-white/[0.05] space-y-4">
          {where && (
            <div>
              <span className="text-[0.6rem] font-bold text-white/30 uppercase tracking-widest block mb-1">Context</span>
              <p className="text-[0.8rem] text-zinc-500 font-light">{where}</p>
            </div>
          )}
          {whyItWorks && (
            <div>
              <span className="text-[0.6rem] font-bold text-[#FF5500]/50 uppercase tracking-widest block mb-1">Why It Works</span>
              <p className="text-[0.8rem] text-zinc-400 font-light italic">{whyItWorks}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// DATA TABLE - Premium Minimalist
// =============================================================================
export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="relative w-full my-16 overflow-x-auto">
      <table className="w-full text-sm min-w-[600px] border-collapse">
        <thead>
          <tr className="border-b-2 border-white/10">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-4 text-left text-[0.65rem] font-bold text-white/50 uppercase tracking-[0.2em]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.05]">
          {rows.map((row, ri) => (
            <tr key={ri} className="group/row hover:bg-white/[0.02] transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-5 text-[0.95rem] font-light text-zinc-400 align-top">
                  {ci === 0 ? <span className="text-white font-medium">{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// =============================================================================
// PHASE CARD - Naked Typography
// =============================================================================
export function PhaseCard({
  phase,
  title,
  description,
  children,
}: {
  phase: string;
  title: string;
  description: string;
  gradient?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative py-12 border-t border-white/[0.05] group/phase">
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-16 items-start">
        <div className="w-32 shrink-0">
          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/30 mb-2">Phase</div>
          <div className="font-mono text-4xl sm:text-5xl font-black text-white">{phase}</div>
        </div>

        <div className="flex-1 max-w-[65ch]">
          <h3 className="font-bold text-white text-2xl sm:text-3xl tracking-tight mb-4 group-hover/phase:text-[#FF5500] transition-colors">{title}</h3>
          <p className="text-[1.1rem] sm:text-[1.2rem] text-zinc-400 leading-relaxed font-light">{description}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// TIP BOX - Refined & Minimalist
// =============================================================================
export function TipBox({
  children,
  variant = "tip",
}: {
  children: ReactNode;
  variant?: "tip" | "warning" | "info";
}) {
  const config = {
    tip: {
      icon: <Lightbulb className="h-5 w-5" />,
      color: "text-[#FFBD2E]",
      bg: "bg-[#FFBD2E]/[0.03]",
      border: "border-[#FFBD2E]/10",
      title: "Insight",
      dot: "bg-[#FFBD2E]",
    },
    warning: {
      icon: <AlertTriangle className="h-5 w-5" />,
      color: "text-[#FF5F56]",
      bg: "bg-[#FF5F56]/[0.03]",
      border: "border-[#FF5F56]/10",
      title: "Critical",
      dot: "bg-[#FF5F56]",
    },
    info: {
      icon: <Info className="h-5 w-5" />,
      color: "text-[#27C93F]",
      bg: "bg-[#27C93F]/[0.03]",
      border: "border-[#27C93F]/10",
      title: "Note",
      dot: "bg-[#27C93F]",
    },
  };
  const c = config[variant];

  return (
    <div
      className={`relative rounded-2xl border ${c.border} ${c.bg} p-6 sm:p-8 my-10 overflow-hidden group/tip shadow-lg`}
    >
      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover/tip:opacity-[0.08] transition-opacity duration-700 pointer-events-none group-hover/tip:scale-110">
        {c.icon}
      </div>
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className={`text-[0.7rem] font-bold ${c.color} uppercase tracking-widest flex items-center gap-2.5`}>
          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} shadow-[0_0_8px_currentColor] animate-pulse`} />
          {c.title}
        </div>
        <div className="text-zinc-300 text-[1rem] sm:text-[1.1rem] leading-[1.7] font-light tracking-[-0.01em] [&>strong]:text-white [&>strong]:font-medium">{children}</div>
      </div>
    </div>
  );
}

// =============================================================================
// TOOL PILL - Brutalist
// =============================================================================
export function ToolPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-white/20 bg-white/[0.02] text-white text-[0.8rem] font-mono tracking-tight cursor-help mx-1">
      {children}
    </span>
  );
}

// =============================================================================
// INLINE CODE
// =============================================================================
export function IC({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 text-zinc-200 text-[0.9em] font-mono font-normal">
      {children}
    </code>
  );
}

// =============================================================================
// HIGHLIGHT - Understated
// =============================================================================
export function Hl({ children }: { children: ReactNode }) {
  return (
    <strong className="font-medium text-white">
      {children}
    </strong>
  );
}

// =============================================================================
// BULLET LIST
// =============================================================================
export function BulletList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-4 my-8 max-w-[65ch]">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <div className="mt-[0.6rem] h-[1px] w-4 bg-[#FF5500]/60 shrink-0" />
          <span className="text-zinc-400 text-[1.1rem] sm:text-[1.15rem] leading-[1.6] font-light">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// =============================================================================
// NUMBERED LIST
// =============================================================================
export function NumberedList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ol className="space-y-6 my-10 max-w-[65ch] counter-reset-list">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-6 relative">
          <span className="text-[0.8rem] font-mono font-bold text-white/30 shrink-0 mt-1">
            {(i + 1).toString().padStart(2, '0')}
          </span>
          <span className="text-zinc-400 text-[1.1rem] sm:text-[1.15rem] leading-[1.6] font-light">{item}</span>
        </li>
      ))}
    </ol>
  );
}

// =============================================================================
// DIVIDER
// =============================================================================
export function Divider() {
  return (
    <div className="w-16 h-px bg-white/20 my-24 sm:my-32" />
  );
}

// =============================================================================
// STAT CARD - Naked Typography
// =============================================================================
export function StatCard({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="py-6 border-l-2 border-white/10 pl-6 group/stat transition-colors hover:border-[#FF5500]/40">
      <div className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-2 group-hover/stat:text-[#FF5500] transition-colors">
        {value}
      </div>
      <div className="text-sm sm:text-base text-zinc-300 font-medium tracking-wide">{label}</div>
      {sublabel && <div className="mt-1 text-xs sm:text-sm text-zinc-500 font-light">{sublabel}</div>}
    </div>
  );
}

// =============================================================================
// PRINCIPLE CARD - Naked Typography Dropdown
// =============================================================================
export function PrincipleCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
  gradient?: string;
}) {
  const [open, setOpen] = useState(false);
  const hasContent = children !== null && children !== undefined && children !== false;

  return (
    <div className="border-b border-white/[0.05] group/prin">
      <button
        onClick={() => hasContent && setOpen(!open)}
        className={`w-full py-6 flex items-start sm:items-center gap-6 text-left ${hasContent ? "cursor-pointer" : "cursor-default"}`}
        aria-expanded={open}
        disabled={!hasContent}
      >
        <div className="font-mono text-xl font-black text-white/40 group-hover/prin:text-white transition-colors w-8">
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-white text-lg sm:text-xl tracking-tight group-hover/prin:text-[#FF5500] transition-colors pr-4">{title}</h4>
        </div>
        {hasContent && (
          <div className="shrink-0 text-white/30 group-hover/prin:text-[#FF5500] transition-colors">
            {open ? "—" : "+"}
          </div>
        )}
      </button>
      <AnimatePresence>
        {open && hasContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-14 pb-8 max-w-[65ch] text-zinc-400 text-[1.05rem] leading-[1.6] font-light">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// =============================================================================
// OPERATOR CARD - Naked Typography
// =============================================================================
export function OperatorCard({
  number,
  name,
  definition,
  trigger,
  failureMode,
  children,
}: {
  number: string;
  name: string;
  definition: string;
  trigger?: string;
  failureMode?: string;
  children?: ReactNode;
}) {
  return (
    <div className="py-10 border-l-[3px] border-white/10 pl-6 sm:pl-10 my-12 transition-colors duration-500 hover:border-[#FF5500]/40 group/op">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
        <div className="font-mono text-xl sm:text-2xl font-black text-[#FF5500] opacity-60 group-hover/op:opacity-100 transition-opacity">
          {number}
        </div>
        <div>
          <h4 className="font-bold text-white text-xl sm:text-2xl tracking-tight mb-2">{name}</h4>
          <p className="text-[1.1rem] text-zinc-400 leading-relaxed font-light max-w-[65ch]">{definition}</p>
        </div>
      </div>
      
      <div className="space-y-4 max-w-[65ch]">
        {trigger && (
          <div className="flex items-start gap-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#FF5500] w-24 shrink-0 pt-1">Trigger</span>
            <span className="text-zinc-300 text-[1.05rem] leading-relaxed font-light">{trigger}</span>
          </div>
        )}
        {failureMode && (
          <div className="flex items-start gap-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50 w-24 shrink-0 pt-1">Failure</span>
            <span className="text-zinc-400 text-[1.05rem] leading-relaxed font-light">{failureMode}</span>
          </div>
        )}
        {children && <div className="mt-6 pt-6 border-t border-white/[0.05] text-zinc-400 text-[1.05rem] font-light leading-relaxed">{children}</div>}
      </div>
    </div>
  );
}


// =============================================================================
// TABLE OF CONTENTS - Replaced by Floating HUD later, but keep simple for now
// =============================================================================
export function TableOfContents({
  items,
}: {
  items: { id: string; label: string; number: string }[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-white/[0.03]" />
      <ul className="space-y-1 relative">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              {isActive && (
                <motion.div
                  layoutId="toc-indicator"
                  className="absolute left-[11px] top-[10px] w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group flex items-center gap-4 py-1.5 pl-8 pr-4 text-[0.8rem] transition-colors ${
                  isActive
                    ? "text-white font-medium"
                    : "text-zinc-500 hover:text-zinc-300 font-light"
                }`}
              >
                <span className={`font-mono text-[0.65rem] ${isActive ? "text-primary font-bold" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                  {item.number.padStart(2, '0')}
                </span>
                <span className="truncate">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export * from "./plan-to-beads-viz";
export * from "./swarm-execution-viz";
export * from "./agent-mail-viz";
export * from "./plan-evolution-studio";
export * from "./flywheel-diagram";
export * from "./context-horizon-viz";
export * from "./convergence-viz";
