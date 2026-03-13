"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useReducedMotion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Sparkles, Rocket, Check, Copy } from "lucide-react";
import { Jargon } from "@/components/jargon";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { copyTextToClipboard } from "@/lib/utils";

import {
  GuideSection,
  SubSection,
  P,
  BlockQuote,
  PromptBlock,
  DataTable,
  TipBox,
  ToolPill,
  IC,
  Hl,
  BulletList,
  NumberedList,
  Divider,
  CodeBlock,
  PrincipleCard,
  OperatorCard,
} from "@/components/complete-guide/guide-components";
import { TufteSection, MainColumn, MarginColumn, FullWidthColumn } from "@/components/complete-guide/tufte-components";
import { FloatingHUD } from "@/components/complete-guide/floating-hud";
import { PlanToBeadsViz } from "@/components/complete-guide/plan-to-beads-viz";
import { AgentMailViz } from "@/components/complete-guide/agent-mail-viz";
import { SwarmExecutionViz } from "@/components/complete-guide/swarm-execution-comparison";
import { RepresentationLadder } from "@/components/complete-guide/representation-ladder";
import { ContextHorizonViz } from "@/components/complete-guide/context-horizon-viz";
import { CoordinationTrioViz } from "@/components/complete-guide/coordination-trio-viz";
import { ConvergenceViz } from "@/components/complete-guide/convergence-viz";
import { PlanEvolutionStudio } from "@/components/complete-guide/plan-evolution-studio";
import { FlywheelDiagram } from "@/components/complete-guide/flywheel-diagram";

// =============================================================================
// TOC DATA
// =============================================================================
const TOC_ITEMS = [
  { id: "mental-model", label: "15-Minute Mental Model", number: "0" },
  { id: "flywheel", label: "The Compounding Loop", number: "1" },
  { id: "philosophy", label: "Why Planning Dominates", number: "2" },
  { id: "infrastructure", label: "Infrastructure Setup", number: "3" },
  { id: "pre-planning", label: "Pre-Planning", number: "4" },
  { id: "initial-plan", label: "Creating the Plan", number: "5" },
  { id: "synthesis", label: "Multi-Model Synthesis", number: "6" },
  { id: "refinement", label: "Iterative Refinement", number: "7" },
  { id: "plan-to-beads", label: "Plan to Beads", number: "8" },
  { id: "bead-polishing", label: "Bead Polishing", number: "9" },
  { id: "idea-wizard", label: "Idea-Wizard Pipeline", number: "10" },
  { id: "agents-md", label: "The AGENTS.md File", number: "11" },
  { id: "swarm", label: "Agent Swarm Execution", number: "12" },
  { id: "single-branch", label: "Single-Branch Git", number: "13" },
  { id: "code-review", label: "Code Review Loops", number: "14" },
  { id: "testing", label: "Testing & QA", number: "15" },
  { id: "ui-polish", label: "UI/UX Polish", number: "16" },
  { id: "bug-hunting", label: "Deep Bug Hunting", number: "17" },
  { id: "shipping", label: "Committing & Shipping", number: "18" },
  { id: "toolchain", label: "Complete Toolchain", number: "19" },
  { id: "principles", label: "Key Principles", number: "20" },
  { id: "operationalizing", label: "Operators & Gates", number: "21" },
  { id: "patterns", label: "Observed Patterns", number: "22" },
  { id: "practical", label: "Practical Considerations", number: "23" },
  { id: "prompt-library", label: "Prompt Library", number: "24" },
];

