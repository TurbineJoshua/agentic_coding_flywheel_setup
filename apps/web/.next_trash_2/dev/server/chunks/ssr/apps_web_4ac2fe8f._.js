module.exports = [
"[project]/apps/web/lib/social-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSocialImage",
    ()=>createSocialImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/og.js [app-rsc] (ecmascript)");
;
;
const PALETTES = {
    default: {
        bgStart: "#070b14",
        bgMid: "#0d1628",
        bgEnd: "#0a0f1b",
        grid: "#22d3ee",
        orbA: "rgba(34,211,238,0.16)",
        orbB: "rgba(168,85,247,0.14)",
        accent: "#22d3ee",
        accentSoft: "#60a5fa",
        titleStart: "#f8fafc",
        titleEnd: "#a5f3fc",
        body: "#94a3b8",
        badgeBg: "rgba(34,211,238,0.12)",
        badgeBorder: "rgba(34,211,238,0.28)",
        badgeText: "#67e8f9",
        tagBg: "rgba(15,23,42,0.62)",
        tagBorder: "rgba(56,189,248,0.34)",
        tagText: "#bae6fd"
    },
    flywheel: {
        bgStart: "#080714",
        bgMid: "#13132a",
        bgEnd: "#0b1022",
        grid: "#a855f7",
        orbA: "rgba(168,85,247,0.18)",
        orbB: "rgba(244,114,182,0.14)",
        accent: "#a855f7",
        accentSoft: "#22d3ee",
        titleStart: "#ffffff",
        titleEnd: "#ddd6fe",
        body: "#a1a1aa",
        badgeBg: "rgba(168,85,247,0.13)",
        badgeBorder: "rgba(168,85,247,0.32)",
        badgeText: "#c4b5fd",
        tagBg: "rgba(24,24,37,0.68)",
        tagBorder: "rgba(196,181,253,0.36)",
        tagText: "#ddd6fe"
    },
    learn: {
        bgStart: "#061114",
        bgMid: "#0b1d27",
        bgEnd: "#08141d",
        grid: "#14b8a6",
        orbA: "rgba(20,184,166,0.17)",
        orbB: "rgba(59,130,246,0.12)",
        accent: "#14b8a6",
        accentSoft: "#22d3ee",
        titleStart: "#f0fdfa",
        titleEnd: "#99f6e4",
        body: "#9ca3af",
        badgeBg: "rgba(20,184,166,0.13)",
        badgeBorder: "rgba(20,184,166,0.31)",
        badgeText: "#5eead4",
        tagBg: "rgba(13,23,31,0.67)",
        tagBorder: "rgba(45,212,191,0.34)",
        tagText: "#99f6e4"
    },
    wizard: {
        bgStart: "#0f0b07",
        bgMid: "#1f170d",
        bgEnd: "#120d08",
        grid: "#f59e0b",
        orbA: "rgba(245,158,11,0.17)",
        orbB: "rgba(249,115,22,0.13)",
        accent: "#f59e0b",
        accentSoft: "#fb7185",
        titleStart: "#fff7ed",
        titleEnd: "#fdba74",
        body: "#a8b0be",
        badgeBg: "rgba(245,158,11,0.13)",
        badgeBorder: "rgba(245,158,11,0.32)",
        badgeText: "#fdba74",
        tagBg: "rgba(28,25,23,0.66)",
        tagBorder: "rgba(251,146,60,0.34)",
        tagText: "#fed7aa"
    },
    tools: {
        bgStart: "#061014",
        bgMid: "#0c1f29",
        bgEnd: "#07141d",
        grid: "#38bdf8",
        orbA: "rgba(56,189,248,0.18)",
        orbB: "rgba(34,197,94,0.11)",
        accent: "#38bdf8",
        accentSoft: "#22c55e",
        titleStart: "#f8fafc",
        titleEnd: "#bae6fd",
        body: "#97a6b8",
        badgeBg: "rgba(56,189,248,0.13)",
        badgeBorder: "rgba(56,189,248,0.32)",
        badgeText: "#7dd3fc",
        tagBg: "rgba(12,23,35,0.66)",
        tagBorder: "rgba(125,211,252,0.33)",
        tagText: "#bae6fd"
    },
    workflow: {
        bgStart: "#08100f",
        bgMid: "#0f211f",
        bgEnd: "#091716",
        grid: "#22c55e",
        orbA: "rgba(34,197,94,0.17)",
        orbB: "rgba(20,184,166,0.12)",
        accent: "#22c55e",
        accentSoft: "#14b8a6",
        titleStart: "#f0fdf4",
        titleEnd: "#86efac",
        body: "#9da8b8",
        badgeBg: "rgba(34,197,94,0.13)",
        badgeBorder: "rgba(34,197,94,0.32)",
        badgeText: "#86efac",
        tagBg: "rgba(10,24,20,0.67)",
        tagBorder: "rgba(74,222,128,0.34)",
        tagText: "#bbf7d0"
    },
    security: {
        bgStart: "#12080c",
        bgMid: "#24111a",
        bgEnd: "#150a10",
        grid: "#f43f5e",
        orbA: "rgba(244,63,94,0.17)",
        orbB: "rgba(236,72,153,0.12)",
        accent: "#f43f5e",
        accentSoft: "#fb7185",
        titleStart: "#fff1f2",
        titleEnd: "#fda4af",
        body: "#abb3c1",
        badgeBg: "rgba(244,63,94,0.13)",
        badgeBorder: "rgba(244,63,94,0.34)",
        badgeText: "#fda4af",
        tagBg: "rgba(38,10,18,0.66)",
        tagBorder: "rgba(251,113,133,0.34)",
        tagText: "#fecdd3"
    },
    support: {
        bgStart: "#0b0a15",
        bgMid: "#151330",
        bgEnd: "#0c1020",
        grid: "#6366f1",
        orbA: "rgba(99,102,241,0.17)",
        orbB: "rgba(168,85,247,0.12)",
        accent: "#6366f1",
        accentSoft: "#a855f7",
        titleStart: "#eef2ff",
        titleEnd: "#c7d2fe",
        body: "#a3adc2",
        badgeBg: "rgba(99,102,241,0.13)",
        badgeBorder: "rgba(99,102,241,0.32)",
        badgeText: "#a5b4fc",
        tagBg: "rgba(19,19,46,0.67)",
        tagBorder: "rgba(129,140,248,0.35)",
        tagText: "#c7d2fe"
    }
};
function trimText(text, maxLength) {
    const normalized = text.trim();
    if (normalized.length <= maxLength) {
        return normalized;
    }
    return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}
function titleFontSize(title, variant) {
    const length = title.length;
    if (variant === "twitter") {
        if (length > 58) return 54;
        if (length > 46) return 60;
        if (length > 34) return 66;
        return 74;
    }
    if (length > 58) return 60;
    if (length > 46) return 66;
    if (length > 34) return 72;
    return 80;
}
function createSocialImage(data, variant) {
    const width = 1200;
    const height = variant === "twitter" ? 600 : 630;
    const palette = PALETTES[data.theme ?? "default"];
    const safeDescription = trimText(data.description, variant === "twitter" ? 128 : 150);
    const safeTags = (data.tags ?? []).slice(0, 3);
    const safePath = trimText(data.path, 66);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100%",
            width: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            alignItems: "stretch",
            justifyContent: "flex-start",
            background: `linear-gradient(140deg, ${palette.bgStart} 0%, ${palette.bgMid} 56%, ${palette.bgEnd} 100%)`,
            fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,
                    backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${encodeURIComponent(palette.grid)}' stroke-width='0.55'%3E%3Cpath d='M0 22h44M22 0v44'/%3E%3C/g%3E%3C/svg%3E\")`
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/social-image.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    position: "absolute",
                    top: -140,
                    left: -120,
                    width: 430,
                    height: 430,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${palette.orbA} 0%, transparent 66%)`
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/social-image.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    position: "absolute",
                    right: -140,
                    bottom: -170,
                    width: 520,
                    height: 520,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${palette.orbB} 0%, transparent 70%)`
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/social-image.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    position: "absolute",
                    right: 36,
                    top: 32,
                    color: "#64748b",
                    fontSize: 22,
                    letterSpacing: "0.02em",
                    opacity: 0.9
                },
                children: `agent-flywheel.com${safePath}`
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/social-image.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: variant === "twitter" ? 44 : 52,
                    padding: variant === "twitter" ? "56px 58px 60px 58px" : "58px 64px 62px 64px",
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            width: variant === "twitter" ? 268 : 286,
                            height: variant === "twitter" ? 268 : 286,
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    background: `radial-gradient(circle, ${palette.orbA} 0%, transparent 72%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    width: variant === "twitter" ? 190 : 204,
                                    height: variant === "twitter" ? 190 : 204,
                                    borderRadius: "50%",
                                    border: `3px solid ${palette.accent}`,
                                    boxShadow: `0 0 0 1px ${palette.accentSoft}`,
                                    opacity: 0.86
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    width: variant === "twitter" ? 138 : 150,
                                    height: variant === "twitter" ? 138 : 150,
                                    borderRadius: "50%",
                                    border: `1.5px solid ${palette.accentSoft}`,
                                    opacity: 0.48
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    width: variant === "twitter" ? 10 : 12,
                                    height: variant === "twitter" ? 10 : 12,
                                    borderRadius: "50%",
                                    background: palette.accent,
                                    boxShadow: `0 0 18px ${palette.accent}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    width: 2,
                                    height: variant === "twitter" ? 154 : 168,
                                    background: palette.accentSoft,
                                    opacity: 0.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    width: variant === "twitter" ? 154 : 168,
                                    height: 2,
                                    background: palette.accentSoft,
                                    opacity: 0.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/lib/social-image.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            flex: 1,
                            minWidth: 0,
                            maxWidth: 760
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: 999,
                                    padding: "8px 18px",
                                    background: palette.badgeBg,
                                    border: `1px solid ${palette.badgeBorder}`,
                                    marginBottom: 18
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "flex",
                                        color: palette.badgeText,
                                        fontSize: 22,
                                        letterSpacing: "0.1em",
                                        fontWeight: 600,
                                        textTransform: "uppercase"
                                    },
                                    children: data.badge
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/lib/social-image.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    display: "flex",
                                    margin: 0,
                                    marginBottom: 16,
                                    fontSize: titleFontSize(data.title, variant),
                                    lineHeight: 1.14,
                                    letterSpacing: "-0.03em",
                                    fontWeight: 700,
                                    color: "transparent",
                                    background: `linear-gradient(118deg, ${palette.titleStart} 0%, ${palette.titleEnd} 100%)`,
                                    backgroundClip: "text",
                                    maxWidth: "100%"
                                },
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    display: "flex",
                                    margin: 0,
                                    marginBottom: safeTags.length > 0 ? 26 : 0,
                                    fontSize: variant === "twitter" ? 38 : 40,
                                    lineHeight: 1.45,
                                    color: palette.body,
                                    maxWidth: "100%"
                                },
                                children: safeDescription
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            safeTags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14
                                },
                                children: safeTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: 14,
                                            padding: "8px 14px",
                                            background: palette.tagBg,
                                            border: `1px solid ${palette.tagBorder}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "flex",
                                                color: palette.tagText,
                                                fontSize: 24,
                                                fontWeight: 500,
                                                lineHeight: 1.2
                                            },
                                            children: tag
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/lib/social-image.tsx",
                                            lineNumber: 485,
                                            columnNumber: 21
                                        }, this)
                                    }, tag, false, {
                                        fileName: "[project]/apps/web/lib/social-image.tsx",
                                        lineNumber: 474,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/social-image.tsx",
                                lineNumber: 466,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/lib/social-image.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/lib/social-image.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 4,
                    background: `linear-gradient(90deg, transparent 0%, ${palette.accent} 25%, ${palette.accentSoft} 50%, ${palette.accent} 75%, transparent 100%)`
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/social-image.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/lib/social-image.tsx",
        lineNumber: 236,
        columnNumber: 7
    }, this), {
        width,
        height
    });
}
}),
"[project]/apps/web/lib/social-image-routes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStaticRouteSocialData",
    ()=>getStaticRouteSocialData
]);
const STATIC_ROUTE_SOCIAL_DATA = {
    "/": {
        badge: "Agentic Coding",
        title: "Agent Flywheel",
        description: "Turn a fresh VPS into a complete multi-agent coding environment with Claude, Codex, Gemini, and modern developer tooling.",
        path: "/",
        theme: "default",
        tags: [
            "Claude",
            "Codex",
            "Gemini"
        ]
    },
    "/flywheel": {
        badge: "20+ Interconnected Tools",
        title: "The Agentic Coding Flywheel",
        description: "A self-reinforcing stack where agents coordinate, review, and ship in parallel while safety and quality stay enforced.",
        path: "/flywheel",
        theme: "flywheel",
        tags: [
            "Parallel Agents",
            "Autonomous Progress",
            "Safety"
        ]
    },
    "/learn": {
        badge: "Interactive Lessons",
        title: "ACFS Learning Hub",
        description: "Master Linux, SSH, tmux, git, and multi-agent workflows with structured lessons designed for real-world execution.",
        path: "/learn",
        theme: "learn",
        tags: [
            "Beginner Friendly",
            "Hands-On",
            "Step-by-Step"
        ]
    },
    "/learn/commands": {
        badge: "Terminal Playbook",
        title: "Command Reference",
        description: "Quick command patterns for core setup, verification, troubleshooting, and daily operation inside the flywheel workflow.",
        path: "/learn/commands",
        theme: "learn",
        tags: [
            "CLI",
            "Reference",
            "Copy-Paste Ready"
        ]
    },
    "/learn/glossary": {
        badge: "Concepts Made Clear",
        title: "Learning Glossary",
        description: "Plain-language definitions for infrastructure, tooling, and agentic coding concepts used throughout the learning track.",
        path: "/learn/glossary",
        theme: "learn",
        tags: [
            "Definitions",
            "Beginner Friendly",
            "ACFS Terms"
        ]
    },
    "/glossary": {
        badge: "Jargon Decoder",
        title: "Agent Flywheel Glossary",
        description: "Translate technical terms into practical intuition so you can move faster across setup, debugging, and collaboration.",
        path: "/glossary",
        theme: "tools",
        tags: [
            "Linux",
            "VPS",
            "Agent Tools"
        ]
    },
    "/tools": {
        badge: "Tool Catalog",
        title: "Agent Tool Stack",
        description: "Explore the integrated toolchain powering orchestration, safety, debugging, memory, and multi-repo execution.",
        path: "/tools",
        theme: "tools",
        tags: [
            "Orchestration",
            "Safety",
            "Productivity"
        ]
    },
    "/workflow": {
        badge: "Execution Blueprint",
        title: "The Complete Workflow",
        description: "A practical end-to-end operating model for planning, task graphs, swarm implementation, review, and deployment.",
        path: "/workflow",
        theme: "workflow",
        tags: [
            "Planning",
            "Swarms",
            "Ship Faster"
        ]
    },
    "/tldr": {
        badge: "High-Level Overview",
        title: "The Flywheel TL;DR",
        description: "A compact overview of the full stack and why connected tools outperform isolated, one-off automation.",
        path: "/tldr",
        theme: "flywheel",
        tags: [
            "Overview",
            "Tool Synergy",
            "Architecture"
        ]
    },
    "/troubleshooting": {
        badge: "Fix Common Failures",
        title: "Troubleshooting Guide",
        description: "Diagnose SSH, installer, auth, and environment issues quickly with actionable fixes and known-good command patterns.",
        path: "/troubleshooting",
        theme: "support",
        tags: [
            "SSH",
            "Installer",
            "Recovery"
        ]
    },
    "/docs/security": {
        badge: "Defense in Depth",
        title: "Security Documentation",
        description: "Security architecture, threat model, and practical controls for safer autonomous coding with multiple AI agents.",
        path: "/docs/security",
        theme: "security",
        tags: [
            "Threat Model",
            "Guardrails",
            "Best Practices"
        ]
    },
    "/wizard/os-selection": {
        badge: "Setup Wizard • Step 1",
        title: "Choose Your Operating System",
        description: "Start the guided installation path for macOS, Windows, or Linux before provisioning your remote coding server.",
        path: "/wizard/os-selection",
        theme: "wizard",
        tags: [
            "Step 1",
            "OS Detection",
            "Quick Start"
        ]
    },
    "/wizard/install-terminal": {
        badge: "Setup Wizard • Step 2",
        title: "Install a Terminal",
        description: "Prepare a reliable terminal environment so every subsequent setup and verification command works consistently.",
        path: "/wizard/install-terminal",
        theme: "wizard",
        tags: [
            "Step 2",
            "Terminal",
            "Foundation"
        ]
    },
    "/wizard/generate-ssh-key": {
        badge: "Setup Wizard • Step 3",
        title: "Generate Your SSH Key",
        description: "Create and validate key-based authentication to secure remote access and avoid fragile password-only workflows.",
        path: "/wizard/generate-ssh-key",
        theme: "wizard",
        tags: [
            "Step 3",
            "SSH",
            "Security"
        ]
    },
    "/wizard/rent-vps": {
        badge: "Setup Wizard • Step 4",
        title: "Rent a VPS",
        description: "Choose a provider and plan that can handle parallel agent sessions, builds, and background automation reliably.",
        path: "/wizard/rent-vps",
        theme: "wizard",
        tags: [
            "Step 4",
            "VPS",
            "Sizing"
        ]
    },
    "/wizard/create-vps": {
        badge: "Setup Wizard • Step 5",
        title: "Create the VPS Instance",
        description: "Launch your server correctly with the expected operating system and credentials before initial SSH access.",
        path: "/wizard/create-vps",
        theme: "wizard",
        tags: [
            "Step 5",
            "Provisioning",
            "Launch"
        ]
    },
    "/wizard/ssh-connect": {
        badge: "Setup Wizard • Step 6",
        title: "Connect via SSH",
        description: "Establish your first remote session and confirm network, host key, and authentication details are correct.",
        path: "/wizard/ssh-connect",
        theme: "wizard",
        tags: [
            "Step 6",
            "SSH",
            "Connectivity"
        ]
    },
    "/wizard/accounts": {
        badge: "Setup Wizard • Step 7",
        title: "Set Up Required Accounts",
        description: "Create the core service accounts needed for multi-agent coding, source control, deployment, and platform access.",
        path: "/wizard/accounts",
        theme: "wizard",
        tags: [
            "Step 7",
            "Accounts",
            "Integrations"
        ]
    },
    "/wizard/preflight-check": {
        badge: "Setup Wizard • Step 8",
        title: "Run a Pre-Flight Check",
        description: "Validate prerequisites before installation so you avoid avoidable failures, lock conflicts, and configuration drift.",
        path: "/wizard/preflight-check",
        theme: "wizard",
        tags: [
            "Step 8",
            "Validation",
            "Readiness"
        ]
    },
    "/wizard/run-installer": {
        badge: "Setup Wizard • Step 9",
        title: "Run the Installer",
        description: "Execute the one-liner installer and bootstrap your full agentic coding environment with checkpointed setup phases.",
        path: "/wizard/run-installer",
        theme: "wizard",
        tags: [
            "Step 9",
            "One-Liner",
            "Bootstrap"
        ]
    },
    "/wizard/reconnect-ubuntu": {
        badge: "Setup Wizard • Step 10",
        title: "Reconnect as Ubuntu User",
        description: "Transition from root to your Ubuntu workflow account and align with the expected day-to-day operating context.",
        path: "/wizard/reconnect-ubuntu",
        theme: "wizard",
        tags: [
            "Step 10",
            "User Context",
            "Hardening"
        ]
    },
    "/wizard/verify-key-connection": {
        badge: "Setup Wizard • Step 11",
        title: "Verify Key-Based Login",
        description: "Confirm passwordless SSH works end-to-end so future sessions remain fast, secure, and predictable.",
        path: "/wizard/verify-key-connection",
        theme: "wizard",
        tags: [
            "Step 11",
            "SSH Keys",
            "Verification"
        ]
    },
    "/wizard/status-check": {
        badge: "Setup Wizard • Step 12",
        title: "Run a Status Check",
        description: "Audit installed components and ensure the toolchain is healthy before launching full autonomous workflows.",
        path: "/wizard/status-check",
        theme: "wizard",
        tags: [
            "Step 12",
            "Health Check",
            "Audit"
        ]
    },
    "/wizard/launch-onboarding": {
        badge: "Setup Wizard • Step 13",
        title: "Launch Onboarding",
        description: "Start the interactive onboarding track to learn operations, collaboration patterns, and high-leverage workflows.",
        path: "/wizard/launch-onboarding",
        theme: "wizard",
        tags: [
            "Step 13",
            "Onboarding",
            "Learn Fast"
        ]
    },
    "/wizard/windows-terminal-setup": {
        badge: "Wizard Companion Step",
        title: "Windows Terminal Setup",
        description: "Configure a stable Windows Terminal profile for smooth command execution, copy/paste reliability, and SSH sessions.",
        path: "/wizard/windows-terminal-setup",
        theme: "wizard",
        tags: [
            "Windows",
            "Terminal",
            "Configuration"
        ]
    }
};
function getStaticRouteSocialData(routePath) {
    const data = STATIC_ROUTE_SOCIAL_DATA[routePath];
    if (!data) {
        throw new Error(`[social-image] Missing static route data for: ${routePath}`);
    }
    return data;
}
}),
"[project]/apps/web/app/twitter-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "runtime",
    ()=>runtime,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$social$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/social-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$social$2d$image$2d$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/social-image-routes.ts [app-rsc] (ecmascript)");
;
;
const runtime = "edge";
const alt = "Agent Flywheel";
const size = {
    width: 1200,
    height: 600
};
const contentType = "image/png";
function Image() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$social$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSocialImage"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$social$2d$image$2d$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaticRouteSocialData"])("/"), "twitter");
}
}),
"[project]/apps/web/app/twitter-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/twitter-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    runtime: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "twitter-image");
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?141d9d9dbfecee3c"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
];

//# sourceMappingURL=apps_web_4ac2fe8f._.js.map