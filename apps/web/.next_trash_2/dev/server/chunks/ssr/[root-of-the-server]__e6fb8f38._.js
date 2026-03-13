module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "copyTextToClipboard",
    ()=>copyTextToClipboard,
    "isInteractiveKeyboardTarget",
    ()=>isInteractiveKeyboardTarget,
    "safeGetItem",
    ()=>safeGetItem,
    "safeGetJSON",
    ()=>safeGetJSON,
    "safeRemoveItem",
    ()=>safeRemoveItem,
    "safeSetItem",
    ()=>safeSetItem,
    "safeSetJSON",
    ()=>safeSetJSON,
    "withCurrentSearch",
    ()=>withCurrentSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function safeGetItem(key) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function safeSetItem(key, value) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function withCurrentSearch(path) {
    if ("TURBOPACK compile-time truthy", 1) return path;
    //TURBOPACK unreachable
    ;
    const search = undefined;
}
function safeRemoveItem(key) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function safeGetJSON(key) {
    const value = safeGetItem(key);
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch  {
        // Invalid JSON
        return null;
    }
}
function safeSetJSON(key, value) {
    try {
        return safeSetItem(key, JSON.stringify(value));
    } catch  {
        // JSON.stringify failed (circular reference, etc.)
        return false;
    }
}
async function copyTextToClipboard(text) {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch  {
        // Fall through to the DOM-based fallback below.
        }
    }
    if (typeof document === "undefined") {
        return false;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    try {
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        return document.execCommand("copy");
    } catch  {
        return false;
    } finally{
        document.body.removeChild(textarea);
    }
}
function isInteractiveKeyboardTarget(target) {
    if (!(target instanceof Element)) {
        return false;
    }
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target instanceof HTMLButtonElement || target instanceof HTMLAnchorElement) {
        return true;
    }
    if (target instanceof HTMLElement && target.isContentEditable) {
        return true;
    }
    return target.closest('button, a, input, textarea, select, summary, [role="button"], [role="link"], [role="menuitem"], [contenteditable="true"]') !== null;
}
}),
"[project]/apps/web/lib/userPreferences.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectOS",
    ()=>detectOS,
    "getACFSRef",
    ()=>getACFSRef,
    "getInstallMode",
    ()=>getInstallMode,
    "getSSHUsername",
    ()=>getSSHUsername,
    "getUserOS",
    ()=>getUserOS,
    "getVPSIP",
    ()=>getVPSIP,
    "isValidIP",
    ()=>isValidIP,
    "normalizeGitRef",
    ()=>normalizeGitRef,
    "setACFSRef",
    ()=>setACFSRef,
    "setInstallMode",
    ()=>setInstallMode,
    "setSSHUsername",
    ()=>setSSHUsername,
    "setUserOS",
    ()=>setUserOS,
    "setVPSIP",
    ()=>setVPSIP,
    "useACFSRef",
    ()=>useACFSRef,
    "useDetectedOS",
    ()=>useDetectedOS,
    "useInstallMode",
    ()=>useInstallMode,
    "useMounted",
    ()=>useMounted,
    "useSSHUsername",
    ()=>useSSHUsername,
    "useUserOS",
    ()=>useUserOS,
    "useVPSIP",
    ()=>useVPSIP,
    "userPreferencesKeys",
    ()=>userPreferencesKeys
]);
/**
 * User Preferences Storage
 *
 * Handles localStorage persistence of user choices during the wizard.
 * Uses TanStack Query for React state management with localStorage persistence.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const OS_KEY = "agent-flywheel-user-os";
const VPS_IP_KEY = "agent-flywheel-vps-ip";
const INSTALL_MODE_KEY = "agent-flywheel-install-mode";
const SSH_USERNAME_KEY = "agent-flywheel-ssh-username";
const ACFS_REF_KEY = "agent-flywheel-acfs-ref";
const OS_QUERY_KEY = "os";
const VPS_IP_QUERY_KEY = "ip";
const INSTALL_MODE_QUERY_KEY = "mode";
const SSH_USERNAME_QUERY_KEY = "user";
const ACFS_REF_QUERY_KEY = "ref";
const MAX_GIT_REF_LENGTH = 120;
const GIT_REF_SAFE_PATTERN = /^[A-Za-z0-9._/-]+$/;
const USER_PREFERENCES_EVENT = "acfs:user-preferences-updated";
function getQueryParam(key) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setQueryParam(key, value) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function emitUserPreferencesUpdate() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function subscribeToUserPreferencesUpdates(onChange) {
    if ("TURBOPACK compile-time truthy", 1) {
        return ()=>undefined;
    }
    //TURBOPACK unreachable
    ;
}
function normalizeGitRef(ref) {
    const value = ref?.trim() ?? "";
    if (!value) return null;
    if (value.length > MAX_GIT_REF_LENGTH) return null;
    if (!GIT_REF_SAFE_PATTERN.test(value)) return null;
    if (value === "@" || value === "." || value === "..") return null;
    if (value.startsWith("-")) return null;
    if (value.startsWith(".")) return null;
    if (value.endsWith(".")) return null;
    if (value.startsWith("/") || value.endsWith("/")) return null;
    if (value.includes("//")) return null;
    if (value.includes("/.")) return null;
    if (value.includes("..")) return null;
    if (value.includes("@{")) return null;
    if (value === ".lock" || value.endsWith(".lock")) return null;
    return value;
}
const userPreferencesKeys = {
    userOS: [
        "userPreferences",
        "os"
    ],
    vpsIP: [
        "userPreferences",
        "vpsIP"
    ],
    detectedOS: [
        "userPreferences",
        "detectedOS"
    ],
    installMode: [
        "userPreferences",
        "installMode"
    ],
    sshUsername: [
        "userPreferences",
        "sshUsername"
    ],
    acfsRef: [
        "userPreferences",
        "acfsRef"
    ]
};
function getUserOS() {
    const fromQuery = getQueryParam(OS_QUERY_KEY);
    if (fromQuery === "mac" || fromQuery === "windows" || fromQuery === "linux") {
        return fromQuery;
    }
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])(OS_KEY);
    if (stored === "mac" || stored === "windows" || stored === "linux") {
        return stored;
    }
    return null;
}
function setUserOS(os) {
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])(OS_KEY, os);
    const urlOk = setQueryParam(OS_QUERY_KEY, os);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function detectOS() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const ua = undefined;
}
function getVPSIP() {
    const fromQuery = getQueryParam(VPS_IP_QUERY_KEY);
    if (fromQuery && isValidIP(fromQuery)) {
        return fromQuery.trim();
    }
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])(VPS_IP_KEY);
    if (stored && isValidIP(stored)) {
        return stored.trim();
    }
    return null;
}
function setVPSIP(ip) {
    const normalized = ip.trim();
    if (!isValidIP(normalized)) {
        return false;
    }
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])(VPS_IP_KEY, normalized);
    const urlOk = setQueryParam(VPS_IP_QUERY_KEY, normalized);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function isValidIP(ip) {
    const normalized = ip.trim();
    // IPv4 validation
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Pattern.test(normalized)) {
        const parts = normalized.split(".");
        return parts.every((part)=>{
            const num = parseInt(part, 10);
            return num >= 0 && num <= 255;
        });
    }
    // Reject IPv6 addresses with zone IDs (e.g., %eth0, %br-abc123)
    // Zone IDs are only meaningful for link-local addresses on local interfaces,
    // not for remote VPS connections over the internet.
    if (normalized.includes("%")) {
        return false;
    }
    // IPv6 validation (full, compressed, and mixed formats)
    // Matches: 2001:db8::1, ::1, 2001:db8:85a3::8a2e:370:7334, etc.
    const ipv6Pattern = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))$/;
    return ipv6Pattern.test(normalized);
}
function useUserOS() {
    const [userOSState, setUserOSState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        os: null,
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const syncState = ()=>{
            setUserOSState({
                os: getUserOS(),
                loaded: true
            });
        };
        syncState();
        return subscribeToUserPreferencesUpdates(syncState);
    }, []);
    const setOS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newOS)=>{
        if (setUserOS(newOS)) {
            setUserOSState({
                os: getUserOS(),
                loaded: true
            });
        }
    }, []);
    return [
        userOSState.os,
        setOS,
        userOSState.loaded
    ];
}
function useVPSIP() {
    const [vpsIPState, setVpsIPState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ip: null,
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const syncState = ()=>{
            setVpsIPState({
                ip: getVPSIP(),
                loaded: true
            });
        };
        syncState();
        return subscribeToUserPreferencesUpdates(syncState);
    }, []);
    const setIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newIP)=>{
        const normalized = newIP.trim();
        if (setVPSIP(normalized)) {
            setVpsIPState({
                ip: normalized,
                loaded: true
            });
        }
    }, []);
    return [
        vpsIPState.ip,
        setIP,
        vpsIPState.loaded
    ];
}
function useDetectedOS() {
    const { data: detectedOS } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: userPreferencesKeys.detectedOS,
        queryFn: detectOS,
        staleTime: Infinity,
        gcTime: Infinity
    });
    return detectedOS ?? null;
}
function useMounted() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration detection
        setMounted(true);
    }, []);
    return mounted;
}
function getInstallMode() {
    const fromQuery = getQueryParam(INSTALL_MODE_QUERY_KEY);
    if (fromQuery === "vibe" || fromQuery === "safe") return fromQuery;
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])(INSTALL_MODE_KEY);
    if (stored === "vibe" || stored === "safe") return stored;
    return "vibe";
}
function setInstallMode(mode) {
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])(INSTALL_MODE_KEY, mode);
    const urlOk = setQueryParam(INSTALL_MODE_QUERY_KEY, mode);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function useInstallMode() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        mode: "vibe",
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const syncState = ()=>{
            setState({
                mode: getInstallMode(),
                loaded: true
            });
        };
        syncState();
        return subscribeToUserPreferencesUpdates(syncState);
    }, []);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newMode)=>{
        if (setInstallMode(newMode)) {
            setState({
                mode: getInstallMode(),
                loaded: true
            });
        }
    }, []);
    return [
        state.mode,
        setMode,
        state.loaded
    ];
}
function getSSHUsername() {
    const fromQuery = getQueryParam(SSH_USERNAME_QUERY_KEY);
    if (fromQuery && /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(fromQuery)) return fromQuery;
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])(SSH_USERNAME_KEY);
    if (stored && /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(stored)) return stored;
    return "ubuntu";
}
function setSSHUsername(username) {
    const trimmed = username.trim();
    if (!trimmed || !/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(trimmed)) return false;
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])(SSH_USERNAME_KEY, trimmed);
    const urlOk = setQueryParam(SSH_USERNAME_QUERY_KEY, trimmed === "ubuntu" ? null : trimmed);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function useSSHUsername() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        username: "ubuntu",
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const syncState = ()=>{
            setState({
                username: getSSHUsername(),
                loaded: true
            });
        };
        syncState();
        return subscribeToUserPreferencesUpdates(syncState);
    }, []);
    const setUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newUsername)=>{
        if (setSSHUsername(newUsername)) {
            setState({
                username: getSSHUsername(),
                loaded: true
            });
        }
    }, []);
    return [
        state.username,
        setUsername,
        state.loaded
    ];
}
function getACFSRef() {
    const fromQuery = normalizeGitRef(getQueryParam(ACFS_REF_QUERY_KEY));
    if (fromQuery) return fromQuery;
    return normalizeGitRef((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])(ACFS_REF_KEY));
}
function setACFSRef(ref) {
    const value = normalizeGitRef(ref);
    const storedOk = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])(ACFS_REF_KEY, value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])(ACFS_REF_KEY, "");
    const urlOk = setQueryParam(ACFS_REF_QUERY_KEY, value);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function useACFSRef() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ref: null,
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const syncState = ()=>{
            setState({
                ref: getACFSRef(),
                loaded: true
            });
        };
        syncState();
        return subscribeToUserPreferencesUpdates(syncState);
    }, []);
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newRef)=>{
        if (setACFSRef(newRef)) {
            setState({
                ref: getACFSRef(),
                loaded: true
            });
        }
    }, []);
    return [
        state.ref,
        setRef,
        state.loaded
    ];
}
}),
"[project]/apps/web/lib/wizardSteps.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPLETED_STEPS_CHANGED_EVENT",
    ()=>COMPLETED_STEPS_CHANGED_EVENT,
    "COMPLETED_STEPS_KEY",
    ()=>COMPLETED_STEPS_KEY,
    "TOTAL_STEPS",
    ()=>TOTAL_STEPS,
    "WIZARD_STEPS",
    ()=>WIZARD_STEPS,
    "addCompletedStep",
    ()=>addCompletedStep,
    "getCompletedSteps",
    ()=>getCompletedSteps,
    "getStepById",
    ()=>getStepById,
    "getStepBySlug",
    ()=>getStepBySlug,
    "markStepComplete",
    ()=>markStepComplete,
    "setCompletedSteps",
    ()=>setCompletedSteps,
    "useCompletedSteps",
    ()=>useCompletedSteps,
    "validateStep",
    ()=>validateStep,
    "wizardStepsKeys",
    ()=>wizardStepsKeys
]);
/**
 * Wizard Steps Configuration
 *
 * Defines the steps of the Agent Flywheel setup wizard.
 * The actual count is derived from the WIZARD_STEPS array (see TOTAL_STEPS).
 * Each step guides beginners from "I have a laptop" to "fully configured VPS".
 * Uses TanStack Query for React state management with localStorage persistence.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/userPreferences.ts [app-ssr] (ecmascript)");
;
;
;
;
// --- Step validation functions ---
function validateOSSelection() {
    // Try auto-detection as a last resort before failing
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOS"])()) {
        const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectOS"])();
        if (detected) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUserOS"])(detected);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserOS"])() ? {
        valid: true,
        errors: []
    } : {
        valid: false,
        errors: [
            "Select your operating system to continue"
        ],
        focusSelector: "[data-os-selection]"
    };
}
function validateVPSCreation() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVPSIP"])() ? {
        valid: true,
        errors: []
    } : {
        valid: false,
        errors: [
            "Enter your VPS IP address to continue"
        ],
        focusSelector: "[data-vps-ip-input]"
    };
}
const COMMAND_COMPLETION_KEY_PREFIX = "acfs-command-";
function isCommandMarkedComplete(persistKey) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])(`${COMMAND_COMPLETION_KEY_PREFIX}${persistKey}`) === "true") {
        return true;
    }
    if (typeof document === "undefined") {
        return false;
    }
    const checkbox = document.getElementById(persistKey);
    if (!checkbox) {
        return false;
    }
    return checkbox.getAttribute("data-state") === "checked" || checkbox instanceof HTMLInputElement && checkbox.checked;
}
function validateStatusCheck() {
    return isCommandMarkedComplete("flywheel-doctor") ? {
        valid: true,
        errors: []
    } : {
        valid: false,
        errors: [
            "Run the doctor command and mark it complete before continuing"
        ],
        focusSelector: "#flywheel-doctor"
    };
}
const WIZARD_STEPS = [
    {
        id: 1,
        title: "Choose Your OS",
        description: "Select whether you're using Mac, Windows, or Linux",
        slug: "os-selection",
        validate: validateOSSelection
    },
    {
        id: 2,
        title: "Install Terminal",
        description: "Get a proper terminal application set up",
        slug: "install-terminal"
    },
    {
        id: 3,
        title: "Generate SSH Key",
        description: "Create your SSH key pair for secure VPS access",
        slug: "generate-ssh-key"
    },
    {
        id: 4,
        title: "Rent a VPS",
        description: "Choose and sign up for a VPS provider",
        slug: "rent-vps"
    },
    {
        id: 5,
        title: "Create VPS Instance",
        description: "Launch your VPS with password authentication",
        slug: "create-vps",
        validate: validateVPSCreation
    },
    {
        id: 6,
        title: "SSH Into Your VPS",
        description: "Connect to your VPS for the first time",
        slug: "ssh-connect"
    },
    {
        id: 7,
        title: "Set Up Accounts",
        description: "Create accounts for the services you'll use",
        slug: "accounts"
    },
    {
        id: 8,
        title: "Pre-Flight Check",
        description: "Verify your VPS is ready before installing",
        slug: "preflight-check"
    },
    {
        id: 9,
        title: "Run Installer",
        description: "Paste and run the one-liner to install everything",
        slug: "run-installer"
    },
    {
        id: 10,
        title: "Reconnect as Ubuntu",
        description: "Switch from root to your ubuntu user",
        slug: "reconnect-ubuntu"
    },
    {
        id: 11,
        title: "Verify Key Connection",
        description: "Reconnect using your SSH key and confirm it works",
        slug: "verify-key-connection"
    },
    {
        id: 12,
        title: "Status Check",
        description: "Verify everything installed correctly",
        slug: "status-check",
        validate: validateStatusCheck
    },
    {
        id: 13,
        title: "Launch Onboarding",
        description: "Start the interactive tutorial",
        slug: "launch-onboarding"
    }
];
const TOTAL_STEPS = WIZARD_STEPS.length;
function getStepById(id) {
    return WIZARD_STEPS.find((step)=>step.id === id);
}
function getStepBySlug(slug) {
    // Some pages under `/wizard/*` are optional "bonus" routes that should still
    // highlight a canonical step in the sidebar.
    const canonicalSlug = slug === "windows-terminal-setup" ? "verify-key-connection" : slug;
    return WIZARD_STEPS.find((step)=>step.slug === canonicalSlug);
}
function validateStep(stepId) {
    const step = getStepById(stepId);
    if (!step?.validate) {
        return {
            valid: true,
            errors: []
        };
    }
    return step.validate();
}
const COMPLETED_STEPS_KEY = "agent-flywheel-wizard-completed-steps";
const COMPLETED_STEPS_CHANGED_EVENT = "acfs:wizard:completed-steps-changed";
const wizardStepsKeys = {
    completedSteps: [
        "wizardSteps",
        "completed"
    ]
};
function normalizeCompletedSteps(steps) {
    const validSteps = steps.filter((n)=>typeof n === "number" && n >= 1 && n <= TOTAL_STEPS);
    return Array.from(new Set(validSteps)).sort((a, b)=>a - b);
}
function emitCompletedStepsChanged(steps) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getCompletedSteps() {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetJSON"])(COMPLETED_STEPS_KEY);
    if (Array.isArray(parsed)) {
        return normalizeCompletedSteps(parsed);
    }
    return [];
}
function setCompletedSteps(steps) {
    const normalized = normalizeCompletedSteps(steps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetJSON"])(COMPLETED_STEPS_KEY, normalized);
    emitCompletedStepsChanged(normalized);
}
function addCompletedStep(currentSteps, stepId) {
    if (currentSteps.includes(stepId)) {
        return currentSteps;
    }
    const newSteps = [
        ...currentSteps,
        stepId
    ];
    newSteps.sort((a, b)=>a - b);
    return newSteps;
}
function useCompletedSteps() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleCompletedStepsChanged = undefined;
        const handleStorage = undefined;
    }, [
        queryClient
    ]);
    const { data: steps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: wizardStepsKeys.completedSteps,
        queryFn: getCompletedSteps,
        // The stepper lives in a persistent Next.js layout, so it won't remount
        // between steps. We keep this query in sync by listening for:
        // - `COMPLETED_STEPS_CHANGED_EVENT` (same-tab writes)
        // - `storage` events (cross-tab writes)
        staleTime: 0,
        gcTime: Infinity
    });
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (stepId)=>{
            // Use query cache as source of truth to avoid race conditions when
            // markComplete is called rapidly multiple times. Falls back to
            // localStorage for initial hydration.
            const currentSteps = queryClient.getQueryData(wizardStepsKeys.completedSteps) ?? getCompletedSteps();
            const newSteps = addCompletedStep(currentSteps, stepId);
            setCompletedSteps(newSteps);
            return newSteps;
        },
        onMutate: async (stepId)=>{
            // Cancel any outgoing refetches to prevent overwrites
            await queryClient.cancelQueries({
                queryKey: wizardStepsKeys.completedSteps
            });
            // Snapshot previous value for rollback
            const cachedSteps = queryClient.getQueryData(wizardStepsKeys.completedSteps);
            // Optimistically update cache immediately (synchronous) so subsequent
            // rapid mutations see the updated value
            // Important: fall back to localStorage when cache is empty to avoid
            // overwriting existing progress on first mutation before hydration.
            const baseSteps = cachedSteps ?? getCompletedSteps();
            const newSteps = addCompletedStep(baseSteps, stepId);
            queryClient.setQueryData(wizardStepsKeys.completedSteps, newSteps);
            return {
                previousSteps: cachedSteps
            };
        },
        onError: (_err, _stepId, context)=>{
            // Rollback to previous value on error
            if (context?.previousSteps !== undefined) {
                queryClient.setQueryData(wizardStepsKeys.completedSteps, context.previousSteps);
            } else {
                queryClient.invalidateQueries({
                    queryKey: wizardStepsKeys.completedSteps
                });
            }
        },
        onSettled: ()=>{
            // Refetch to ensure cache is in sync with localStorage
            queryClient.invalidateQueries({
                queryKey: wizardStepsKeys.completedSteps
            });
        }
    });
    const { mutate } = mutation;
    const markComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((stepId)=>{
        mutate(stepId);
    }, [
        mutate
    ]);
    return [
        steps ?? [],
        markComplete
    ];
}
function markStepComplete(stepId) {
    const completed = getCompletedSteps();
    const newSteps = addCompletedStep(completed, stepId);
    if (newSteps !== completed) {
        setCompletedSteps(newSteps);
    }
    return newSteps;
}
}),
"[project]/apps/web/components/query-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$2d$persist$2d$client$40$5$2e$90$2e$14$2b$4d327aa9bbe52471$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query-persist-client@5.90.14+4d327aa9bbe52471/node_modules/@tanstack/react-query-persist-client/build/modern/PersistQueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$sync$2d$storage$2d$persister$40$5$2e$90$2e$14$2f$node_modules$2f40$tanstack$2f$query$2d$sync$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+query-sync-storage-persister@5.90.14/node_modules/@tanstack/query-sync-storage-persister/build/modern/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/wizardSteps.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/userPreferences.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function makeQueryClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                // With localStorage persistence, we want long cache times
                staleTime: Infinity,
                gcTime: Infinity,
                // Don't refetch on window focus for localStorage-backed data
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                retry: false
            }
        }
    });
}
function QueryProvider({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>makeQueryClient());
    const [persister, setPersister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Create persister only after mount to avoid hydration mismatch
    // Server and client both render QueryClientProvider initially,
    // then we upgrade to PersistQueryClientProvider on client after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Guard against localStorage being unavailable (private browsing, restrictions)
        try {
            // Test localStorage availability first
            const testKey = "__acfs_test__";
            window.localStorage.setItem(testKey, "test");
            window.localStorage.removeItem(testKey);
            const storagePersister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$sync$2d$storage$2d$persister$40$5$2e$90$2e$14$2f$node_modules$2f40$tanstack$2f$query$2d$sync$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSyncStoragePersister"])({
                storage: window.localStorage,
                key: "acfs-query-cache"
            });
            // Defer state update to avoid setState-in-effect lint violations.
            let cancelled = false;
            Promise.resolve().then(()=>{
                if (!cancelled) setPersister(storagePersister);
            });
            return ()=>{
                cancelled = true;
            };
        } catch  {
            // localStorage unavailable (private browsing, quota exceeded, etc.)
            // Silently fall back to non-persisted state - app will still work
            console.warn("[ACFS] localStorage unavailable, running without query persistence");
        }
    }, []);
    // Always render PersistQueryClientProvider once we have a persister,
    // but start with QueryClientProvider for SSR/hydration consistency
    if (persister) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$2d$persist$2d$client$40$5$2e$90$2e$14$2b$4d327aa9bbe52471$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PersistQueryClientProvider"], {
            client: queryClient,
            persistOptions: {
                persister,
                dehydrateOptions: {
                    shouldDehydrateQuery: (query)=>{
                        const queryKey = query.queryKey;
                        // Exclude wizard steps (manually persisted to separate key)
                        if (queryKey[0] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wizardStepsKeys"].completedSteps[0] && queryKey[1] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wizardStepsKeys"].completedSteps[1]) {
                            return false;
                        }
                        // Exclude detected OS (fast, client-only, no need to persist)
                        if (queryKey[0] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userPreferencesKeys"].detectedOS[0] && queryKey[1] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userPreferencesKeys"].detectedOS[1]) {
                            return false;
                        }
                        return true;
                    }
                }
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/components/query-provider.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
    // Initial render (SSR + first client render before useEffect)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/query-provider.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/apps/web/lib/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GA_MEASUREMENT_ID",
    ()=>GA_MEASUREMENT_ID,
    "enableDebugMode",
    ()=>enableDebugMode,
    "getFunnelData",
    ()=>getFunnelData,
    "getFunnelSummary",
    ()=>getFunnelSummary,
    "getLessonFunnelData",
    ()=>getLessonFunnelData,
    "getLessonFunnelSummary",
    ()=>getLessonFunnelSummary,
    "getOrCreateUserId",
    ()=>getOrCreateUserId,
    "initFunnel",
    ()=>initFunnel,
    "initLessonFunnel",
    ()=>initLessonFunnel,
    "isAnalyticsEnabled",
    ()=>isAnalyticsEnabled,
    "sendEvent",
    ()=>sendEvent,
    "sendServerEvent",
    ()=>sendServerEvent,
    "setUserProperties",
    ()=>setUserProperties,
    "trackAPIError",
    ()=>trackAPIError,
    "trackConversion",
    ()=>trackConversion,
    "trackError",
    ()=>trackError,
    "trackExperimentVariant",
    ()=>trackExperimentVariant,
    "trackFunnelComplete",
    ()=>trackFunnelComplete,
    "trackFunnelDropoff",
    ()=>trackFunnelDropoff,
    "trackFunnelStepComplete",
    ()=>trackFunnelStepComplete,
    "trackFunnelStepEnter",
    ()=>trackFunnelStepEnter,
    "trackInstallationComplete",
    ()=>trackInstallationComplete,
    "trackInstallationStart",
    ()=>trackInstallationStart,
    "trackInstallerCopy",
    ()=>trackInstallerCopy,
    "trackInteraction",
    ()=>trackInteraction,
    "trackLandingCTA",
    ()=>trackLandingCTA,
    "trackLandingEngagement",
    ()=>trackLandingEngagement,
    "trackLessonComplete",
    ()=>trackLessonComplete,
    "trackLessonDropoff",
    ()=>trackLessonDropoff,
    "trackLessonEnter",
    ()=>trackLessonEnter,
    "trackLessonFunnelComplete",
    ()=>trackLessonFunnelComplete,
    "trackOSSelection",
    ()=>trackOSSelection,
    "trackOutboundLink",
    ()=>trackOutboundLink,
    "trackPagePerformance",
    ()=>trackPagePerformance,
    "trackSSHConnection",
    ()=>trackSSHConnection,
    "trackSSHKeyGeneration",
    ()=>trackSSHKeyGeneration,
    "trackScrollDepth",
    ()=>trackScrollDepth,
    "trackSessionStart",
    ()=>trackSessionStart,
    "trackTerminalSelection",
    ()=>trackTerminalSelection,
    "trackTimeOnPage",
    ()=>trackTimeOnPage,
    "trackVPSProviderSelection",
    ()=>trackVPSProviderSelection,
    "trackWebVitals",
    ()=>trackWebVitals,
    "trackWizardAbandonment",
    ()=>trackWizardAbandonment,
    "trackWizardComplete",
    ()=>trackWizardComplete,
    "trackWizardStep",
    ()=>trackWizardStep,
    "trackWizardStepComplete",
    ()=>trackWizardStepComplete
]);
/**
 * Agent Flywheel Analytics Library
 * Comprehensive GA4 instrumentation for deep user insights
 * Build timestamp: 2025-12-25T17:40:00Z
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/wizardSteps.ts [app-ssr] (ecmascript)");
;
;
function sanitizeGaMeasurementId(value) {
    if (typeof value !== 'string') return undefined;
    let cleaned = value.trim();
    if (!cleaned) return undefined;
    // Handle accidental quoting in env var values (common copy/paste mistake).
    if (cleaned.startsWith('"') && cleaned.endsWith('"') || cleaned.startsWith("'") && cleaned.endsWith("'")) {
        cleaned = cleaned.slice(1, -1).trim();
    }
    // Remove common trailing garbage (escaped newlines, whitespace sequences)
    // that can appear from misconfigured env vars or Vercel CLI pulls.
    cleaned = cleaned.replace(/\\n$/, '').replace(/\s+$/, '');
    // Extract valid GA4 measurement ID (G-XXXXXXXXXX).
    // Use extraction rather than strict matching to handle any remaining edge cases.
    const ga4Match = cleaned.match(/^(G-[A-Z0-9]+)/i);
    if (ga4Match) {
        return ga4Match[1];
    }
    return undefined;
}
// Measurement ID from environment (sanitized to prevent script injection / prod crashes)
const GA_MEASUREMENT_ID_RAW = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_MEASUREMENT_ID = sanitizeGaMeasurementId(GA_MEASUREMENT_ID_RAW);
const isAnalyticsEnabled = ()=>{
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && !!GA_MEASUREMENT_ID && !!window.gtag;
};
const GA_CLIENT_ID_STORAGE_KEY = 'ga_client_id';
const MAX_GA_CLIENT_ID_LENGTH = 100;
function isNumericGaClientId(value) {
    if (!value || value.length > MAX_GA_CLIENT_ID_LENGTH) return false;
    return /^\d{1,16}\.\d{1,16}$/.test(value);
}
function fnv1a32(input) {
    let hash = 0x811c9dc5;
    for(let i = 0; i < input.length; i++){
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    return hash >>> 0;
}
function randomDigits10() {
    const digits = 10;
    try {
        if (typeof crypto !== 'undefined' && 'getRandomValues' in crypto) {
            const values = new Uint32Array(2);
            crypto.getRandomValues(values);
            // Combine into a 53-bit safe integer (avoid BigInt; TS target < ES2020).
            const combined = (values[0] & 0x001fffff) * 0x100000000 + values[1];
            return (combined % 10_000_000_000).toString().padStart(digits, '0');
        }
    } catch  {
    // Fall back to Math.random for older/locked-down environments.
    }
    return Math.floor(Math.random() * 10 ** digits).toString().padStart(digits, '0');
}
function generateNumericClientId() {
    const randomPart = randomDigits10();
    const timestampSeconds = Math.floor(Date.now() / 1000);
    return `${randomPart}.${timestampSeconds}`;
}
function normalizeClientId(raw) {
    if (isNumericGaClientId(raw)) return raw;
    // Migrate legacy format: "<timestamp_ms>.<base36>" → "<randomDigits>.<timestamp_seconds>"
    const legacyMatch = /^(\d{1,16})\.([a-z0-9]{1,32})$/i.exec(raw);
    if (legacyMatch) {
        const legacyTimestamp = Number(legacyMatch[1]);
        const legacySuffix = legacyMatch[2];
        if (Number.isSafeInteger(legacyTimestamp) && legacyTimestamp > 0) {
            const timestampSeconds = legacyMatch[1].length > 10 ? Math.floor(legacyTimestamp / 1000) : legacyTimestamp;
            const randomPart = (fnv1a32(legacySuffix) % 10 ** 10).toString().padStart(10, '0');
            const migrated = `${randomPart}.${timestampSeconds}`;
            if (isNumericGaClientId(migrated)) return migrated;
        }
    }
    return generateNumericClientId();
}
// Get or create a persistent client ID for server-side tracking
const getClientId = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return '';
    //TURBOPACK unreachable
    ;
    const existing = undefined;
    const normalized = undefined;
};
const sendServerEvent = async (eventName, params)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const sendEvent = (eventName, parameters)=>{
    if (!isAnalyticsEnabled()) return;
    //TURBOPACK unreachable
    ;
};
const setUserProperties = (properties)=>{
    if (!isAnalyticsEnabled()) return;
    //TURBOPACK unreachable
    ;
};
const trackWizardStep = (step, stepNumber, additionalParams)=>{
    sendEvent('wizard_step_view', {
        step_name: step,
        step_number: stepNumber,
        ...additionalParams
    });
};
const trackWizardStepComplete = (step, stepNumber, timeSpentSeconds)=>{
    sendEvent('wizard_step_complete', {
        step_name: step,
        step_number: stepNumber,
        time_spent_seconds: timeSpentSeconds
    });
};
const trackWizardAbandonment = (lastStep, lastStepNumber, reason)=>{
    sendEvent('wizard_abandoned', {
        last_step: lastStep,
        last_step_number: lastStepNumber,
        abandonment_reason: reason
    });
};
const trackWizardComplete = (totalTimeSeconds, stepsCompleted)=>{
    sendEvent('wizard_complete', {
        total_time_seconds: totalTimeSeconds,
        steps_completed: stepsCompleted
    });
};
const trackScrollDepth = (depth, pagePath)=>{
    sendEvent('scroll_depth', {
        depth_percentage: depth,
        page_path: pagePath
    });
};
const trackTimeOnPage = (seconds, pagePath)=>{
    sendEvent('time_on_page', {
        seconds_elapsed: seconds,
        page_path: pagePath
    });
};
const trackInteraction = (interactionType, elementId, elementType, additionalParams)=>{
    sendEvent('user_interaction', {
        interaction_type: interactionType,
        element_id: elementId,
        element_type: elementType,
        ...additionalParams
    });
};
const trackOSSelection = (os)=>{
    sendEvent('os_selected', {
        os_name: os
    });
    setUserProperties({
        selected_os: os
    });
};
const trackVPSProviderSelection = (provider)=>{
    sendEvent('vps_provider_selected', {
        provider_name: provider
    });
    setUserProperties({
        vps_provider: provider
    });
};
const trackTerminalSelection = (terminal)=>{
    sendEvent('terminal_selected', {
        terminal_name: terminal
    });
    setUserProperties({
        terminal_app: terminal
    });
};
const trackSSHKeyGeneration = (keyType, success)=>{
    sendEvent('ssh_key_generated', {
        key_type: keyType,
        success
    });
};
const trackSSHConnection = (success, errorType)=>{
    sendEvent('ssh_connection_attempt', {
        success,
        error_type: errorType
    });
};
const trackInstallerCopy = (command)=>{
    sendEvent('installer_command_copied', {
        command_length: command.length,
        command_preview: command.slice(0, 50)
    });
};
const trackInstallationStart = ()=>{
    sendEvent('installation_started', {
        start_time: new Date().toISOString()
    });
};
const trackInstallationComplete = (durationMinutes, success)=>{
    sendEvent('installation_complete', {
        duration_minutes: durationMinutes,
        success
    });
};
const trackError = (errorType, errorMessage, errorStack, context)=>{
    sendEvent('error_occurred', {
        error_type: errorType,
        error_message: errorMessage,
        error_stack: errorStack?.slice(0, 500),
        ...context
    });
};
const trackAPIError = (endpoint, statusCode, errorMessage)=>{
    sendEvent('api_error', {
        endpoint,
        status_code: statusCode,
        error_message: errorMessage
    });
};
const trackPagePerformance = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const timing = undefined;
    const safeTimingMetric = undefined;
};
const trackWebVitals = (metric)=>{
    sendEvent('web_vitals', {
        metric_name: metric.name,
        metric_value: Math.round(metric.value),
        metric_id: metric.id
    });
};
const trackOutboundLink = (url, linkText)=>{
    let linkDomain = 'unknown';
    try {
        linkDomain = new URL(url).hostname;
    } catch  {
    // Invalid URL, use fallback
    }
    sendEvent('outbound_link_click', {
        link_url: url,
        link_text: linkText,
        link_domain: linkDomain
    });
};
// ============================================================
// Session & User Tracking
// ============================================================
/**
 * Extract UTM parameters and referrer from current URL
 */ function getAcquisitionData() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            utm_source: 'direct',
            utm_medium: 'none',
            utm_campaign: '',
            utm_term: '',
            utm_content: '',
            referrer: '',
            referrer_domain: '',
            landing_page: ''
        };
    }
    //TURBOPACK unreachable
    ;
    const params = undefined;
    const referrer = undefined;
    let referrerDomain;
    // Determine source from UTM or referrer
    let source;
    let medium;
}
const FIRST_VISIT_KEY = 'acfs_first_visit';
const FIRST_SOURCE_KEY = 'acfs_first_source';
/**
 * Detect platform from user agent
 */ function detectPlatform() {
    if (typeof navigator === 'undefined') return 'unknown';
    const ua = navigator.userAgent;
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Win')) return 'Windows';
    if (ua.includes('Linux') && !ua.includes('Android')) return 'Linux';
    if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
    if (ua.includes('Android')) return 'Android';
    return 'unknown';
}
const trackSessionStart = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const screenWidth = undefined;
    const screenHeight = undefined;
    const devicePixelRatio = undefined;
    const isTouchDevice = undefined;
    const acquisition = undefined;
    // Check for first visit
    const isFirstVisit = undefined;
    const now = undefined;
    // Get first visit data for user properties
    const firstVisitDate = undefined;
    const firstSource = undefined;
    // Check for returning user (use || 0 to handle NaN from corrupted storage)
    const visitCount = undefined;
};
const getOrCreateUserId = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return '';
    //TURBOPACK unreachable
    ;
    const storageKey = undefined;
    let userId;
};
const trackConversion = (conversionType, value)=>{
    const params = {
        conversion_type: conversionType,
        conversion_value: value ?? 0
    };
    // Client-side tracking (fast, may be blocked)
    sendEvent('conversion', params);
    // Server-side tracking (reliable, bypasses ad blockers)
    sendServerEvent('conversion', params);
};
const trackExperimentVariant = (experimentId, variantId)=>{
    sendEvent('experiment_variant', {
        experiment_id: experimentId,
        variant_id: variantId
    });
    setUserProperties({
        [`experiment_${experimentId}`]: variantId
    });
};
// ============================================================
// Funnel Tracking
// ============================================================
const FUNNEL_STORAGE_KEY = 'acfs_funnel_data';
function getElapsedSecondsSince(timestampIso) {
    if (!timestampIso) return undefined;
    const start = new Date(timestampIso).getTime();
    if (!Number.isFinite(start)) return undefined;
    const elapsedSeconds = Math.round((Date.now() - start) / 1000);
    return elapsedSeconds >= 0 ? elapsedSeconds : 0;
}
const getFunnelData = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
};
const initFunnel = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            sessionId: '',
            startedAt: new Date().toISOString(),
            currentStep: 0,
            maxStepReached: 0,
            stepTimestamps: {},
            completedSteps: [],
            source: '',
            medium: '',
            campaign: ''
        };
    }
    //TURBOPACK unreachable
    ;
    // Parse UTM parameters
    const params = undefined;
    const funnelData = undefined;
};
const trackFunnelStepEnter = (stepNumber, stepName, stepTitle)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let funnelData;
    const now = undefined;
    const previousStep = undefined;
    const isNewMaxStep = undefined;
    // Calculate time from previous step
    let timeFromPreviousStep;
};
const trackFunnelStepComplete = (stepNumber, stepName, additionalData)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const funnelData = undefined;
    const now = undefined;
    // Calculate time spent on step
    const timeOnStep = undefined;
};
const trackFunnelComplete = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const funnelData = undefined;
    const totalTimeSeconds = undefined;
    const totalTimeMinutes = undefined;
};
const trackFunnelDropoff = (reason)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const funnelData = undefined;
    const totalTimeSeconds = undefined;
    // Calculate time on current step
    const timeOnCurrentStep = undefined;
};
const trackLandingCTA = (ctaType, ctaText)=>{
    sendEvent('landing_cta_click', {
        cta_type: ctaType,
        cta_text: ctaText,
        page_scroll_depth: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0
    });
    // Initialize funnel on CTA click
    initFunnel();
};
const trackLandingEngagement = (engagementType, details)=>{
    sendEvent('landing_engagement', {
        engagement_type: engagementType,
        ...details
    });
};
// ============================================================
// Learning Hub Funnel Tracking
// ============================================================
const LESSON_FUNNEL_STORAGE_KEY = 'acfs_lesson_funnel_data';
const getLessonFunnelData = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
};
const initLessonFunnel = (totalLessons)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            sessionId: '',
            startedAt: new Date().toISOString(),
            currentLesson: 0,
            maxLessonReached: 0,
            lessonTimestamps: {},
            completedLessons: [],
            source: '',
            medium: '',
            campaign: ''
        };
    }
    //TURBOPACK unreachable
    ;
    // Parse UTM parameters
    const params = undefined;
    const funnelData = undefined;
};
const trackLessonEnter = (lessonId, lessonSlug, lessonTitle, totalLessons)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let funnelData;
    const now = undefined;
    const previousLesson = undefined;
    const isNewMaxLesson = undefined;
    // Calculate time from previous lesson (only if visiting a different lesson)
    let timeFromPreviousLesson;
};
const trackLessonComplete = (lessonId, lessonSlug, lessonTitle, totalLessons, additionalData)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const funnelData = undefined;
    const now = undefined;
    // Calculate time spent on lesson
    let timeOnLesson;
};
const trackLessonFunnelComplete = (totalLessons)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const funnelData = undefined;
    const startTime = undefined;
    const totalTimeSeconds = undefined;
};
const trackLessonDropoff = (reason)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const funnelData = undefined;
    const startTime = undefined;
    const totalTimeSeconds = undefined;
};
const getLessonFunnelSummary = (totalLessons)=>{
    const funnelData = getLessonFunnelData();
    if (!funnelData) return null;
    const startTime = new Date(funnelData.startedAt).getTime();
    const totalTimeSeconds = Math.round((Date.now() - startTime) / 1000);
    return {
        funnelId: funnelData.sessionId,
        currentLesson: funnelData.currentLesson,
        maxLessonReached: funnelData.maxLessonReached,
        completedLessons: funnelData.completedLessons,
        totalTimeMinutes: Math.round(totalTimeSeconds / 60),
        source: funnelData.source,
        completionRate: Math.round(funnelData.completedLessons.length / totalLessons * 100)
    };
};
const enableDebugMode = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const getFunnelSummary = ()=>{
    const funnelData = getFunnelData();
    if (!funnelData) return null;
    const startTime = new Date(funnelData.startedAt).getTime();
    const totalTimeSeconds = Math.round((Date.now() - startTime) / 1000);
    return {
        funnelId: funnelData.sessionId,
        currentStep: funnelData.currentStep,
        maxStepReached: funnelData.maxStepReached,
        completedSteps: funnelData.completedSteps,
        totalTimeMinutes: Math.round(totalTimeSeconds / 60),
        source: funnelData.source,
        completionRate: Math.round(funnelData.completedSteps.length / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] * 100)
    };
};
}),
"[project]/apps/web/components/analytics-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsProvider",
    ()=>AnalyticsProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