// =============================================================================
// HERO SECTION
// =============================================================================
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48 border-b border-white/[0.03] bg-[#02040a]"
    >
      {/* High-end ambient effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      
      {/* Dynamic light spot */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(var(--primary-rgb), 0.12), transparent 80%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[140%] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.18),transparent_70%)] opacity-60" />
        <div className="absolute top-1/4 right-0 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(var(--violet-rgb),0.08),transparent_60%)]" />
        <div className="absolute -bottom-48 left-1/3 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(var(--emerald-rgb),0.05),transparent_60%)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[1100px] text-center relative z-10"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#FF5500] mb-12 shadow-2xl backdrop-blur-2xl relative overflow-hidden group/badge">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/badge:animate-[shimmer_1.5s_infinite] transition-transform" />
            <Sparkles className="h-4 w-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="tracking-[0.1em] uppercase">Complete Methodology Guide</span>
          </div>

          <h1 className="heading-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white tracking-[-0.05em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-black leading-[0.9] perspective-1000">
            The Flywheel{" "}
            <span className="block mt-6 bg-gradient-to-br from-white via-[#FF5500] to-violet-400 bg-clip-text text-transparent pb-6 drop-shadow-[0_0_60px_rgba(var(--primary-rgb),0.5)]">
              Approach
            </span>
          </h1>

          <p className="mx-auto mt-12 max-w-3xl text-xl text-zinc-400 sm:text-2xl md:text-3xl leading-relaxed font-extralight tracking-tight opacity-80">
            A definitive system for operating <Jargon term="ai-agents" className="text-white font-normal underline decoration-[#FF5500]/30 underline-offset-8">AI agent swarms</Jargon>. 
            Bridge the gap from <Hl>human intent</Hl> to <Hl>flawless execution</Hl>.
          </p>
        </motion.div>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FF5500]/40">Discover</span>
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [0.2, 0.8, 0.2] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-16 bg-gradient-to-b from-[#FF5500] via-violet-500/40 to-transparent rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================
export default function CompleteGuidePage() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-[#020408] selection:bg-[#FF5500]/20 selection:text-white overflow-x-hidden">
        <Hero />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative">
          {/* High-end ambient lighting */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[5%] left-0 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,85,0,0.02),transparent_60%)]" />
            <div className="absolute top-[30%] right-0 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.015),transparent_60%)]" />
          </div>

          <div className="flex flex-col lg:flex-row gap-20 xl:gap-32 py-24 md:py-40">
            {/* Main Content Stream */}
            <div className="flex-1 w-full min-w-0">
              {/* HOW TO READ THIS GUIDE */}
              <GuideSection
                id="how-to-read"
                number=""
                title="How to Read This Guide"
              >
                <P>
                  This document serves two different audiences at once:
                </P>
                <BulletList
                  items={[
                    <><Hl>New to the Flywheel:</Hl> Read Section 0 first, then Sections 1&ndash;15 in order. That gives you the mental movie, the core workflow, and the operating loop before the later reference material.</>,
                    <><Hl>Already using the tools:</Hl> Jump to Sections 8&ndash;15 if you mainly need the plan-to-beads-to-swarm workflow, or Section 24 if you want the prompt library.</>,
                    <><Hl>Adapting an existing project:</Hl> Focus on Sections 4&ndash;9, 11&ndash;14, and 20. That is where the reasoning about plans, beads, <IC>AGENTS.md</IC>, and swarm execution is most explicit.</>,
                  ]}
                />
                <P>
                  This document is intentionally comprehensive and exhaustive. That can feel overwhelming on a first encounter. The important thing to understand is that there is also a gentler on-ramp: a smaller &ldquo;core loop&rdquo; that captures most of the value with just three tools&mdash;<ToolPill>Agent Mail</ToolPill> for multi-agent coordination, <ToolPill>br</ToolPill> for task management, and <ToolPill>bv</ToolPill> for graph-aware triage so agents keep choosing the highest-leverage next bead.
                </P>
                <P highlight>
                  This guide is about moving the hardest thinking into representations that still fit into model <Jargon term="context-window">context windows</Jargon>. That is the whole game.
                </P>
              </GuideSection>

              <Divider />

              {/* SECTION 0 */}
              <GuideSection
                id="mental-model"
                number="0"
                title="If You&rsquo;re New: The 15-Minute Mental Model"
              >
                <P>
                  Most first-time readers get confused because three things are changing at
                  once: the <Hl>artifact</Hl> you are working in, the{" "}
                  <Hl>entity doing the thinking</Hl>, and the <Hl>source of truth</Hl> for
                  what happens next.
                </P>

                <SubSection title="Hold These Three Sentences">
                  <NumberedList
                    items={[
                      <>
                        The <Hl>markdown plan</Hl> is where the whole project still fits in context.
                      </>,
                      <>
                        The <Jargon term="beads" className="font-semibold bg-gradient-to-r from-[#FF5500] to-violet-400 bg-clip-text text-transparent">beads</Jargon> are how that thinking gets packaged for execution
                        by many agents.
                      </>,
                      <>
                        The <Hl>swarm</Hl> is not there to invent the system; it is there to
                        execute, review, test, and harden a system that was mostly designed
                        already.
                      </>,
                    ]}
                  />
                </SubSection>

                <SubSection title="Mental Model Glossary">
                  <DataTable
                    headers={["Term", "Plain-English Meaning", "Why It Matters"]}
                    rows={[
                      [
                        <strong key="t0">Markdown plan</strong>,
                        "A huge design document where the whole project still fits in context",
                        "Where architecture, workflows, tradeoffs, and intent get worked out",
                      ],
                      [
                        <strong key="t1">Bead</strong>,
                        <>
                          A self-contained work unit in <IC>br</IC> with context,
                          dependencies, and test obligations
                        </>,
                        "What agents actually execute",
                      ],
                      [
                        <strong key="t2">Bead graph</strong>,
                        "The full dependency structure across all beads",
                        <>
                          What lets <IC>bv</IC> compute the right next work
                        </>,
                      ],
                      [
                        <strong key="t3">Plan space</strong>,
                        "The reasoning mode where you are still shaping the whole system",
                        "The cheapest place to buy correctness",
                      ],
                      [
                        <strong key="t4">Bead space</strong>,
                        "The reasoning mode where you are shaping executable work packets",
                        "Where planning becomes swarm-ready",
                      ],
                      [
                        <strong key="t5">Code space</strong>,
                        "The implementation and verification layer inside the codebase",
                        "Where local execution happens",
                      ],
                      [
                        <strong key="t6">AGENTS.md</strong>,
                        <>The operating manual every agent must reload after compaction</>,
                        "Keeps the swarm from forgetting how to behave",
                      ],
                      [
                        <strong key="t7">Skill</strong>,
                        "A reusable instruction bundle that teaches agents how to use a tool or workflow well",
                        "How methods become repeatable instead of tacit lore",
                      ],
                      [
                        <strong key="t8">Agent Mail</strong>,
                        "The shared messaging and file-reservation layer",
                        "How agents coordinate without stepping on each other",
                      ],
                      [
                        <strong key="t9">bv</strong>,
                        "The graph-theory routing tool for beads",
                        "Keeps agents from choosing work randomly",
                      ],
                      [
                        <strong key="t10">Compaction</strong>,
                        "Context compression inside a long-running agent session",
                        <>
                          Why re-reading <IC>AGENTS.md</IC> is mandatory
                        </>,
                      ],
                      [
                        <strong key="t11">Fungible agents</strong>,
                        "Generalist agents that can replace one another",
                        "Makes crashes and amnesia survivable",
                      ],
                      [
                        <strong key="t12">CASS / CM</strong>,
                        "Session history and procedural memory",
                        "How the workflow learns from itself over time",
                      ],
                      [
                        <strong key="t13">rch</strong>,
                        "The offloading layer for heavy builds and tests",
                        "Prevents local CPU contention from degrading the swarm",
                      ],
                    ]}
                  />
                </SubSection>

                <SubSection title="One Complete Flywheel Run (Atlas Notes Case Study)">
                  <NumberedList
                    items={[
                      <>
                        <Hl>Human intent arrives.</Hl> &ldquo;I want a simple internal app for
                        uploading and searching team notes.&rdquo;
                      </>,
                      <>
                        <Hl>The first markdown plan gets expanded.</Hl> Spells out workflows:
                        upload, parse, tag, search, admin review. Captures constraints.
                      </>,
                      <>
                        <Hl>Competing models improve the plan.</Hl> GPT Pro, Claude, Gemini
                        produce alternatives. Best ideas are merged.
                      </>,
                      <>
                        <Hl>The plan turns into beads:</Hl> <IC>br-101</IC>: upload+parse,{" "}
                        <IC>br-102</IC>: search index, <IC>br-103</IC>: ingestion failure
                        dashboard, <IC>br-104</IC>: auth, <IC>br-105</IC>: e2e coverage.
                      </>,
                      <>
                        <Hl>Beads get polished</Hl> before implementation.
                      </>,
                      <>
                        <Hl>The swarm launches.</Hl> Agents read <IC>AGENTS.md</IC>, register
                        with <Jargon term="agent-mail">Agent Mail</Jargon>, claim beads, and use <IC>bv</IC>.
                      </>,
                      <>
                        <Hl>The human tends flow,</Hl> not code details.
                      </>,
                      <>
                        <Hl>Reviews, tests, UBS, and shipping happen.</Hl> CASS captures
                        session history.
                      </>,
                    ]}
                  />
                </SubSection>

                <SubSection title="The Representation Ladder">
                  <P>
                    The easiest way to stay oriented is to know what artifact is &ldquo;in
                    charge&rdquo; at each moment and what question that stage is answering.
                  </P>
                  <DataTable
                    headers={[
                      "Stage",
                      "Primary Artifact",
                      "Source of Truth",
                      "Main Question",
                      "Exit Signal",
                      "What Comes Next",
                    ]}
                    rows={[
                      [
                        "Intent shaping",
                        "Human notes / prompts",
                        "Human&rsquo;s goals",
                        "What are we building?",
                        "Workflows explicit",
                        "Markdown planning",
                      ],
                      [
                        "Planning",
                        "Markdown plan",
                        "Plan document",
                        "What should the system be?",
                        "Plan comprehensive enough to translate",
                        "Plan-to-beads",
                      ],
                      [
                        "Translation",
                        "Beads under construction",
                        "Emerging bead graph",
                        "How to convert design into work packets?",
                        "Every plan element in beads",
                        "Bead polishing",
                      ],
                      [
                        "Execution prep",
                        <>
                          Polished bead graph + <IC>AGENTS.md</IC>
                        </>,
                        "Beads, dependencies, rules",
                        "Can a fresh swarm execute without guessing?",
                        "Beads self-contained and launch-ready",
                        "Swarm launch",
                      ],
                      [
                        "Swarm implementation",
                        "Code + bead state + Agent Mail",
                        "Current codebase + bead/thread state",
                        "Is implementation progressing coherently?",
                        "Reviews stop finding major issues",
                        "Deep review and shipping",
                      ],
                      [
                        "Hardening / shipping",
                        "Tests, UBS results, commits",
                        "Verified code + issue status",
                        "Is it ready to land?",
                        "Quality gates pass",
                        "Memory / next cycle",
                      ],
                      [
                        "Memory / improvement",
                        "CASS sessions, CM rules",
                        "Distilled lessons",
                        "What should the next swarm inherit?",
                        "Reusable artifacts updated",
                        "Better next project",
                      ],
                    ]}
                  />
                </SubSection>

                <SubSection title="Where the Rest of the Guide Zooms In">
                  <DataTable
                    headers={["If you want to understand\u2026", "Go to\u2026"]}
                    rows={[
                      [
                        "Why planning dominates and why this is a flywheel",
                        "Sections 1\u20132",
                      ],
                      ["How to bootstrap the environment", "Sections 3\u20134"],
                      ["How the markdown planning loop works", "Sections 5\u20137"],
                      [
                        "How plans become beads and get polished",
                        "Sections 8\u201310",
                      ],
                      [
                        "How agents stay aligned during swarm execution",
                        "Sections 11\u201315",
                      ],
                      [
                        "How polish, deep review, and shipping work",
                        "Sections 16\u201318",
                      ],
                      [
                        "How tools, method contract, and prompts fit together",
                        "Sections 19\u201324",
                      ],
                    ]}
                  />
                </SubSection>

                <SubSection title="The Core Five Prompts">
                  <DataTable
                    headers={["Prompt Family", "What It Does", "Why It Matters"]}
                    rows={[
                      [
                        <strong key="p0">Kickoff / marching orders</strong>,
                        "Gets a fresh agent oriented, registered, and working",
                        "Prevents passive agents and communication purgatory",
                      ],
                      [
                        <strong key="p1">Plan to beads</strong>,
                        "Converts the plan into executable work units",
                        "Where planning becomes swarm-ready",
                      ],
                      [
                        <strong key="p2">Bead polishing</strong>,
                        "Expands and stress-tests the bead graph before coding",
                        "Where a good project stops being fragile",
                      ],
                      [
                        <strong key="p3">Self-review</strong>,
                        "Forces the author to re-read its own code with fresh eyes",
                        "Catches cheap bugs immediately",
                      ],
                      [
                        <strong key="p4">Deep review</strong>,
                        "Alternates cross-agent criticism with random exploration",
                        "Catches bugs local review misses",
                      ],
                    ]}
                  />
                </SubSection>
              </GuideSection>

              <Divider />

              {/* SECTION 1 */}
              <GuideSection
                id="flywheel"
                number="1"
                title="The Flywheel: A Compounding Loop"
              >
                <P highlight>
                  A compounding loop built around moving work through the right representation
                  at the right time.
                </P>

                <FlywheelDiagram />

                <SubSection title="The Five Stages">
                  <NumberedList
                    items={[
                      <>
                        Human clarifies <Hl>goals, workflows, tradeoffs, and constraints</Hl>
                      </>,
                      <>
                        Frontier models turn that into a coherent{" "}
                        <Hl>markdown plan</Hl>
                      </>,
                      <>
                        Plan converted into a <Hl>dependency-structured bead graph</Hl>
                      </>,
                      <>
                        Fungible swarm executes beads using{" "}
                        <Hl>Agent Mail + bv</Hl>
                      </>,
                      <>
                        Reviews, tests, UBS, CASS, and memory{" "}
                        <Hl>feed back into the next plan</Hl>
                      </>,
                    ]}
                  />
                </SubSection>

                <SubSection title="Key Supporting Pieces">
                  <BulletList
                    items={[
                      <>
                        <Hl>Markdown plans</Hl> are the whole-system reasoning artifact
                      </>,
                      <>
                        <ToolPill>br</ToolPill> beads are the executable task graph
                      </>,
                      <>
                        <IC>AGENTS.md</IC> is the shared operating manual
                      </>,
                      <>
                        <Hl>Agent Mail</Hl> is the coordination layer
                      </>,
                      <>
                        <ToolPill>bv</ToolPill> is the graph-theoretic routing layer
                      </>,
                      <>
                        <ToolPill>NTM</ToolPill> is the launch and lifecycle layer
                      </>,
                      <>
                        <ToolPill>CASS</ToolPill> / <ToolPill>CM</ToolPill> /{" "}
                        <ToolPill>UBS</ToolPill> are memory, pattern-extraction, and
                        quality-feedback layers
                      </>,
                    ]}
                  />
                </SubSection>

                <BlockQuote>
                  &ldquo;More agents &rarr; more sessions &rarr; better memory &rarr; better
                  coordination &rarr; safer speed &rarr; better output &rarr; more
                  sessions.&rdquo;
                </BlockQuote>

                <SubSection title="Why It Compounds">
                  <BulletList
                    items={[
                      <>
                        <Hl>Planning quality compounds</Hl> &mdash; you reuse prompts,
                        patterns, and reasoning structures that CASS proves worked.
                      </>,
                      <>
                        <Hl>Execution quality compounds</Hl> &mdash; better beads make swarm
                        behavior more deterministic.
                      </>,
                      <>
                        <Hl>Tool quality compounds</Hl> &mdash; agents use the tools,
                        complain about them, and then help improve them.
                      </>,
                      <>
                        <Hl>Memory compounds</Hl> &mdash; the results of one swarm become
                        training data for the next.
                      </>,
                    ]}
                  />
                </SubSection>
              </GuideSection>

              <Divider />

              {/* SECTION 2 */}
              <GuideSection
                id="philosophy"
                number="2"
                title="Philosophy: Why Planning Dominates"
              >
                <TipBox variant="info">
                  <strong>
                    The central thesis:{" "}
                    <strong>
                      85%+ of your time, attention, and energy should go into planning
                    </strong>
                  </strong>
                  , not implementation.
                </TipBox>

                <ContextHorizonViz />

                <BlockQuote>
                  &ldquo;The models are far smarter when reasoning about a plan that is very
                  detailed and fleshed out but still trivially small enough to easily fit
                  within their context window. This is really the key insight behind my
                  obsessive focus on planning.&rdquo;
                </BlockQuote>

                <P>
                  A markdown plan, even a 6,000-line one, is still vastly smaller than the
                  codebase it describes. Planning is front-loaded because you are doing{" "}
                  <Hl>global reasoning while global reasoning is still possible</Hl>.
                </P>

                <SubSection title="Human Leverage Is Front-Loaded">
                  <BlockQuote>
                    &ldquo;The planning is something I still do in a pretty manual way because
                    I think it&rsquo;s where you have the biggest impact on the entire
                    process. The plan creation is the most free form, creative, human part of
                    the process.&rdquo;
                  </BlockQuote>
                  <P>
                    The human injects intent, judgment, taste, product sense, and strategic
                    direction. These are the inputs that no model can supply from the problem
                    statement alone.
                  </P>
                </SubSection>

                <SubSection title="Plan Space, Bead Space, and Code Space">
                  <DataTable
                    headers={["Space", "Primary Artifact", "What You Decide", "Why Here"]}
                    rows={[
                      [
                        <strong key="s0">Plan space</strong>,
                        "Large markdown plan",
                        "Architecture, features, workflows, tradeoffs",
                        "Whole system fits in context",
                      ],
                      [
                        <strong key="s1">Bead space</strong>,
                        <>
                          <IC>br</IC> issues + dependencies
                        </>,
                        "Task boundaries, execution order, test obligations",
                        "Agents need explicit, local work units",
                      ],
                      [
                        <strong key="s2">Code space</strong>,
                        "Source files + tests",
                        "Actual implementation and verification",
                        "Plan already constrained high-level decisions",
                      ],
                    ]}
                  />
                  <RepresentationLadder />
                </SubSection>

                <SubSection title="Why This Prevents Slop">
                  <BlockQuote>
                    &ldquo;This workflow is what prevents it from generating slop. I spend 85%
                    of my time and energy in the planning phases.&rdquo;
                  </BlockQuote>
                  <P>
                    Without front-loaded planning, agents improvise architecture from a narrow
                    local window into the codebase. That is when you get placeholder
                    abstractions, missing workflow details, and contradictory assumptions baked
                    into the implementation.
                  </P>
                </SubSection>

                <SubSection title="The Economic Argument">
                  <P>
                    Planning tokens are far fewer and cheaper than implementation tokens. Each
                    planning round evaluates system-wide consequences, and each improvement
                    gets amortized across every downstream bead.
                  </P>
                  <BlockQuote>
                    &ldquo;The old woodworking maxim of &lsquo;Measure twice, cut once!&rsquo;
                    is worth revising as &lsquo;Check your beads N times, implement once,&rsquo;
                    where N is basically as many as you can stomach.&rdquo;
                  </BlockQuote>
                </SubSection>

                <SubSection title="V1 Is Not Everything">
                  <P>
                    Once you have a functioning v1, adding new features follows the same
                    process: create a detailed markdown plan, turn it into beads, and
                    implement. The <Jargon term="flywheel">flywheel</Jargon> just spins again.
                  </P>
                  <TipBox variant="tip">
                    Debates about architecture and approach belong in the planning stage so
                    that agents can just execute the beads without re-litigating design
                    decisions mid-implementation.
                  </TipBox>
                </SubSection>
              </GuideSection>

              <Divider />

              {/* SECTION 3 */}
              <GuideSection
                id="infrastructure"
                number="3"
                title="Infrastructure: Setting Up the Environment"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      ACFS is a &ldquo;Rails installer&rdquo; for <Jargon term="agentic">agentic</Jargon> engineering. A beginner
                      with a credit card and a laptop can paste one{" "}
                      <IC>curl | bash</IC> command and start vibe coding within minutes.
                    </P>

                    <SubSection title="ACFS: The One-Liner Bootstrapper">
                      <NumberedList
                        items={[
                          <>
                            Visit the wizard website at <a href="https://agent-flywheel.com" target="_blank" rel="noopener noreferrer" className="font-semibold bg-gradient-to-r from-[#FF5500] to-violet-400 bg-clip-text text-transparent underline decoration-[#FF5500]/40 underline-offset-2 hover:decoration-[#FF5500]/70 transition-colors">agent-flywheel.com</a>
                          </>,
                          <>
                            Follow the instructions to rent a <Jargon term="vps">VPS</Jargon>{" "}
                            <span className="text-white/40">(~$40&ndash;56/month)</span>
                          </>,
                          <>
                            Paste the one <IC>curl | bash</IC> command
                          </>,
                          <>
                            Type <IC>onboard</IC> and learn the workflow interactively
                          </>,
                          <>Start vibe coding immediately</>,
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="tip">
                      The installer is <Jargon term="idempotent">idempotent</Jargon> and checkpointed &mdash; if your connection
                      drops mid-install, re-running it picks up exactly where it left off.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <SubSection title="VPS Environment">
                      <DataTable
                        headers={["Aspect", "Value"]}
                        rows={[
                          ["User", <IC key="v0">ubuntu</IC>],
                          ["Shell", <><Jargon term="zsh">zsh</Jargon> + <Jargon term="oh-my-zsh">oh-my-zsh</Jargon> + powerlevel10k</>],
                          ["Workspace", <IC key="v2">/data/projects</IC>],
                          [<Jargon key="sudo" term="sudo">Sudo</Jargon>, "Passwordless (vibe mode)"],
                          ["Tmux prefix", <IC key="v4">Ctrl-a</IC>],
                        ]}
                      />
                    </SubSection>
                  </FullWidthColumn>
                </TufteSection>

                <TufteSection>
                  <MainColumn>
                    <SubSection title="Vibe Mode Aliases">
                      <P>
                        Three aliases ship by default that let agents run without permission
                        interruptions:
                      </P>
                      <CodeBlock
                        language="bash"
                        code={`alias cc='NODE_OPTIONS="--max-old-space-size=32768" claude --dangerously-skip-permissions'
alias cod='codex --dangerously-bypass-approvals-and-sandbox'
alias gmi='gemini --yolo'`}
                      />
                    </SubSection>
                    <SubSection title="Bootstrapping a New Project">
                      <CodeBlock
                        language="bash"
                        code={`acfs newproj myproject --interactive
# Creates: .git/, .beads/, .claude/, AGENTS.md, .gitignore`}
                      />
                    </SubSection>
                  </MainColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 4 */}
              <GuideSection
                id="pre-planning"
                number="4"
                title="Phase 0: Pre-Planning"
              >
                <TufteSection>
                  <MainColumn>
                    <SubSection title="Define Goals, Intent, and Workflows">
                      <P>
                        Before writing a single line of the plan, you need clarity on what the
                        product should feel like, which tradeoffs are acceptable, and which
                        workflows matter most. This front-loaded thinking is the highest-leverage
                        thing a human does in the entire process.
                      </P>
                    </SubSection>

                    <SubSection title="Choose the Tech Stack">
                      <BulletList
                        items={[
                          <>
                            <Hl>Web apps:</Hl> TypeScript, Next.js 16, React 19, Tailwind,
                            <Jargon term="supabase">Supabase</Jargon>, Rust/WASM for performance-critical parts
                          </>,
                          <>
                            <Jargon term="cli" className="font-semibold bg-gradient-to-r from-[#FF5500] to-violet-400 bg-clip-text text-transparent">CLI</Jargon> <Hl>tools:</Hl> Golang or Rust
                          </>,
                        ]}
                      />
                      <P>
                        Picking a stack is not a planning task &mdash; it is a pre-planning task.
                        An incoherent stack creates a cascade of contradictory beads.
                      </P>
                    </SubSection>

                    <SubSection title="Prepare Best Practices Guides">
                      <P>
                        Keep best practices guides in the project folder and reference them in{" "}
                        <IC>AGENTS.md</IC>. These documents teach agents the norms of the
                        codebase so they don&apos;t have to rediscover them from context alone.
                      </P>
                    </SubSection>

                    <SubSection title="Build the Foundation Bundle">
                      <P>
                        You need everything in this bundle before planning begins in earnest:
                      </P>
                      <BulletList
                        items={[
                          "A coherent tech stack",
                          "An initial architectural direction",
                          <>
                            A strong <IC>AGENTS.md</IC>
                          </>,
                          "Up-to-date best-practices guides",
                          "Enough product and workflow explanation for models to understand what good looks like",
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;When prompting the model to create the initial markdown plan, I spend
                      a lot of time explaining the goals and intent of the project and detailing
                      the workflows.&rdquo;
                    </BlockQuote>
                    <TipBox variant="warning">
                      Weak foundations leak uncertainty into every later stage. If any piece is
                      missing, the plan will silently absorb ambiguity that later shows up as
                      bad beads and confused agents.
                    </TipBox>
                    <TipBox variant="tip">
                      Bootstrap pattern: copy an existing repo&apos;s <IC>AGENTS.md</IC> into
                      the new repo as a starting point, then replace project-specific content.
                      This reuse keeps the operating manual consistent across projects.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 5 */}
              <GuideSection
                id="initial-plan"
                number="5"
                title="Phase 1: Creating the Initial Markdown Plan"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Take everything from Phase 0 (intent, stack, <IC>AGENTS.md</IC>, guides) and give it to <Jargon term="gpt-5">GPT Pro</Jargon> (or equivalent flagship model) to draft the initial plan.
                    </P>

                    <SubSection title="The Initial Plan Prompt">
                      <PromptBlock
                        title="Initial Plan Generation"
                        prompt={`We are going to build a new project called [NAME]. Here is the core goal and intent: [GOAL].\n\nThe technology stack will be: [STACK].\n\nFirst, carefully read through the attached AGENTS.md file and [BEST_PRACTICES_GUIDES] to fully understand our standard operating procedures and technical constraints.\n\nNow, generate a comprehensive, highly detailed markdown plan for this project. The plan MUST account for the following workflows and requirements:\n[DETAILED_REQUIREMENTS_AND_WORKFLOWS]\n\nBe specific about data models, API boundaries, and failure modes. Do not write placeholder sections. Think through how the system actually fits together end-to-end.`}
                        where="Sent to GPT Pro with all foundation bundle files attached."
                        whyItWorks="This prompt forces the model to synthesize the specific intent with the general best practices, establishing a structural baseline that is both custom to the project and obedient to your established architectural norms."
                      />
                    </SubSection>

                    <SubSection title="The Role of GPT Pro">
                      <P>
                        GPT Pro excels at synthesizing large, complex inputs into a coherent initial structure. It establishes the global architecture and sets the level of detail for subsequent refinement passes.
                      </P>
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="warning">
                      Do not skip straight to beads from this initial plan. The first draft is
                      structurally sound but often contains subtle hallucinations about edge
                      cases, or relies on standard boilerplates instead of optimal solutions.
                    </TipBox>
                    <BlockQuote>
                      &ldquo;The point of the markdown plan is that you can fit the entire thing
                      in the context window and have models reason about it globally.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 6 */}
              <GuideSection
                id="multi-model"
                number="6"
                title="Phase 2: Multi-Model Expansion"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      No single model writes a perfect plan. They have different biases, blind spots, and architectural preferences. We fix this by passing the GPT Pro draft to its competitors.
                    </P>

                    <SubSection title="The Diversification Strategy">
                      <BulletList
                        items={[
                          <><Hl>Claude Opus / Sonnet:</Hl> Excellent at execution details, API boundaries, and finding where the plan is vague about implementation.</>,
                          <><Hl>Gemini:</Hl> Exceptional at spotting missing edge cases, user experience gaps, and alternative framings.</>,
                          <><Hl>Grok:</Hl> Good at challenging assumptions, proposing counterintuitive solutions, and stress-testing the architecture.</>,
                        ]}
                      />
                    </SubSection>
                    
                    <SubSection title="The Expansion Prompt">
                      <PromptBlock
                        title="Competitor Review"
                        prompt={`Here is a draft markdown plan for a new project. I need you to review it critically.\n\nWhere is it vague? What edge cases is it missing? Are there better architectural approaches for the specified stack? What failure modes are ignored?\n\nPlease rewrite the plan to be significantly better, more robust, more detailed, and more comprehensive. Keep the same general structure, but upgrade the content.`}
                        where="Sent independently to Claude, Gemini, and Grok, providing each with the initial GPT Pro plan."
                        whyItWorks="Models are often better at critiquing another model's work than generating novel work from scratch. This prompts them specifically to hunt for weaknesses and patch them."
                      />
                    </SubSection>

                    <SubSection title="The Synthesis Prompt">
                      <P>
                        Once you have the revised plans from Claude, Gemini, and Grok, you feed them ALL back into the original planner (GPT Pro) to synthesize the ultimate version.
                      </P>
                      <PromptBlock
                        title="Best-of-All-Worlds Synthesis"
                        prompt={`Here is our original draft plan, followed by three revised versions from other expert engineers. I want you to synthesize these into a single, master plan.\n\nTake the absolute best ideas, the clearest architectural decisions, the most robust error handling, and the most comprehensive workflow details from ALL of the plans and combine them into one definitive markdown document.\n\nResolve any contradictions logically, and do not lose any of the important nuances or edge cases identified by the reviewers.`}
                        where="Sent back to GPT Pro with all draft versions attached."
                        whyItWorks="This prevents the 'averaging out' effect of LLM synthesis. By explicitly commanding it to keep the *best* specific ideas and *resolve* contradictions, you get a hybrid plan that is strictly superior to any single model's output."
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;Different frontier models have different &apos;tastes&apos; and blind spots.
                      Passing a plan through a gauntlet of different models is the cheapest way
                      to buy architectural robustness.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 7 */}
              <GuideSection
                id="agent-mail"
                number="7"
                title="Phase 3: Agent Mail Coordination"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Agent Mail is the coordination layer where agents register, claim beads, and communicate.
                    </P>

                    <SubSection title="Agent Mail Workflow">
                      <NumberedList
                        items={[
                          <>
                            <Hl>Agent registration:</Hl> Every agent must register with Agent Mail before claiming beads.
                          </>,
                          <>
                            <Hl>Claiming beads:</Hl> Agents claim beads in order of dependency, one at a time.
                          </>,
                          <>
                            <Hl>Communication:</Hl> Agents can send messages to other agents, and Agent Mail handles file reservations.
                          </>,
                        ]}
                      />
                    </SubSection>

                    <SubSection title="Agent Mail Architecture">
                      <DataTable
                        headers={["Component", "Purpose"]}
                        rows={[
                          ["Inbox", "Where agents receive messages"],
                          ["Outbox", "Where agents send messages"],
                          ["File reservations", "Prevents conflicts when multiple agents need to edit the same file"],
                          ["Agent status", "Tracks which agents are currently working on which beads"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;Agent Mail is the shared messaging and file-reservation layer where agents coordinate without stepping on each other.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 8 */}
              <GuideSection
                id="plan-to-beads"
                number="8"
                title="Phase 4: Plan to Beads"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Plan-to-beads is the translation problem where the human intent and architecture get turned into executable work units.
                    </P>

                    <SubSection title="The Plan-to-Beads Prompt">
                      <PromptBlock
                        title="Plan-to-Beads Conversion"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>

                    <SubSection title="The Bead Structure">
                      <P>
                        Each bead has a title, description, and a set of requirements. The requirements are the
                        specific details that the agent needs to know in order to implement the bead.
                      </P>
                      <DataTable
                        headers={["Field", "Purpose"]}
                        rows={[
                          ["Title", "A short, descriptive name for the bead"],
                          ["Description", "A detailed description of what the bead does"],
                          ["Requirements", "Specific details that the agent needs to know"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;Plan-to-beads is a distinct translation problem where the human intent and architecture get turned into executable work units.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <PlanToBeadsViz />
                  </FullWidthColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 9 */}
              <GuideSection
                id="bead-polishing"
                number="9"
                title="Phase 5: Bead Polishing"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Bead polishing is the process of expanding and stress-testing the bead graph before any code is written.
                    </P>

                    <SubSection title="The Bead Polishing Prompt">
                      <PromptBlock
                        title="Bead Polishing"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>

                    <SubSection title="The Bead Structure">
                      <P>
                        Each bead has a title, description, and a set of requirements. The requirements are the
                        specific details that the agent needs to know in order to implement the bead.
                      </P>
                      <DataTable
                        headers={["Field", "Purpose"]}
                        rows={[
                          ["Title", "A short, descriptive name for the bead"],
                          ["Description", "A detailed description of what the bead does"],
                          ["Requirements", "Specific details that the agent needs to know"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;Bead polishing is the process of expanding and stress-testing the bead graph before any code is written.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>

              </GuideSection>

              <Divider />

              {/* SECTION 10 */}
              <GuideSection
                id="sync-to-br"
                number="10"
                title="Phase 6: Syncing to br"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Once the beads are polished in the LLM session, they must be saved to the local file system so the <IC>br</IC> CLI tool can manage them.
                    </P>

                    <SubSection title="The Sync Process">
                      <P>
                        You can manually copy the JSONL output into <IC>.beads/issues.jsonl</IC>, or you can use a script to parse the LLM output and write it.
                      </P>
                      <CodeBlock
                        language="bash"
                        code={`# Verify the beads are loaded correctly
br list

# Check the dependency graph
br graph

# See what is ready to be worked on right now
br ready`}
                    />
                    </SubSection>

                    <SubSection title="Bead State Machine">
                      <P>Every bead in <IC>br</IC> moves through these states:</P>
                      <BulletList
                        items={[
                          <><Hl>TODO:</Hl> Unstarted.</>,
                          <><Hl>BLOCKED:</Hl> Waiting on dependencies.</>,
                          <><Hl>IN_PROGRESS:</Hl> Currently being worked on by an agent.</>,
                          <><Hl>REVIEW:</Hl> Implementation complete, awaiting validation.</>,
                          <><Hl>DONE:</Hl> Merged and verified.</>,
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &quot;The beads file is the single source of truth for the swarm&apos;s
                      progress. If it&apos;s not in <IC>br</IC>, it doesn&apos;t exist.&quot;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 11 */}
              <GuideSection
                id="idea-wizard"
                number="11"
                title="Phase 7: Idea Wizard Pipeline"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      The Idea Wizard is a pipeline that generates ideas for new features or improvements.
                    </P>

                    <SubSection title="The Idea Wizard Prompt">
                      <PromptBlock
                        title="Idea Wizard"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>

                    <SubSection title="The Bead Structure">
                      <P>
                        Each bead has a title, description, and a set of requirements. The requirements are the
                        specific details that the agent needs to know in order to implement the bead.
                      </P>
                      <DataTable
                        headers={["Field", "Purpose"]}
                        rows={[
                          ["Title", "A short, descriptive name for the bead"],
                          ["Description", "A detailed description of what the bead does"],
                          ["Requirements", "Specific details that the agent needs to know"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;The Idea Wizard is a pipeline that generates ideas for new features or improvements.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 12 */}
              <GuideSection
                id="swarm"
                number="12"
                title="Phase 8: Agent Swarm Execution"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Agent swarm execution is the process where agents work together to implement the project.
                    </P>

                    <SubSection title="The Agent Swarm Prompt">
                      <PromptBlock
                        title="Agent Swarm Execution"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>

                    <SubSection title="The Bead Structure">
                      <P>
                        Each bead has a title, description, and a set of requirements. The requirements are the
                        specific details that the agent needs to know in order to implement the bead.
                      </P>
                      <DataTable
                        headers={["Field", "Purpose"]}
                        rows={[
                          ["Title", "A short, descriptive name for the bead"],
                          ["Description", "A detailed description of what the bead does"],
                          ["Requirements", "Specific details that the agent needs to know"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;Agent swarm execution is the process where agents work together to implement the project.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <AgentMailViz />
                  </FullWidthColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <SwarmExecutionViz />
                  </FullWidthColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <CoordinationTrioViz />
                  </FullWidthColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <ConvergenceViz />
                  </FullWidthColumn>
                </TufteSection>

                <TufteSection>
                  <MainColumn>
                    <SubSection title="bv for Task Selection">
                      <PromptBlock
                        title="Task Selection"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>

                    <SubSection title="The Bead Structure">
                      <P>
                        Each bead has a title, description, and a set of requirements. The requirements are the
                        specific details that the agent needs to know in order to implement the bead.
                      </P>
                      <DataTable
                        headers={["Field", "Purpose"]}
                        rows={[
                          ["Title", "A short, descriptive name for the bead"],
                          ["Description", "A detailed description of what the bead does"],
                          ["Requirements", "Specific details that the agent needs to know"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;bv for Task Selection is the process where agents work together to implement the project.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>

                <TufteSection>
                  <FullWidthColumn>
                    <PlanEvolutionStudio />
                  </FullWidthColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 13 */}
              <GuideSection
                id="single-branch"
                number="13"
                title="Phase 9: Single-Branch Git"
              >
                <TufteSection>
                  <MainColumn>
                    <P>
                      Single-branch Git is the process where agents work together to implement the project.
                    </P>

                    <SubSection title="The Single-Branch Git Prompt">
                      <PromptBlock
                        title="Single-Branch Git"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>

                    <SubSection title="The Bead Structure">
                      <P>
                        Each bead has a title, description, and a set of requirements. The requirements are the
                        specific details that the agent needs to know in order to implement the bead.
                      </P>
                      <DataTable
                        headers={["Field", "Purpose"]}
                        rows={[
                          ["Title", "A short, descriptive name for the bead"],
                          ["Description", "A detailed description of what the bead does"],
                          ["Requirements", "Specific details that the agent needs to know"],
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;Single-branch Git is the process where agents work together to implement the project.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 14 */}
              <GuideSection id="code-review" number="14" title="Phase 9: Code Review Loops">
                <TufteSection>
                  <MainColumn>
                    <P>Code review in a multi-agent swarm follows a different rhythm than traditional code review. No PR, no human reviewer, no approval gate. Instead, review is woven into the implementation cycle itself.</P>

                    <SubSection title="Self-Review After Each Bead">
                      <PromptBlock
                        title="Self-Review Prompt"
                        prompt={`Great, now I want you to carefully read over all of the new code you just wrote and other existing code you just modified with "fresh eyes" looking super carefully for any obvious bugs, errors, problems, issues, confusion, etc. Carefully fix anything you uncover.`}
                        where="Send to each agent after completing a bead"
                        whyItWorks="Forces the agent to re-examine its own work without the bias of implementation momentum"
                      />
                      <P><Hl>How many rounds?</Hl> Run until the agent reports &ldquo;I reviewed everything and found no issues.&rdquo; Typically 1&ndash;2 rounds.</P>
                    </SubSection>

                    <SubSection title="Cross-Agent Review (Periodic)">
                      <P>Every 30&ndash;60 minutes or after a natural milestone:</P>
                      <PromptBlock
                        title="Cross-Agent Review Prompt"
                        prompt={`Ok can you now turn your attention to reviewing the code written by your fellow agents and checking for any issues, bugs, errors, problems, inefficiencies, security problems, reliability issues, etc. and carefully diagnose their underlying root causes using first-principle analysis and then fix or revise them if necessary? Don't restrict yourself to the latest commits, cast a wider net and go super deep!`}
                        where="Send to 1-2 agents that just finished a bead"
                        whyItWorks="Catches cross-agent integration bugs that self-review misses"
                      />
                      <P>Cross-agent review catches a fundamentally different class of bugs than self-review. When Agent A implements a function and Agent B calls it, Agent A&apos;s self-review won&apos;t catch Agent B passing arguments in the wrong order.</P>
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="tip">
                      <strong>Review Synchronization:</strong><br/><br/>
                      {"Don't have all agents stop to review simultaneously. Pick 1-2 agents that just finished a bead while others continue implementing."}
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 15 */}
              <GuideSection id="testing" number="15" title="Phase 10: Testing and Quality Assurance">
                <TufteSection>
                  <MainColumn>
                    <SubSection title="UBS: The Quality Gate">
                      <CodeBlock language="bash" code={`ubs file.rs file2.rs                    # Specific files (< 1s)
ubs $(git diff --name-only --cached)    # Staged files
ubs --only=rust,toml src/               # Language filter
ubs .                                   # Whole project`} />
                      <P highlight>Golden Rule: <IC>ubs &lt;changed-files&gt;</IC> before every commit. Exit 0 = safe. Exit &gt;0 = fix and re-run.</P>
                    </SubSection>

                    <SubSection title="Creating Test Beads">
                      <P>If test coverage is insufficient after implementation:</P>
                      <PromptBlock
                        title="Test Bead Generation Prompt"
                        prompt={`Do we have full unit test coverage without using mocks/fake stuff? What about complete e2e integration test scripts with great, detailed logging? If not, then create a comprehensive and granular set of beads for all this.`}
                        where="After core implementation beads are complete"
                        whyItWorks="Generates structured test work that can be distributed across the agent swarm"
                      />
                    </SubSection>

                    <SubSection title="Testing With Agent Swarms">
                      <P>Tests are effectively free labor. By the time all beads are done, you should have hundreds of unit tests and e2e tests.</P>
                    </SubSection>

                    <SubSection title="Compiler Checks (CRITICAL)">
                      <P highlight>After any substantive code changes, always run the appropriate compiler and linter checks:</P>
                      <CodeBlock language="bash" code={`# Rust
cargo check --all-targets
cargo clippy --all-targets -- -D warnings
cargo fmt --check

# TypeScript
bun typecheck
bun lint`} />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      {"\"The tests become obsolete and need to be revised as the code changes, which slows down dev velocity. But if all the tests are written and maintained by agents, who cares? Add another couple agents and let them deal with it. It's free!\""}
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 16 */}
              <GuideSection id="ui-polish" number="16" title="Phase 11: UI/UX Polish">
                <TufteSection>
                  <MainColumn>
                    <P>For projects with a user interface, there&apos;s a dedicated polishing phase after core functionality works but before shipping.</P>

                    <SubSection title="The Polish Workflow">
                      <NumberedList items={[
                        <>Run the general review prompt.</>,
                        <>Review the suggestions and pick which to pursue. This is a human judgment step.</>,
                        <>Turn selected suggestions into beads and implement through normal swarm process.</>,
                        <>Run the platform-specific polish prompt.</>,
                        <>Repeat until improvements become marginal. Typically 2&ndash;3 rounds.</>,
                      ]} />
                      
                      <PromptBlock
                        title="General Polish Review"
                        prompt={`Great, now I want you to super carefully scrutinize every aspect of the application workflow and implementation and look for things that just seem sub-optimal or even wrong/mistaken to you...`}
                        where="After core implementation complete"
                      />
                      
                      <PromptBlock
                        title="Platform-Specific Polish"
                        prompt={`I still think there are strong opportunities to enhance the UI/UX look and feel and to make everything work better and be more intuitive, user-friendly, visually appealing, polished, slick, and world class in terms of following UI/UX best practices like those used by Stripe, don't you agree? And I want you to carefully consider desktop UI/UX and mobile UI/UX separately while doing this and hyper-optimize for both separately to play to the specifics of each modality. I'm looking for true world-class visual appeal, polish, slickness, etc. that makes people gasp at how stunning and perfect it is in every way.`}
                        where="After initial UI/UX polish pass"
                        whyItWorks="The 'don't you agree?' phrasing triggers the model to critically evaluate its own work rather than just validating it"
                      />
                    </SubSection>

                    <SubSection title="De-Slopification">
                      <P>After agents write documentation, run a de-slopify pass to remove LLM-isms like emdashoveruse and clickbait lead-ins.</P>
                      <DataTable
                        headers={["Pattern", "Problem"]}
                        rows={[
                          ["Emdash overuse", "LLMs use emdashes constantly"],
                          ["\"It's not X, it's Y\"", "Formulaic contrast structure"],
                          ["\"Here's why it matters:\"", "Clickbait-style lead-in"],
                          ["\"Let's dive in\"", "Forced enthusiasm"]
                        ]}
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="warning">
                      <strong>De-slopification must be manual.</strong><br/><br/>
                      This must be done manually, not via regex. Read each line and revise systematically.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 17 */}
              <GuideSection id="bug-hunting" number="17" title="Phase 12: Deep Bug Hunting">
                <TufteSection>
                  <MainColumn>
                    <P>
                      Phase 12 happens after all beads are done and casts a wider net across the entire codebase, looking for problems that only become visible when you see how all the pieces fit together.
                    </P>

                    <SubSection title="Random Exploration Review">
                      <PromptBlock
                        title="Random Exploration Review"
                        prompt={`I want you to sort of randomly explore the code files in this project, choosing code files to deeply investigate and understand and trace their functionality and execution flows through the related code files which they import or which they are imported by. Once you understand the purpose of the code in the larger context of the workflows, I want you to do a super careful, methodical, and critical check with 'fresh eyes' to find any obvious bugs, problems, errors, issues, silly mistakes, etc. and then systematically and meticulously and intelligently correct them. Be sure to comply with ALL rules in AGENTS.md.`}
                        where="Any agent terminal"
                        whyItWorks="The 'randomly explore' framing forces the agent to sample the codebase in a broader way."
                      />
                    </SubSection>

                    <SubSection title="Cross-Agent Deep Review">
                      <PromptBlock
                        title="Cross-Agent Deep Review"
                        prompt={`Ok can you now turn your attention to reviewing the code written by your fellow agents and checking for any issues, bugs, errors, problems, inefficiencies, security problems, reliability issues, etc. and carefully diagnose their underlying root causes using first-principle analysis and then fix or revise them if necessary? Don't restrict yourself to the latest commits, cast a wider net and go super deep!`}
                        where="Any agent terminal"
                        whyItWorks="Agents that didn't write the code approach it without the assumptions the author had."
                      />
                    </SubSection>

                    <SubSection title="How to Run Deep Bug Hunting">
                      <P highlight>
                        <Hl>Workflow:</Hl> Send the random exploration prompt to 2&ndash;3 agents simultaneously. After they report, send the cross-agent review. Alternate until agents consistently come back clean.
                      </P>
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="tip">
                      <strong>When to stop:</strong><br/><br/>
                      When two consecutive rounds (one random exploration, one cross-agent review) both come back clean. If bugs persist after 4+ rounds, go back to bead space.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 18 */}
              <GuideSection id="shipping" number="18" title="Phase 13: Committing and Shipping">
                <TufteSection>
                  <MainColumn>
                    <SubSection title="Organized Commits">
                      <P>Periodically have one agent handle git operations:</P>
                      <PromptBlock
                        title="Organized Commit Prompt"
                        prompt={`Now, based on your knowledge of the project, commit all changed files now in a series of logically connected groupings with super detailed commit messages for each and then push. Take your time to do it right. Don't edit the code at all. Don't commit obviously ephemeral files.`}
                        where="Dedicated git agent terminal"
                        whyItWorks="A single agent with full project context can create logically grouped commits with meaningful messages."
                      />
                    </SubSection>

                    <SubSection title="Landing the Plane">
                      <P highlight>When ending a work session, agents <Hl>MUST</Hl> complete ALL steps:</P>
                      <NumberedList items={[
                        <><Hl>File issues</Hl> &mdash; Create beads for anything that needs follow-up</>,
                        <><Hl>Run quality gates</Hl> &mdash; Tests, linters, builds</>,
                        <><Hl>Update issue status</Hl> &mdash; Close finished work</>,
                        <><Hl>PUSH TO REMOTE</Hl> &mdash; This is MANDATORY</>,
                      ]} />
                      <CodeBlock language="bash" code={`git pull --rebase
br sync --flush-only
git add .beads/
git add <other files>
git commit -m "..."
git push
git status`} />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      Work is NOT complete until <IC>git push</IC> succeeds. NEVER stop before pushing &mdash; that leaves work stranded locally.
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* SECTION 19 */}
              <GuideSection id="toolchain" number="19" title="The Complete Toolchain">
                <TufteSection>
                  <MainColumn>
                    <SubSection title="The Flywheel Stack (11 Tools)">
                      <DataTable
                        headers={["Tool", "Command", "Purpose", "Key Feature"]}
                        rows={[
                          ["NTM", "ntm", "Named Tmux Manager", "Agent cockpit: spawn/send/broadcast/palette"],
                          ["Agent Mail", "am", "Agent coordination", "Identities, inbox/outbox, file reservations"],
                          ["UBS", "ubs", "Ultimate Bug Scanner", "1000+ patterns, pre-commit guardrails"],
                          ["Beads", "br", "Issue tracking", "Dependency-aware, JSONL+SQLite hybrid"],
                          ["Beads Viewer", "bv", "Triage engine", "PageRank, betweenness, HITS, robot mode"],
                          ["RCH", "rch", "Build/test offloading", "Keeps heavy CPU off the local swarm box"],
                          ["CASS", "cass", "Session search", "Unified agent history indexing"],
                          ["CASS Memory", "cm", "Procedural memory", "Episodic \u2192 working \u2192 procedural"],
                          ["CAAM", "caam", "Auth switching", "Sub-100ms account swap"],
                          ["DCG", "dcg", "Safety guard", "Blocks destructive git/fs operations"],
                          ["SLB", "slb", "Two-person rule", "Optional guardrails for dangerous commands"],
                        ]}
                      />
                      <P>
                        Not every entry is used the same way. <IC>br</IC>, <IC>bv</IC>, <IC>ubs</IC>, and <IC>rch</IC> are ordinary shell commands. Agent Mail is primarily experienced through MCP tools/macros.
                      </P>
                    </SubSection>

                    <SubSection title="The Skills Ecosystem">
                      <P>
                        A <Hl>skill</Hl> is a reusable operational instruction pack for an agent. In Claude Code terms, that usually means a <IC>SKILL.md</IC> file plus optional references, scripts, or templates that tell the agent how to use a tool, what pitfalls to avoid, and what a good result looks like.
                      </P>
                      <P highlight>
                        A tool changes what the agent <Hl>can do</Hl>. A skill changes <Hl>how well</Hl> the agent knows how to do it. The same model with and without a good skill often behaves like two different agents.
                      </P>
                      <P>
                        Every Flywheel tool has a corresponding Claude Code skill. Many skills are bundled directly in the tool repos and get installed automatically with the tool.
                      </P>
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="info">
                      <strong>Skills Repositories:</strong><br/><br/>
                      Public: <a href="https://github.com/Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations/tree/main/skills" target="_blank" rel="noopener noreferrer" className="underline text-[#FF5500]">GitHub</a><br/>
                      Premium: <a href="https://jeffreys-skills.md" target="_blank" rel="noopener noreferrer" className="underline text-[#FF5500]">jeffreys-skills.md</a> (A $20/month service with a dedicated proprietary CLI called `jsm` for managing them).
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* ==================== SECTION 20: Key Principles and Insights ==================== */}
              <GuideSection id="principles" number="20" title="Key Principles and Insights">
                <TufteSection>
                  <MainColumn>
                    <SubSection title="Security in the Flywheel">
                      <PrincipleCard
                        number="7"
                        title="Security Is Free If the Plan Is Complete"
                      >
                        You don&apos;t usually need a separate &quot;security phase&quot; if your planning was thorough and your tools are configured correctly.
                      </PrincipleCard>
                      <P>
                        When models reason about an entire system&apos;s architecture at once, they spot authentication gaps, data exposure risks, and trust boundary violations without being told to look for them. These are architectural issues, and architecture review is what planning is.
                      </P>
                      <P>
                        Additionally, UBS catches security anti-patterns mechanically: unpinned dependencies, missing input validation, hardcoded secrets, unsafe unwraps.
                      </P>
                    </SubSection>

                    <SubSection title="Agent-First Tooling">
                      <PrincipleCard
                        number="9"
                        title="Tools Must Be Agent-First"
                      >
                        Every tool ships with a prepared AGENTS.md blurb. Tools should be designed by agents, for agents, with iterative feedback.
                      </PrincipleCard>

                      <P>The feedback prompt produces structured, actionable feedback from agents about the tools they use:</P>
                      <PromptBlock
                        title="Agent Tool Feedback"
                        prompt={`Based on your experience with [TOOL] today in this project, how would you rate [TOOL] across multiple dimensions, from 0 (worst) to 100 (best)? Was it helpful to you? What did it do well, and what was it bad at? Did you run into any errors or problems while using it?\n\nWhat changes to [TOOL] would make it work even better for you? Would you recommend it to fellow coding agents? How strongly, and why or why not?`}
                        where="Sent to agents after using a new or updated CLI tool."
                      />
                    </SubSection>

                    <SubSection title="Compounding and Portability">
                      <PrincipleCard
                        number="10"
                        title="The Flywheel Compounds"
                      >
                        Each session makes the next one better. Session N produces raw data. CASS logs every session. Between sessions, CM distills patterns. Session N+1 starts with those patterns loaded.
                      </PrincipleCard>
                    </SubSection>

                    <SubSection title="Execution and Self-Improvement">
                      <PrincipleCard
                        number="12"
                        title="The Project Is a Foregone Conclusion"
                      >
                        Once you have the beads in good shape based on a great markdown plan, implementation success is essentially guaranteed. The rest is basically mindless &quot;machine tending&quot; of your swarm of 5-15 agents.
                      </PrincipleCard>
                      <P>
                        This claim sounds bold, but it follows logically. If the plan is thorough, and the beads faithfully encode it, and the agents have a clear AGENTS.md, then implementation becomes a mechanical process.
                      </P>

                      <PrincipleCard
                        number="13"
                        title="Recursive Self-Improvement: The Meta-Skill Pattern"
                      >
                        Your agent toolchain should improve itself using its own output as fuel. Using skills to improve skills, skills to improve tool use.
                      </PrincipleCard>
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &quot;The knowledge is just sitting there and the models have it. But you need to know how to coax it out of them.&quot;
                    </BlockQuote>
                    <TipBox variant="warning">
                      If you find yourself doing heavy cognitive work during implementation, that&apos;s a signal that your planning or bead polishing was insufficient.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* ==================== SECTION 21: Operationalizing the Method ==================== */}
              <GuideSection id="operationalizing" number="21" title="Operators & Validation Gates">
                <TufteSection>
                  <MainColumn>
                    <P highlight>
                      This is the layer that turns CASS-mined rituals into skills, skills into <IC>AGENTS.md</IC> blurbs,
                      and those blurbs into more deterministic swarm behavior.
                    </P>

                    <SubSection title="The First-Pass Kernel">
                      <P>Nine axioms that anchor the entire method:</P>
                      <NumberedList items={[
                        <>Global reasoning belongs in plan space.</>,
                        <>The markdown plan must be comprehensive before coding starts.</>,
                        <>Plan-to-beads is a distinct translation problem.</>,
                        <>Beads are the execution substrate.</>,
                        <>Convergence matters more than first drafts.</>,
                        <>Swarm agents are fungible.</>,
                        <>Coordination must survive crashes and compaction.</>,
                        <>Session history is part of the system.</>,
                        <>Implementation is not the finish line.</>,
                      ]} />
                    </SubSection>

                    <SubSection title="Operator Library">
                      <P>
                        The recurring moves below show up throughout real Flywheel sessions. These operators matter more than
                        any single prompt because they say <Hl>when</Hl> to apply a move, what <Hl>failure</Hl> looks like,
                        and what output is expected.
                      </P>

                      <OperatorCard
                        number="1"
                        name="Plan-First Expansion"
                        definition="Recurring cognitive move in the Flywheel methodology"
                        trigger="Project fits in plan but would explode once implemented"
                        failureMode="Skeleton-first coding, local code exploration as substitute for product reasoning"
                      >
                        Expand the full system design at the plan level before writing any code. Reason about architecture,
                        data flow, and user workflows entirely in the markdown plan where the full picture fits in context.
                      </OperatorCard>

                      <OperatorCard
                        number="2"
                        name="Competing-Plan Triangulation"
                        definition="Recurring cognitive move in the Flywheel methodology"
                        trigger="Project important enough that one model's biases are dangerous"
                        failureMode="Picking first decent plan; combining every idea indiscriminately"
                      >
                        Ask 3+ competing LLMs to produce independent plans. Then synthesize the best elements into a superior
                        hybrid version through careful analysis.
                      </OperatorCard>
                      
                      {/* We can list out the rest similarly */}
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="info">
                      <strong>The Meta-Evolution</strong><br/><br/>
                      Repeated behavior becomes ritual, ritual becomes skill, skill becomes infrastructure, infrastructure changes what the next swarm can do.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* ==================== SECTION 22: Observed Patterns and Lessons ==================== */}
              <GuideSection id="patterns" number="22" title="Observed Patterns and Lessons">
                <TufteSection>
                  <MainColumn>
                    <SubSection title="Patterns That Work">
                      <P highlight>
                        The <Hl>&ldquo;30 to 5 to 15&rdquo; funnel:</Hl> brainstorm 30, winnow to 5 &mdash; much better
                        than asking for 5 directly. The winnowing forces critical evaluation.
                      </P>
                      <BulletList items={[
                        <><Hl>Parallel subagents for bulk bead operations:</Hl> Creating dozens of beads faster when dispatched to parallel subagents.</>,
                        <><Hl>Staggered agent starts:</Hl> 30&ndash;60 seconds apart avoids thundering herd.</>,
                        <><Hl>One agent for git operations:</Hl> prevents merge conflicts, coherent commits.</>,
                      ]} />
                    </SubSection>

                    <SubSection title="Anti-Patterns to Avoid">
                      <BulletList items={[
                        <><Hl>Single-pass beads:</Hl> First-draft beads are never optimal. 4&ndash;5 polishing passes minimum.</>,
                        <><Hl>Communication purgatory:</Hl> agents spending more time messaging than coding. Be proactive about starting work.</>,
                        <><Hl>Holding reservations too long:</Hl> long TTLs block other agents. Reserve, edit, commit, release.</>,
                      ]} />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;This is how the prompt library was originally discovered — mined bottom-up from hundreds of real sessions, not invented top-down.&quot;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* ==================== SECTION 23: Practical Considerations ==================== */}
              <GuideSection id="practical" number="23" title="Practical Considerations">
                <TufteSection>
                  <MainColumn>
                    <SubSection title="The Incremental Onboarding Path">
                      <P>
                        This is the learning order, not the ideal order inside a serious project. There is also no single
                        correct session-management layer &mdash; NTM, tmux directly, WezTerm, or another setup.
                      </P>
                      <NumberedList items={[
                        <>Start with: <ToolPill>Agent Mail</ToolPill> + <ToolPill>Beads (br)</ToolPill> + <ToolPill>Beads Viewer (bv)</ToolPill></>,
                        <>Add: <ToolPill>UBS</ToolPill> for bug hunting</>,
                        <>Add: <ToolPill>DCG</ToolPill> for destructive command protection</>,
                        <>Add: <ToolPill>CASS</ToolPill> for session history</>,
                        <>Add: <ToolPill>CM</ToolPill> for codifying lessons</>,
                      ]} />
                    </SubSection>

                    <SubSection title="Getting Started">
                      <P>
                        The complete system is free and 100% <Jargon term="open-source">open-source</Jargon>: <a href="https://agent-flywheel.com/" target="_blank" rel="noopener noreferrer" className="font-semibold bg-gradient-to-r from-[#FF5500] to-violet-400 bg-clip-text text-transparent underline decoration-[#FF5500]/40 underline-offset-2 hover:decoration-[#FF5500]/70 transition-colors">agent-flywheel.com</a>
                      </P>
                      <CodeBlock language="bash" code={`# 1. Rent a VPS (~$40-56/month, Ubuntu)
# 2. SSH in
ssh ubuntu@your-server-ip

# 3. Run the one-liner
curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/main/install.sh | bash -s -- --yes --mode vibe`} />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <BlockQuote>
                      &ldquo;You don&rsquo;t even need to know much at all about computers; you just need the desire to
                      learn and some grit and determination.&rdquo;
                    </BlockQuote>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* ==================== SECTION 24: The Complete Prompt Library ==================== */}
              <GuideSection id="prompt-library" number="24" title="The Complete Prompt Library">
                <TufteSection>
                  <MainColumn>
                    <P highlight>
                      Treat the prompt blocks below as canonical wording. Some contain quirks or typos preserved verbatim
                      from prompts that worked well in real sessions.
                    </P>

                    <SubSection title="Planning Prompts">
                      <PromptBlock
                        title="Plan Creation: Multi-Model Synthesis"
                        prompt={`I asked 3 competing LLMs to do the exact same thing and they came up with pretty different plans which you can read below. I want you to REALLY carefully analyze their plans with an open mind and be intellectually honest about what they did that's better than your plan. Then I want you to come up with the best possible revisions to your plan...`}
                        where="GPT Pro web app with Extended Reasoning"
                      />
                      <PromptBlock
                        title="Plan Refinement: The 'Lie to Them' Exhaustive Check"
                        prompt={`Do this again, and actually be super super careful: can you please check over the plan again and compare it to all that feedback I gave you? I am positive that you missed or screwed up at least 80 elements of that complex feedback.`}
                        where="During plan revision, when initial comparison finds only ~20 issues"
                        whyItWorks="Deliberately overshoots expectations. The claim of '80 elements' forces the model past conservative output ceilings."
                      />
                    </SubSection>

                    <SubSection title="Bead Prompts">
                      <PromptBlock
                        title="Plan to Beads: Conversion"
                        prompt={`OK so please take ALL of that and elaborate on it and use it to create a comprehensive and granular set of beads for all this with tasks, subtasks, and dependency structure overlaid, with detailed comments so that the whole thing is totally self-contained and self-documenting...`}
                        where="Claude Code (Opus)"
                        whyItWorks="This forces the model to think through the entire system and break it down into executable work units."
                      />
                    </SubSection>
                  </MainColumn>
                  <MarginColumn>
                    <TipBox variant="info">
                      <strong>Prompt Library Access</strong><br/><br/>
                      For a larger public prompt collection, see <a href="https://jeffreysprompts.com" target="_blank" rel="noopener noreferrer" className="underline text-[#FF5500]">jeffreysprompts.com</a>.
                    </TipBox>
                  </MarginColumn>
                </TufteSection>
              </GuideSection>

              <Divider />

              {/* Footer CTA */}
              <FooterCTA />
            </div>
          </div>
        </div>
        <FloatingHUD items={TOC_ITEMS} />
      </main>
    </ErrorBoundary>
  );
}

// =============================================================================
// FOOTER CTA
// =============================================================================
const INSTALL_COMMAND = `curl -fsSL https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/main/install.sh | bash -s -- --yes --mode vibe`;

function FooterCTA() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    const ok = await copyTextToClipboard(INSTALL_COMMAND);
    if (!ok) return;
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCopied(false);
      timerRef.current = null;
    }, 2000);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[4rem] border border-white/[0.03] bg-[#020408] py-24 md:py-32 my-32 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]">
      {/* High-end ambient effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,85,0,0.05),transparent_70%)]" />

      <div className="relative mx-auto text-center px-6 z-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.05] bg-white/[0.02] px-6 py-2 text-[0.7rem] font-black uppercase tracking-[0.3em] text-[#FF5500] mb-12 shadow-inner">
          <Rocket className="h-4 w-4" />
          Ready to Start?
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-[-0.05em] drop-shadow-2xl">
          Get the Flywheel{" "}
          <span className="bg-gradient-to-br from-white to-[#FF5500] bg-clip-text text-transparent">Stack</span>
        </h2>
        
        <p className="mx-auto mt-12 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed font-extralight opacity-80">
          One command installs all 11 tools, three AI coding agents, and the
          complete agentic coding environment. <Hl>30 minutes to fully configured</Hl>.
        </p>
        
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="group relative w-full max-w-4xl">
            <div className="absolute -inset-4 bg-[#FF5500]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative overflow-x-auto rounded-3xl bg-[#03050a] border border-white/[0.05] transition-all duration-700 group-hover:border-[#FF5500]/30 shadow-2xl">
              <div className="flex items-center justify-between gap-8 px-8 py-6 sm:px-10 sm:py-8">
                <code className="flex-1 whitespace-nowrap font-mono text-sm sm:text-lg text-[#FF5500]/80 tracking-tight text-left">
                  {INSTALL_COMMAND}
                </code>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/5 px-6 py-3 text-xs font-black uppercase tracking-widest text-white/40 transition-all duration-500 hover:bg-[#FF5500] hover:text-black hover:border-[#FF5500] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-[0.7rem] font-black text-white/20 uppercase tracking-[0.4em]">
            Or use the{" "}
            <a
              href="/wizard/os-selection"
              className="text-[#FF5500] hover:text-white transition-colors underline decoration-[#FF5500]/30 underline-offset-8"
            >
              Step-by-step wizard
            </a>{" "}
            for guided setup.
          </p>
        </div>
      </div>
    </section>
  );
}
