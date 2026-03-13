import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "The Complete Flywheel Guide - Planning, Beads & Agent Swarms | Agent Flywheel",
  description:
    "A comprehensive guide to Jeffrey Emanuel's methodology for creating software with frontier AI models, exhaustive markdown planning, beads-based task management, and coordinated agent swarms.",
  alternates: {
    canonical: "/complete-guide",
  },
};

export default function CompleteGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