/**
 * Inner component that uses useSearchParams - isolated in its own Suspense boundary
 * to prevent SSR bailout for the entire app
 */ function AnalyticsTracker() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const gaId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GA_MEASUREMENT_ID"]?.trim();
    const scrollDepthsReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const pageStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasInitializedGa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize GA stub early (no inline script injection)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        window.dataLayer = window.dataLayer || [];
        if (!window.gtag) {
            window.gtag = (...args)=>{
                window.dataLayer.push(args);
            };
        }
        if (!hasInitializedGa.current) {
            window.gtag('js', new Date());
            hasInitializedGa.current = true;
        }
    }, [
        gaId
    ]);
    // Track page views on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
        // Reset tracking for new page
        scrollDepthsReached.current.clear();
        pageStartTime.current = Date.now();
        // Track pageview
        window.gtag?.('config', gaId, {
            page_path: url,
            page_title: document.title,
            cookie_flags: 'SameSite=None;Secure',
            send_page_view: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: false,
            custom_map: {
                dimension1: 'user_type',
                dimension2: 'wizard_step',
                dimension3: 'selected_os',
                dimension4: 'vps_provider',
                dimension5: 'terminal_app'
            }
        });
        // Track page performance after load
        if (document.readyState === 'complete') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackPagePerformance"])();
        } else {
            window.addEventListener('load', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackPagePerformance"], {
                once: true
            });
        }
        return ()=>{
            window.removeEventListener('load', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackPagePerformance"]);
        };
    }, [
        pathname,
        searchParams,
        gaId
    ]);
    // Initialize session tracking on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        // Get or create user ID
        const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUserId"])();
        // Set user ID for cross-session tracking
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUserProperties"])({
            user_id: userId,
            first_visit_date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_first_visit') || new Date().toISOString()
        });
        // Store first visit date
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_first_visit')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])('acfs_first_visit', new Date().toISOString());
        }
        // Track enhanced session start
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackSessionStart"])();
        // Track returning vs new user (use || 0 to handle NaN from corrupted storage)
        const visitCount = (parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_visit_count') || '0', 10) || 0) + 1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSetItem"])('acfs_visit_count', visitCount.toString());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUserProperties"])({
            visit_count: visitCount,
            is_returning_user: visitCount > 1
        });
    }, [
        gaId
    ]);
    // Scroll depth tracking
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!gaId) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? Math.round(scrollTop / docHeight * 100) : 0;
        const milestones = [
            25,
            50,
            75,
            90,
            100
        ];
        for (const milestone of milestones){
            if (scrollPercent >= milestone && !scrollDepthsReached.current.has(milestone)) {
                scrollDepthsReached.current.add(milestone);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackScrollDepth"])(milestone, pathname);
            }
        }
    }, [
        pathname,
        gaId
    ]);
    // Set up scroll tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        handleScroll,
        gaId
    ]);
    // Time on page tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        const timeCheckpoints = [
            30,
            60,
            120,
            300,
            600
        ]; // seconds
        let lastCheckpoint = 0;
        timeIntervalRef.current = setInterval(()=>{
            const elapsed = Math.floor((Date.now() - pageStartTime.current) / 1000);
            for (const checkpoint of timeCheckpoints){
                if (elapsed >= checkpoint && lastCheckpoint < checkpoint) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackTimeOnPage"])(checkpoint, pathname);
                    lastCheckpoint = checkpoint;
                }
            }
        }, 5000); // Check every 5 seconds
        return ()=>{
            if (timeIntervalRef.current) {
                clearInterval(timeIntervalRef.current);
            }
        };
    }, [
        pathname,
        gaId
    ]);
    // Track visibility changes (tab switching)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        const handleVisibilityChange = ()=>{
            if (document.hidden) {
                const timeSpent = Math.floor((Date.now() - pageStartTime.current) / 1000);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendEvent"])('page_hidden', {
                    page_path: pathname,
                    time_spent_seconds: timeSpent
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendEvent"])('page_visible', {
                    page_path: pathname
                });
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return ()=>document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [
        pathname,
        gaId
    ]);
    // Track page exit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gaId) return;
        const handleBeforeUnload = ()=>{
            const timeSpent = Math.floor((Date.now() - pageStartTime.current) / 1000);
            // Use GA4 gtag with beacon transport (Measurement Protocol api_secret cannot
            // be safely used client-side).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendEvent"])('page_exit', {
                page_path: pathname,
                time_spent_seconds: timeSpent,
                scroll_depths_reached: Array.from(scrollDepthsReached.current),
                transport_type: 'beacon'
            });
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return ()=>window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [
        pathname,
        gaId
    ]);
    return null; // This component only tracks, doesn't render anything
}
function AnalyticsProvider({ children }) {
    const gaId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GA_MEASUREMENT_ID"]?.trim();
    if (!gaId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const gaExternalScriptProps = {
        src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`,
        strategy: 'afterInteractive'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...gaExternalScriptProps
            }, void 0, false, {
                fileName: "[project]/apps/web/components/analytics-provider.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsTracker, {}, void 0, false, {
                    fileName: "[project]/apps/web/components/analytics-provider.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/analytics-provider.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = AnalyticsProvider;
}),
"[project]/apps/web/components/third-party-scripts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThirdPartyScripts",
    ()=>ThirdPartyScripts,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$analytics$40$1$2e$6$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@vercel+analytics@1.6.1+6ad186dffa08410d/node_modules/@vercel/analytics/dist/react/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$speed$2d$insights$40$1$2e$3$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@vercel+speed-insights@1.3.1+6ad186dffa08410d/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Environment variables for third-party services
// Note: GA4 is handled by AnalyticsProvider to avoid duplicate scripts
const GTM_ID_RAW = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_PROJECT_ID_RAW = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
function isValidGtmId(value) {
    return typeof value === 'string' && /^GTM-[A-Z0-9]+$/.test(value);
}
function isValidClarityProjectId(value) {
    return typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value);
}
const GTM_ID = isValidGtmId(GTM_ID_RAW) ? GTM_ID_RAW : undefined;
const CLARITY_PROJECT_ID = isValidClarityProjectId(CLARITY_PROJECT_ID_RAW) ? CLARITY_PROJECT_ID_RAW : undefined;
// Only enable Vercel Analytics when explicitly configured (requires Vercel project config)
const ENABLE_VERCEL_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === 'true';
// Only enable Speed Insights when explicitly configured (requires Vercel Pro)
const ENABLE_SPEED_INSIGHTS = process.env.NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS === 'true';
function ThirdPartyScripts() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Track virtual pageviews for GTM on SPA navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!GTM_ID) return;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'virtual_pageview',
            page_path: pathname,
            page_title: document.title
        });
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            GTM_ID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "gtm-init",
                        strategy: "afterInteractive",
                        children: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            `
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "gtm-loader",
                        strategy: "afterInteractive",
                        src: `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            CLARITY_PROJECT_ID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "clarity-init",
                        strategy: "afterInteractive",
                        children: `
              window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};
            `
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "clarity-loader",
                        strategy: "afterInteractive",
                        src: `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            ENABLE_VERCEL_ANALYTICS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$analytics$40$1$2e$6$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Analytics"], {}, void 0, false, {
                fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                lineNumber: 85,
                columnNumber: 35
            }, this),
            ENABLE_SPEED_INSIGHTS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$speed$2d$insights$40$1$2e$3$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpeedInsights"], {}, void 0, false, {
                fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                lineNumber: 88,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = ThirdPartyScripts;
}),
"[project]/apps/web/components/motion/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionA",
    ()=>MotionA,
    "MotionArticle",
    ()=>MotionArticle,
    "MotionAside",
    ()=>MotionAside,
    "MotionButton",
    ()=>MotionButton,
    "MotionDiv",
    ()=>MotionDiv,
    "MotionFooter",
    ()=>MotionFooter,
    "MotionH1",
    ()=>MotionH1,
    "MotionH2",
    ()=>MotionH2,
    "MotionH3",
    ()=>MotionH3,
    "MotionH4",
    ()=>MotionH4,
    "MotionHeader",
    ()=>MotionHeader,
    "MotionLi",
    ()=>MotionLi,
    "MotionMain",
    ()=>MotionMain,
    "MotionNav",
    ()=>MotionNav,
    "MotionP",
    ()=>MotionP,
    "MotionSection",
    ()=>MotionSection,
    "MotionSpan",
    ()=>MotionSpan,
    "MotionUl",
    ()=>MotionUl,
    "buttonMotion",
    ()=>buttonMotion,
    "cardMotion",
    ()=>cardMotion,
    "easings",
    ()=>easings,
    "fadeScale",
    ()=>fadeScale,
    "fadeUp",
    ()=>fadeUp,
    "fadeUpBlur",
    ()=>fadeUpBlur,
    "getMotionProps",
    ()=>getMotionProps,
    "getPresenceProps",
    ()=>getPresenceProps,
    "listItemMotion",
    ()=>listItemMotion,
    "modalEntrance",
    ()=>modalEntrance,
    "scaleUp",
    ()=>scaleUp,
    "sheetEntrance",
    ()=>sheetEntrance,
    "slideLeft",
    ()=>slideLeft,
    "slideRight",
    ()=>slideRight,
    "springs",
    ()=>springs,
    "staggerCascade",
    ()=>staggerCascade,
    "staggerContainer",
    ()=>staggerContainer,
    "staggerFast",
    ()=>staggerFast,
    "staggerMicro",
    ()=>staggerMicro,
    "staggerSlow",
    ()=>staggerSlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
"use client";
;
const springs = {
    /** Default for most interactions - smooth and professional */ smooth: {
        type: "spring",
        stiffness: 200,
        damping: 25
    },
    /** Quick feedback for buttons and small elements */ snappy: {
        type: "spring",
        stiffness: 400,
        damping: 35
    },
    /** Slow, elegant transitions for page/modal reveals */ gentle: {
        type: "spring",
        stiffness: 100,
        damping: 20
    },
    /** Very responsive, near-instant */ quick: {
        type: "spring",
        stiffness: 500,
        damping: 40
    }
};
const easings = {
    /** Smooth deceleration (ease-out) */ out: [
        0.22,
        1,
        0.36,
        1
    ],
    /** Smooth acceleration (ease-in) */ in: [
        0.4,
        0,
        1,
        1
    ],
    /** Smooth both (ease-in-out) */ inOut: [
        0.4,
        0,
        0.2,
        1
    ]
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: springs.smooth
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: {
            duration: 0.2
        }
    }
};
const fadeScale = {
    hidden: {
        opacity: 0,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: springs.smooth
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        transition: {
            duration: 0.15
        }
    }
};
const slideLeft = {
    hidden: {
        opacity: 0,
        x: -24
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: springs.smooth
    },
    exit: {
        opacity: 0,
        x: 24,
        transition: {
            duration: 0.15
        }
    }
};
const slideRight = {
    hidden: {
        opacity: 0,
        x: 24
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: springs.smooth
    },
    exit: {
        opacity: 0,
        x: -24,
        transition: {
            duration: 0.15
        }
    }
};
const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1
        }
    }
};
const staggerFast = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.05
        }
    }
};
const staggerSlow = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
const modalEntrance = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 10
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: springs.smooth
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        y: 5,
        transition: {
            duration: 0.15
        }
    }
};
const sheetEntrance = {
    hidden: {
        y: "100%",
        opacity: 0.8
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        y: "100%",
        opacity: 0.8,
        transition: {
            duration: 0.2
        }
    }
};
const fadeUpBlur = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: springs.smooth
    },
    exit: {
        opacity: 0,
        y: -15,
        filter: "blur(5px)",
        transition: {
            duration: 0.2
        }
    }
};
const scaleUp = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: springs.snappy
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.1
        }
    }
};
const staggerMicro = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.02,
            delayChildren: 0
        }
    }
};
const staggerCascade = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
            staggerDirection: 1
        }
    }
};
function getPresenceProps(variants, prefersReducedMotion) {
    if (prefersReducedMotion) {
        return {
            initial: false,
            animate: "visible",
            variants
        };
    }
    return {
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        variants
    };
}
const buttonMotion = {
    whileHover: {
        scale: 1.02
    },
    whileTap: {
        scale: 0.98
    },
    transition: springs.snappy
};
const cardMotion = {
    whileHover: {
        y: -4
    },
    transition: springs.smooth
};
const listItemMotion = {
    whileHover: {
        x: 4
    },
    transition: springs.snappy
};
function getMotionProps(props, prefersReducedMotion) {
    if (prefersReducedMotion) {
        return {};
    }
    return props;
}
const MotionDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div;
const MotionSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span;
const MotionSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].section;
const MotionNav = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].nav;
const MotionButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].button;
const MotionA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].a;
const MotionUl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].ul;
const MotionLi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].li;
const MotionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].header;
const MotionFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].footer;
const MotionArticle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].article;
const MotionAside = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].aside;
const MotionMain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].main;
const MotionP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].p;
const MotionH1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].h1;
const MotionH2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].h2;
const MotionH3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].h3;
const MotionH4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].h4;
;
}),
"[project]/apps/web/components/motion/motion-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionProvider",
    ()=>MotionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$motion$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/motion/index.tsx [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function MotionProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LazyMotion"], {
        features: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["domAnimation"],
        strict: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfig"], {
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$motion$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["springs"].smooth,
            reducedMotion: "user",
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/components/motion/motion-provider.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/motion/motion-provider.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e6fb8f38._.js.map