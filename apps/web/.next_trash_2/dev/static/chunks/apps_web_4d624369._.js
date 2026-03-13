(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function safeGetItem(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return localStorage.getItem(key);
    } catch  {
        // localStorage unavailable (private browsing, quota exceeded, etc.)
        return null;
    }
}
function safeSetItem(key, value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(key, value);
        return true;
    } catch  {
        // localStorage unavailable or quota exceeded
        return false;
    }
}
function withCurrentSearch(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const search = window.location.search;
    if (!search) return path;
    return path.includes("?") ? `${path}&${search.slice(1)}` : `${path}${search}`;
}
function safeRemoveItem(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.removeItem(key);
        return true;
    } catch  {
        return false;
    }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/userPreferences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return new URLSearchParams(window.location.search).get(key);
    } catch  {
        return null;
    }
}
function setQueryParam(key, value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const url = new URL(window.location.href);
        if (value === null || value === "") {
            url.searchParams.delete(key);
        } else {
            url.searchParams.set(key, value);
        }
        window.history.replaceState(window.history.state, "", url.toString());
        return true;
    } catch  {
        return false;
    }
}
function emitUserPreferencesUpdate() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new Event(USER_PREFERENCES_EVENT));
}
function subscribeToUserPreferencesUpdates(onChange) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.addEventListener(USER_PREFERENCES_EVENT, onChange);
    window.addEventListener("storage", onChange);
    window.addEventListener("popstate", onChange);
    return ()=>{
        window.removeEventListener(USER_PREFERENCES_EVENT, onChange);
        window.removeEventListener("storage", onChange);
        window.removeEventListener("popstate", onChange);
    };
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
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(OS_KEY);
    if (stored === "mac" || stored === "windows" || stored === "linux") {
        return stored;
    }
    return null;
}
function setUserOS(os) {
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(OS_KEY, os);
    const urlOk = setQueryParam(OS_QUERY_KEY, os);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function detectOS() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const ua = navigator.userAgent.toLowerCase();
    // If the user is on a phone/tablet, we can't reliably infer the OS of the
    // computer they'll use for the terminal/VPS steps. Force an explicit choice.
    if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod") || ua.includes("android")) {
        return null;
    }
    if (ua.includes("win")) return "windows";
    // Detect Linux before Mac to avoid false positives
    if (ua.includes("linux") && !ua.includes("android")) return "linux";
    // Avoid mis-detecting iOS user agents that contain "like Mac OS X".
    if (ua.includes("mac") && !ua.includes("like mac os x")) return "mac";
    return null;
}
function getVPSIP() {
    const fromQuery = getQueryParam(VPS_IP_QUERY_KEY);
    if (fromQuery && isValidIP(fromQuery)) {
        return fromQuery.trim();
    }
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(VPS_IP_KEY);
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
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(VPS_IP_KEY, normalized);
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
    _s();
    const [userOSState, setUserOSState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        os: null,
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserOS.useEffect": ()=>{
            const syncState = {
                "useUserOS.useEffect.syncState": ()=>{
                    setUserOSState({
                        os: getUserOS(),
                        loaded: true
                    });
                }
            }["useUserOS.useEffect.syncState"];
            syncState();
            return subscribeToUserPreferencesUpdates(syncState);
        }
    }["useUserOS.useEffect"], []);
    const setOS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserOS.useCallback[setOS]": (newOS)=>{
            if (setUserOS(newOS)) {
                setUserOSState({
                    os: getUserOS(),
                    loaded: true
                });
            }
        }
    }["useUserOS.useCallback[setOS]"], []);
    return [
        userOSState.os,
        setOS,
        userOSState.loaded
    ];
}
_s(useUserOS, "WSVXDv2Abuyv7L+dKryRoCRj0rk=");
function useVPSIP() {
    _s1();
    const [vpsIPState, setVpsIPState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ip: null,
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVPSIP.useEffect": ()=>{
            const syncState = {
                "useVPSIP.useEffect.syncState": ()=>{
                    setVpsIPState({
                        ip: getVPSIP(),
                        loaded: true
                    });
                }
            }["useVPSIP.useEffect.syncState"];
            syncState();
            return subscribeToUserPreferencesUpdates(syncState);
        }
    }["useVPSIP.useEffect"], []);
    const setIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVPSIP.useCallback[setIP]": (newIP)=>{
            const normalized = newIP.trim();
            if (setVPSIP(normalized)) {
                setVpsIPState({
                    ip: normalized,
                    loaded: true
                });
            }
        }
    }["useVPSIP.useCallback[setIP]"], []);
    return [
        vpsIPState.ip,
        setIP,
        vpsIPState.loaded
    ];
}
_s1(useVPSIP, "FfCo8CGN146ilpzrPCHVRDgOX7Y=");
function useDetectedOS() {
    _s2();
    const { data: detectedOS } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: userPreferencesKeys.detectedOS,
        queryFn: detectOS,
        staleTime: Infinity,
        gcTime: Infinity
    });
    return detectedOS ?? null;
}
_s2(useDetectedOS, "3gITLexIKKOPFX/1zJpmW8HJc2w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMounted() {
    _s3();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration detection
            setMounted(true);
        }
    }["useMounted.useEffect"], []);
    return mounted;
}
_s3(useMounted, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
function getInstallMode() {
    const fromQuery = getQueryParam(INSTALL_MODE_QUERY_KEY);
    if (fromQuery === "vibe" || fromQuery === "safe") return fromQuery;
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(INSTALL_MODE_KEY);
    if (stored === "vibe" || stored === "safe") return stored;
    return "vibe";
}
function setInstallMode(mode) {
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(INSTALL_MODE_KEY, mode);
    const urlOk = setQueryParam(INSTALL_MODE_QUERY_KEY, mode);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function useInstallMode() {
    _s4();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mode: "vibe",
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInstallMode.useEffect": ()=>{
            const syncState = {
                "useInstallMode.useEffect.syncState": ()=>{
                    setState({
                        mode: getInstallMode(),
                        loaded: true
                    });
                }
            }["useInstallMode.useEffect.syncState"];
            syncState();
            return subscribeToUserPreferencesUpdates(syncState);
        }
    }["useInstallMode.useEffect"], []);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInstallMode.useCallback[setMode]": (newMode)=>{
            if (setInstallMode(newMode)) {
                setState({
                    mode: getInstallMode(),
                    loaded: true
                });
            }
        }
    }["useInstallMode.useCallback[setMode]"], []);
    return [
        state.mode,
        setMode,
        state.loaded
    ];
}
_s4(useInstallMode, "erdWq1+8D5q6CA/khDCa2SQLjmc=");
function getSSHUsername() {
    const fromQuery = getQueryParam(SSH_USERNAME_QUERY_KEY);
    if (fromQuery && /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(fromQuery)) return fromQuery;
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(SSH_USERNAME_KEY);
    if (stored && /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(stored)) return stored;
    return "ubuntu";
}
function setSSHUsername(username) {
    const trimmed = username.trim();
    if (!trimmed || !/^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(trimmed)) return false;
    const storedOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(SSH_USERNAME_KEY, trimmed);
    const urlOk = setQueryParam(SSH_USERNAME_QUERY_KEY, trimmed === "ubuntu" ? null : trimmed);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function useSSHUsername() {
    _s5();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "ubuntu",
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSSHUsername.useEffect": ()=>{
            const syncState = {
                "useSSHUsername.useEffect.syncState": ()=>{
                    setState({
                        username: getSSHUsername(),
                        loaded: true
                    });
                }
            }["useSSHUsername.useEffect.syncState"];
            syncState();
            return subscribeToUserPreferencesUpdates(syncState);
        }
    }["useSSHUsername.useEffect"], []);
    const setUsername = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSSHUsername.useCallback[setUsername]": (newUsername)=>{
            if (setSSHUsername(newUsername)) {
                setState({
                    username: getSSHUsername(),
                    loaded: true
                });
            }
        }
    }["useSSHUsername.useCallback[setUsername]"], []);
    return [
        state.username,
        setUsername,
        state.loaded
    ];
}
_s5(useSSHUsername, "ysxQBIaX0/uv+pzdJhubQ1ud8Pc=");
function getACFSRef() {
    const fromQuery = normalizeGitRef(getQueryParam(ACFS_REF_QUERY_KEY));
    if (fromQuery) return fromQuery;
    return normalizeGitRef((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(ACFS_REF_KEY));
}
function setACFSRef(ref) {
    const value = normalizeGitRef(ref);
    const storedOk = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(ACFS_REF_KEY, value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(ACFS_REF_KEY, "");
    const urlOk = setQueryParam(ACFS_REF_QUERY_KEY, value);
    if (storedOk || urlOk) {
        emitUserPreferencesUpdate();
    }
    return storedOk || urlOk;
}
function useACFSRef() {
    _s6();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ref: null,
        loaded: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useACFSRef.useEffect": ()=>{
            const syncState = {
                "useACFSRef.useEffect.syncState": ()=>{
                    setState({
                        ref: getACFSRef(),
                        loaded: true
                    });
                }
            }["useACFSRef.useEffect.syncState"];
            syncState();
            return subscribeToUserPreferencesUpdates(syncState);
        }
    }["useACFSRef.useEffect"], []);
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useACFSRef.useCallback[setRef]": (newRef)=>{
            if (setACFSRef(newRef)) {
                setState({
                    ref: getACFSRef(),
                    loaded: true
                });
            }
        }
    }["useACFSRef.useCallback[setRef]"], []);
    return [
        state.ref,
        setRef,
        state.loaded
    ];
}
_s6(useACFSRef, "fyzWN9VPP+7IjB9kujrIgbrfq5k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/wizardSteps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/userPreferences.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// --- Step validation functions ---
function validateOSSelection() {
    // Try auto-detection as a last resort before failing
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOS"])()) {
        const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectOS"])();
        if (detected) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserOS"])(detected);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserOS"])() ? {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVPSIP"])() ? {
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(`${COMMAND_COMPLETION_KEY_PREFIX}${persistKey}`) === "true") {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new CustomEvent(COMPLETED_STEPS_CHANGED_EVENT, {
        detail: {
            steps
        }
    }));
}
function getCompletedSteps() {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetJSON"])(COMPLETED_STEPS_KEY);
    if (Array.isArray(parsed)) {
        return normalizeCompletedSteps(parsed);
    }
    return [];
}
function setCompletedSteps(steps) {
    const normalized = normalizeCompletedSteps(steps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(COMPLETED_STEPS_KEY, normalized);
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
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCompletedSteps.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const handleCompletedStepsChanged = {
                "useCompletedSteps.useEffect.handleCompletedStepsChanged": (event)=>{
                    const customEvent = event;
                    const nextSteps = customEvent.detail?.steps ?? getCompletedSteps();
                    queryClient.setQueryData(wizardStepsKeys.completedSteps, nextSteps);
                }
            }["useCompletedSteps.useEffect.handleCompletedStepsChanged"];
            const handleStorage = {
                "useCompletedSteps.useEffect.handleStorage": (event)=>{
                    if (event.key !== COMPLETED_STEPS_KEY) return;
                    queryClient.setQueryData(wizardStepsKeys.completedSteps, getCompletedSteps());
                }
            }["useCompletedSteps.useEffect.handleStorage"];
            window.addEventListener(COMPLETED_STEPS_CHANGED_EVENT, handleCompletedStepsChanged);
            window.addEventListener("storage", handleStorage);
            return ({
                "useCompletedSteps.useEffect": ()=>{
                    window.removeEventListener(COMPLETED_STEPS_CHANGED_EVENT, handleCompletedStepsChanged);
                    window.removeEventListener("storage", handleStorage);
                }
            })["useCompletedSteps.useEffect"];
        }
    }["useCompletedSteps.useEffect"], [
        queryClient
    ]);
    const { data: steps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: wizardStepsKeys.completedSteps,
        queryFn: getCompletedSteps,
        // The stepper lives in a persistent Next.js layout, so it won't remount
        // between steps. We keep this query in sync by listening for:
        // - `COMPLETED_STEPS_CHANGED_EVENT` (same-tab writes)
        // - `storage` events (cross-tab writes)
        staleTime: 0,
        gcTime: Infinity
    });
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCompletedSteps.useMutation[mutation]": async (stepId)=>{
                // Use query cache as source of truth to avoid race conditions when
                // markComplete is called rapidly multiple times. Falls back to
                // localStorage for initial hydration.
                const currentSteps = queryClient.getQueryData(wizardStepsKeys.completedSteps) ?? getCompletedSteps();
                const newSteps = addCompletedStep(currentSteps, stepId);
                setCompletedSteps(newSteps);
                return newSteps;
            }
        }["useCompletedSteps.useMutation[mutation]"],
        onMutate: {
            "useCompletedSteps.useMutation[mutation]": async (stepId)=>{
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
            }
        }["useCompletedSteps.useMutation[mutation]"],
        onError: {
            "useCompletedSteps.useMutation[mutation]": (_err, _stepId, context)=>{
                // Rollback to previous value on error
                if (context?.previousSteps !== undefined) {
                    queryClient.setQueryData(wizardStepsKeys.completedSteps, context.previousSteps);
                } else {
                    queryClient.invalidateQueries({
                        queryKey: wizardStepsKeys.completedSteps
                    });
                }
            }
        }["useCompletedSteps.useMutation[mutation]"],
        onSettled: {
            "useCompletedSteps.useMutation[mutation]": ()=>{
                // Refetch to ensure cache is in sync with localStorage
                queryClient.invalidateQueries({
                    queryKey: wizardStepsKeys.completedSteps
                });
            }
        }["useCompletedSteps.useMutation[mutation]"]
    });
    const { mutate } = mutation;
    const markComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCompletedSteps.useCallback[markComplete]": (stepId)=>{
            mutate(stepId);
        }
    }["useCompletedSteps.useCallback[markComplete]"], [
        mutate
    ]);
    return [
        steps ?? [],
        markComplete
    ];
}
_s(useCompletedSteps, "mQPr7KV5qtOWify5tFqrxi4ctUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function markStepComplete(stepId) {
    const completed = getCompletedSteps();
    const newSteps = addCompletedStep(completed, stepId);
    if (newSteps !== completed) {
        setCompletedSteps(newSteps);
    }
    return newSteps;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/query-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query@5.90.12+83d5fd7b249dbeef/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$2d$persist$2d$client$40$5$2e$90$2e$14$2b$4d327aa9bbe52471$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+react-query-persist-client@5.90.14+4d327aa9bbe52471/node_modules/@tanstack/react-query-persist-client/build/modern/PersistQueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$sync$2d$storage$2d$persister$40$5$2e$90$2e$14$2f$node_modules$2f40$tanstack$2f$query$2d$sync$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tanstack+query-sync-storage-persister@5.90.14/node_modules/@tanstack/query-sync-storage-persister/build/modern/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/wizardSteps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/userPreferences.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function makeQueryClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
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
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>makeQueryClient()
    }["QueryProvider.useState"]);
    const [persister, setPersister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Create persister only after mount to avoid hydration mismatch
    // Server and client both render QueryClientProvider initially,
    // then we upgrade to PersistQueryClientProvider on client after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QueryProvider.useEffect": ()=>{
            // Guard against localStorage being unavailable (private browsing, restrictions)
            try {
                // Test localStorage availability first
                const testKey = "__acfs_test__";
                window.localStorage.setItem(testKey, "test");
                window.localStorage.removeItem(testKey);
                const storagePersister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$query$2d$sync$2d$storage$2d$persister$40$5$2e$90$2e$14$2f$node_modules$2f40$tanstack$2f$query$2d$sync$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSyncStoragePersister"])({
                    storage: window.localStorage,
                    key: "acfs-query-cache"
                });
                // Defer state update to avoid setState-in-effect lint violations.
                let cancelled = false;
                Promise.resolve().then({
                    "QueryProvider.useEffect": ()=>{
                        if (!cancelled) setPersister(storagePersister);
                    }
                }["QueryProvider.useEffect"]);
                return ({
                    "QueryProvider.useEffect": ()=>{
                        cancelled = true;
                    }
                })["QueryProvider.useEffect"];
            } catch  {
                // localStorage unavailable (private browsing, quota exceeded, etc.)
                // Silently fall back to non-persisted state - app will still work
                console.warn("[ACFS] localStorage unavailable, running without query persistence");
            }
        }
    }["QueryProvider.useEffect"], []);
    // Always render PersistQueryClientProvider once we have a persister,
    // but start with QueryClientProvider for SSR/hydration consistency
    if (persister) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$2d$persist$2d$client$40$5$2e$90$2e$14$2b$4d327aa9bbe52471$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistQueryClientProvider"], {
            client: queryClient,
            persistOptions: {
                persister,
                dehydrateOptions: {
                    shouldDehydrateQuery: (query)=>{
                        const queryKey = query.queryKey;
                        // Exclude wizard steps (manually persisted to separate key)
                        if (queryKey[0] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wizardStepsKeys"].completedSteps[0] && queryKey[1] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wizardStepsKeys"].completedSteps[1]) {
                            return false;
                        }
                        // Exclude detected OS (fast, client-only, no need to persist)
                        if (queryKey[0] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPreferencesKeys"].detectedOS[0] && queryKey[1] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$userPreferences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPreferencesKeys"].detectedOS[1]) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/query-provider.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(QueryProvider, "HKvxNaDhnOgSE89F96/vLGt4YnU=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Agent Flywheel Analytics Library
 * Comprehensive GA4 instrumentation for deep user insights
 * Build timestamp: 2025-12-25T17:40:00Z
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/wizardSteps.ts [app-client] (ecmascript)");
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
const GA_MEASUREMENT_ID_RAW = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_MEASUREMENT_ID = sanitizeGaMeasurementId(GA_MEASUREMENT_ID_RAW);
_c = GA_MEASUREMENT_ID;
const isAnalyticsEnabled = ()=>{
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && !!GA_MEASUREMENT_ID && !!window.gtag;
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(GA_CLIENT_ID_STORAGE_KEY);
    const normalized = existing ? normalizeClientId(existing) : generateNumericClientId();
    if (!existing || normalized !== existing) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(GA_CLIENT_ID_STORAGE_KEY, normalized);
    }
    return normalized;
};
const sendServerEvent = async (eventName, params)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!GA_MEASUREMENT_ID) return;
    try {
        await fetch('/api/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: getClientId(),
                events: [
                    {
                        name: eventName,
                        params
                    }
                ]
            })
        });
    } catch  {
    // Silently fail - don't disrupt user experience
    }
};
const sendEvent = (eventName, parameters)=>{
    if (!isAnalyticsEnabled()) return;
    window.gtag('event', eventName, {
        ...parameters,
        timestamp: new Date().toISOString()
    });
};
const setUserProperties = (properties)=>{
    if (!isAnalyticsEnabled()) return;
    window.gtag('set', 'user_properties', properties);
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
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.performance) return;
    const timing = performance.getEntriesByType('navigation')[0];
    if (!timing) return;
    const safeTimingMetric = (value)=>{
        if (!Number.isFinite(value) || value < 0) return 0;
        return Math.round(value);
    };
    sendEvent('page_performance', {
        dns_lookup_ms: safeTimingMetric(timing.domainLookupEnd - timing.domainLookupStart),
        tcp_connect_ms: safeTimingMetric(timing.connectEnd - timing.connectStart),
        ttfb_ms: safeTimingMetric(timing.responseStart - timing.requestStart),
        dom_interactive_ms: safeTimingMetric(timing.domInteractive - timing.startTime),
        dom_complete_ms: safeTimingMetric(timing.domComplete - timing.startTime),
        load_complete_ms: safeTimingMetric(timing.loadEventEnd - timing.startTime)
    });
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer || '';
    let referrerDomain = '';
    try {
        if (referrer) {
            referrerDomain = new URL(referrer).hostname;
        }
    } catch  {
    // Invalid URL
    }
    // Determine source from UTM or referrer
    let source = params.get('utm_source') || '';
    let medium = params.get('utm_medium') || '';
    if (!source && referrer) {
        // Infer source from referrer
        if (referrerDomain.includes('google')) {
            source = 'google';
            medium = medium || 'organic';
        } else if (referrerDomain.includes('bing')) {
            source = 'bing';
            medium = medium || 'organic';
        } else if (referrerDomain.includes('twitter') || referrerDomain.includes('x.com') || referrerDomain.includes('t.co')) {
            source = 'twitter';
            medium = medium || 'social';
        } else if (referrerDomain.includes('linkedin')) {
            source = 'linkedin';
            medium = medium || 'social';
        } else if (referrerDomain.includes('facebook')) {
            source = 'facebook';
            medium = medium || 'social';
        } else if (referrerDomain.includes('reddit')) {
            source = 'reddit';
            medium = medium || 'social';
        } else if (referrerDomain.includes('github')) {
            source = 'github';
            medium = medium || 'referral';
        } else if (referrerDomain.includes('news.ycombinator') || referrerDomain.includes('hn.algolia')) {
            source = 'hackernews';
            medium = medium || 'social';
        } else if (referrerDomain) {
            source = referrerDomain;
            medium = medium || 'referral';
        }
    }
    return {
        utm_source: source || 'direct',
        utm_medium: medium || 'none',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        referrer,
        referrer_domain: referrerDomain,
        landing_page: window.location.pathname
    };
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const devicePixelRatio = window.devicePixelRatio || 1;
    const isTouchDevice = 'ontouchstart' in window;
    const acquisition = getAcquisitionData();
    // Check for first visit
    const isFirstVisit = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(FIRST_VISIT_KEY);
    const now = new Date().toISOString();
    if (isFirstVisit) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(FIRST_VISIT_KEY, now);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(FIRST_SOURCE_KEY, {
            source: acquisition.utm_source,
            medium: acquisition.utm_medium,
            campaign: acquisition.utm_campaign,
            landing_page: acquisition.landing_page,
            referrer: acquisition.referrer
        });
    }
    // Get first visit data for user properties
    const firstVisitDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(FIRST_VISIT_KEY) || now;
    const firstSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetJSON"])(FIRST_SOURCE_KEY);
    sendEvent('session_start_enhanced', {
        // Device info
        screen_width: screenWidth,
        screen_height: screenHeight,
        device_pixel_ratio: devicePixelRatio,
        is_touch_device: isTouchDevice,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        platform: detectPlatform(),
        // Acquisition data
        utm_source: acquisition.utm_source,
        utm_medium: acquisition.utm_medium,
        utm_campaign: acquisition.utm_campaign,
        utm_term: acquisition.utm_term,
        utm_content: acquisition.utm_content,
        referrer: acquisition.referrer,
        referrer_domain: acquisition.referrer_domain,
        landing_page: acquisition.landing_page,
        is_first_visit: isFirstVisit
    });
    // Check for returning user (use || 0 to handle NaN from corrupted storage)
    const visitCount = (parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_visit_count') || '0', 10) || 0) + 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])('acfs_visit_count', String(visitCount));
    // Set comprehensive user properties
    setUserProperties({
        // Visit tracking
        visit_count: visitCount,
        is_returning_user: visitCount > 1,
        // First visit attribution (persists across sessions)
        first_visit_date: firstVisitDate,
        first_traffic_source: firstSource?.source || acquisition.utm_source,
        first_traffic_medium: firstSource?.medium || acquisition.utm_medium,
        first_landing_page: firstSource?.landing_page || acquisition.landing_page,
        // Current session attribution
        latest_traffic_source: acquisition.utm_source,
        latest_traffic_medium: acquisition.utm_medium,
        // UTM parameters
        utm_source: acquisition.utm_source,
        utm_medium: acquisition.utm_medium,
        utm_campaign: acquisition.utm_campaign,
        utm_term: acquisition.utm_term,
        utm_content: acquisition.utm_content
    });
};
const getOrCreateUserId = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const storageKey = 'acfs_user_id';
    let userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])(storageKey);
    if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])(storageKey, userId);
        sendEvent('new_user_created', {
            user_id: userId
        });
    }
    return userId;
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetJSON"])(FUNNEL_STORAGE_KEY);
};
const initFunnel = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Parse UTM parameters
    const params = new URLSearchParams(window.location.search);
    const funnelData = {
        sessionId: `funnel_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
        startedAt: new Date().toISOString(),
        currentStep: 0,
        maxStepReached: 0,
        stepTimestamps: {},
        completedSteps: [],
        source: params.get('utm_source') || document.referrer || 'direct',
        medium: params.get('utm_medium') || 'none',
        campaign: params.get('utm_campaign') || 'none'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(FUNNEL_STORAGE_KEY, funnelData);
    // Track funnel initiation
    sendEvent('funnel_initiated', {
        funnel_id: funnelData.sessionId,
        source: funnelData.source,
        medium: funnelData.medium,
        campaign: funnelData.campaign,
        referrer: document.referrer
    });
    setUserProperties({
        funnel_source: funnelData.source,
        funnel_medium: funnelData.medium,
        funnel_campaign: funnelData.campaign
    });
    return funnelData;
};
const trackFunnelStepEnter = (stepNumber, stepName, stepTitle)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let funnelData = getFunnelData();
    if (!funnelData) {
        funnelData = initFunnel();
    }
    const now = new Date().toISOString();
    const previousStep = funnelData.currentStep;
    const isNewMaxStep = stepNumber > funnelData.maxStepReached;
    // Update funnel data
    funnelData.currentStep = stepNumber;
    funnelData.maxStepReached = Math.max(funnelData.maxStepReached, stepNumber);
    funnelData.stepTimestamps[stepNumber] = {
        ...funnelData.stepTimestamps[stepNumber],
        entered: now
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(FUNNEL_STORAGE_KEY, funnelData);
    // Calculate time from previous step
    let timeFromPreviousStep;
    if (previousStep > 0) {
        timeFromPreviousStep = getElapsedSecondsSince(funnelData.stepTimestamps[previousStep]?.entered);
    }
    // Track the funnel step entry
    sendEvent('funnel_step_enter', {
        funnel_id: funnelData.sessionId,
        step_number: stepNumber,
        step_name: stepName,
        step_title: stepTitle,
        previous_step: previousStep,
        is_new_max_step: isNewMaxStep,
        max_step_reached: funnelData.maxStepReached,
        time_from_previous_step_seconds: timeFromPreviousStep,
        total_steps: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"],
        progress_percentage: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] > 0 ? Math.round(stepNumber / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] * 100) : 0,
        is_returning: !isNewMaxStep && stepNumber <= funnelData.maxStepReached
    });
    // Track as conversion milestone for key steps
    if (stepNumber === 1) {
        sendEvent('funnel_milestone', {
            milestone: 'wizard_started',
            funnel_id: funnelData.sessionId
        });
    } else if (stepNumber === 4) {
        sendEvent('funnel_milestone', {
            milestone: 'vps_selection',
            funnel_id: funnelData.sessionId
        });
    } else if (stepNumber === 9) {
        sendEvent('funnel_milestone', {
            milestone: 'installer_step',
            funnel_id: funnelData.sessionId
        });
    } else if (stepNumber === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"]) {
        sendEvent('funnel_milestone', {
            milestone: 'final_step',
            funnel_id: funnelData.sessionId
        });
    }
};
const trackFunnelStepComplete = (stepNumber, stepName, additionalData)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const funnelData = getFunnelData();
    if (!funnelData) return;
    const now = new Date().toISOString();
    // Calculate time spent on step
    const timeOnStep = getElapsedSecondsSince(funnelData.stepTimestamps[stepNumber]?.entered);
    // Update funnel data
    if (!funnelData.completedSteps.includes(stepNumber)) {
        funnelData.completedSteps.push(stepNumber);
        funnelData.completedSteps.sort((a, b)=>a - b);
    }
    funnelData.stepTimestamps[stepNumber] = {
        ...funnelData.stepTimestamps[stepNumber],
        completed: now
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(FUNNEL_STORAGE_KEY, funnelData);
    // Track the completion
    sendEvent('funnel_step_complete', {
        funnel_id: funnelData.sessionId,
        step_number: stepNumber,
        step_name: stepName,
        time_on_step_seconds: timeOnStep,
        completed_steps_count: funnelData.completedSteps.length,
        total_steps: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"],
        completion_percentage: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] > 0 ? Math.round(funnelData.completedSteps.length / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] * 100) : 0,
        ...additionalData
    });
    // Track step-specific conversions (note: wizard_start is tracked on step 1 entry in useWizardAnalytics)
    if (stepNumber === 5) {
        trackConversion('vps_created', 10);
    } else if (stepNumber === 9) {
        trackConversion('installer_run', 50);
    } else if (stepNumber === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"]) {
        trackFunnelComplete();
    }
};
const trackFunnelComplete = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const funnelData = getFunnelData();
    if (!funnelData) return;
    const totalTimeSeconds = getElapsedSecondsSince(funnelData.startedAt) ?? 0;
    const totalTimeMinutes = Math.round(totalTimeSeconds / 60);
    sendEvent('funnel_complete', {
        funnel_id: funnelData.sessionId,
        total_time_seconds: totalTimeSeconds,
        total_time_minutes: totalTimeMinutes,
        completed_steps: funnelData.completedSteps.length,
        max_step_reached: funnelData.maxStepReached,
        source: funnelData.source,
        medium: funnelData.medium,
        campaign: funnelData.campaign
    });
    trackConversion('wizard_complete', 100);
    // Set user property for completed users
    setUserProperties({
        wizard_completed: true,
        wizard_completion_date: new Date().toISOString(),
        wizard_completion_time_minutes: totalTimeMinutes
    });
};
const trackFunnelDropoff = (reason)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const funnelData = getFunnelData();
    if (!funnelData || funnelData.completedSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"])) return;
    const totalTimeSeconds = getElapsedSecondsSince(funnelData.startedAt) ?? 0;
    // Calculate time on current step
    const timeOnCurrentStep = getElapsedSecondsSince(funnelData.stepTimestamps[funnelData.currentStep]?.entered);
    sendEvent('funnel_dropoff', {
        funnel_id: funnelData.sessionId,
        dropped_at_step: funnelData.currentStep,
        max_step_reached: funnelData.maxStepReached,
        completed_steps_count: funnelData.completedSteps.length,
        total_time_seconds: totalTimeSeconds,
        time_on_current_step_seconds: timeOnCurrentStep,
        dropoff_reason: reason || 'unknown',
        source: funnelData.source,
        medium: funnelData.medium
    });
};
const trackLandingCTA = (ctaType, ctaText)=>{
    sendEvent('landing_cta_click', {
        cta_type: ctaType,
        cta_text: ctaText,
        page_scroll_depth: ("TURBOPACK compile-time truthy", 1) ? (()=>{
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollableHeight <= 0) return 0;
            const depth = Math.round(window.scrollY / scrollableHeight * 100);
            return Math.max(0, Math.min(100, depth));
        })() : "TURBOPACK unreachable"
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetJSON"])(LESSON_FUNNEL_STORAGE_KEY);
};
const initLessonFunnel = (totalLessons)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Parse UTM parameters
    const params = new URLSearchParams(window.location.search);
    const funnelData = {
        sessionId: `lesson_funnel_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
        startedAt: new Date().toISOString(),
        currentLesson: 0,
        maxLessonReached: 0,
        lessonTimestamps: {},
        completedLessons: [],
        source: params.get('utm_source') || document.referrer || 'direct',
        medium: params.get('utm_medium') || 'none',
        campaign: params.get('utm_campaign') || 'none'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(LESSON_FUNNEL_STORAGE_KEY, funnelData);
    // Track lesson funnel initiation
    sendEvent('lesson_funnel_initiated', {
        funnel_id: funnelData.sessionId,
        source: funnelData.source,
        medium: funnelData.medium,
        campaign: funnelData.campaign,
        referrer: document.referrer,
        total_lessons: totalLessons
    });
    // Track as conversion
    trackConversion('learning_hub_started');
    setUserProperties({
        lesson_funnel_source: funnelData.source,
        lesson_funnel_medium: funnelData.medium
    });
    return funnelData;
};
const trackLessonEnter = (lessonId, lessonSlug, lessonTitle, totalLessons)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let funnelData = getLessonFunnelData();
    if (!funnelData) {
        funnelData = initLessonFunnel(totalLessons);
    }
    const now = new Date().toISOString();
    const previousLesson = funnelData.currentLesson;
    const isNewMaxLesson = lessonId > funnelData.maxLessonReached;
    // Update funnel data
    funnelData.currentLesson = lessonId;
    funnelData.maxLessonReached = Math.max(funnelData.maxLessonReached, lessonId);
    funnelData.lessonTimestamps[lessonId] = {
        ...funnelData.lessonTimestamps[lessonId],
        entered: now
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(LESSON_FUNNEL_STORAGE_KEY, funnelData);
    // Calculate time from previous lesson (only if visiting a different lesson)
    let timeFromPreviousLesson;
    if (previousLesson >= 0 && previousLesson !== lessonId && funnelData.lessonTimestamps[previousLesson]?.entered) {
        const prevTime = new Date(funnelData.lessonTimestamps[previousLesson].entered).getTime();
        timeFromPreviousLesson = Math.round((Date.now() - prevTime) / 1000);
    }
    // Track the lesson entry
    sendEvent('lesson_view', {
        funnel_id: funnelData.sessionId,
        lesson_id: lessonId,
        lesson_slug: lessonSlug,
        lesson_title: lessonTitle,
        previous_lesson: previousLesson,
        is_new_max_lesson: isNewMaxLesson,
        max_lesson_reached: funnelData.maxLessonReached,
        time_from_previous_lesson_seconds: timeFromPreviousLesson,
        total_lessons: totalLessons,
        progress_percentage: Math.round((lessonId + 1) / totalLessons * 100),
        is_returning: !isNewMaxLesson && lessonId <= funnelData.maxLessonReached,
        source: funnelData.source,
        medium: funnelData.medium,
        campaign: funnelData.campaign
    });
    // Track milestones
    if (lessonId === 0) {
        sendEvent('lesson_milestone', {
            milestone: 'learning_started',
            funnel_id: funnelData.sessionId
        });
    } else if (lessonId === Math.floor(totalLessons / 2)) {
        sendEvent('lesson_milestone', {
            milestone: 'halfway_point',
            funnel_id: funnelData.sessionId
        });
    } else if (lessonId === totalLessons - 1) {
        sendEvent('lesson_milestone', {
            milestone: 'final_lesson',
            funnel_id: funnelData.sessionId
        });
    }
};
const trackLessonComplete = (lessonId, lessonSlug, lessonTitle, totalLessons, additionalData)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const funnelData = getLessonFunnelData();
    if (!funnelData) return;
    const now = new Date().toISOString();
    // Calculate time spent on lesson
    let timeOnLesson;
    if (funnelData.lessonTimestamps[lessonId]?.entered) {
        const enterTime = new Date(funnelData.lessonTimestamps[lessonId].entered).getTime();
        timeOnLesson = Math.round((Date.now() - enterTime) / 1000);
    }
    // Update funnel data
    if (!funnelData.completedLessons.includes(lessonId)) {
        funnelData.completedLessons.push(lessonId);
        funnelData.completedLessons.sort((a, b)=>a - b);
    }
    funnelData.lessonTimestamps[lessonId] = {
        ...funnelData.lessonTimestamps[lessonId],
        completed: now
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetJSON"])(LESSON_FUNNEL_STORAGE_KEY, funnelData);
    // Track the completion
    sendEvent('lesson_complete', {
        funnel_id: funnelData.sessionId,
        lesson_id: lessonId,
        lesson_slug: lessonSlug,
        lesson_title: lessonTitle,
        time_on_lesson_seconds: timeOnLesson,
        completed_lessons_count: funnelData.completedLessons.length,
        total_lessons: totalLessons,
        completion_percentage: Math.round(funnelData.completedLessons.length / totalLessons * 100),
        source: funnelData.source,
        medium: funnelData.medium,
        ...additionalData
    });
    // Also send server-side for reliability
    sendServerEvent('lesson_complete', {
        lesson_id: lessonId,
        lesson_slug: lessonSlug,
        completion_percentage: Math.round(funnelData.completedLessons.length / totalLessons * 100)
    });
    // Check for full completion
    if (funnelData.completedLessons.length === totalLessons) {
        trackLessonFunnelComplete(totalLessons);
    }
};
const trackLessonFunnelComplete = (totalLessons)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const funnelData = getLessonFunnelData();
    if (!funnelData) return;
    const startTime = new Date(funnelData.startedAt).getTime();
    const totalTimeSeconds = Math.round((Date.now() - startTime) / 1000);
    sendEvent('lesson_funnel_complete', {
        funnel_id: funnelData.sessionId,
        total_time_seconds: totalTimeSeconds,
        total_time_minutes: Math.round(totalTimeSeconds / 60),
        total_lessons: totalLessons,
        lessons_completed: funnelData.completedLessons.length,
        source: funnelData.source,
        medium: funnelData.medium
    });
    // Track as major conversion with value
    trackConversion('lesson_funnel_complete', 100);
    // Also send server-side for reliability
    sendServerEvent('lesson_funnel_complete', {
        total_time_minutes: Math.round(totalTimeSeconds / 60),
        total_lessons: totalLessons
    });
};
const trackLessonDropoff = (reason)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const funnelData = getLessonFunnelData();
    if (!funnelData) return;
    const startTime = new Date(funnelData.startedAt).getTime();
    const totalTimeSeconds = Math.round((Date.now() - startTime) / 1000);
    sendEvent('lesson_funnel_dropoff', {
        funnel_id: funnelData.sessionId,
        dropped_at_lesson: funnelData.currentLesson,
        max_lesson_reached: funnelData.maxLessonReached,
        completed_lessons: funnelData.completedLessons.length,
        time_in_funnel_seconds: totalTimeSeconds,
        dropoff_reason: reason || 'unknown',
        source: funnelData.source,
        medium: funnelData.medium
    });
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
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !GA_MEASUREMENT_ID) return;
    // GA4 debug mode
    if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            debug_mode: true
        });
    }
    console.log('[Analytics] Debug mode enabled');
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
        completionRate: Math.round(funnelData.completedSteps.length / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$wizardSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] * 100)
    };
};
var _c;
__turbopack_context__.k.register(_c, "GA_MEASUREMENT_ID");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/analytics-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsProvider",
    ()=>AnalyticsProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * Inner component that uses useSearchParams - isolated in its own Suspense boundary
 * to prevent SSR bailout for the entire app
 */ function AnalyticsTracker() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const gaId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GA_MEASUREMENT_ID"]?.trim();
    const scrollDepthsReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const pageStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasInitializedGa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize GA stub early (no inline script injection)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!gaId) return;
            window.dataLayer = window.dataLayer || [];
            if (!window.gtag) {
                window.gtag = ({
                    "AnalyticsTracker.useEffect": (...args)=>{
                        window.dataLayer.push(args);
                    }
                })["AnalyticsTracker.useEffect"];
            }
            if (!hasInitializedGa.current) {
                window.gtag('js', new Date());
                hasInitializedGa.current = true;
            }
        }
    }["AnalyticsTracker.useEffect"], [
        gaId
    ]);
    // Track page views on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPagePerformance"])();
            } else {
                window.addEventListener('load', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPagePerformance"], {
                    once: true
                });
            }
            return ({
                "AnalyticsTracker.useEffect": ()=>{
                    window.removeEventListener('load', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPagePerformance"]);
                }
            })["AnalyticsTracker.useEffect"];
        }
    }["AnalyticsTracker.useEffect"], [
        pathname,
        searchParams,
        gaId
    ]);
    // Initialize session tracking on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!gaId) return;
            // Get or create user ID
            const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrCreateUserId"])();
            // Set user ID for cross-session tracking
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserProperties"])({
                user_id: userId,
                first_visit_date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_first_visit') || new Date().toISOString()
            });
            // Store first visit date
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_first_visit')) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])('acfs_first_visit', new Date().toISOString());
            }
            // Track enhanced session start
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSessionStart"])();
            // Track returning vs new user (use || 0 to handle NaN from corrupted storage)
            const visitCount = (parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeGetItem"])('acfs_visit_count') || '0', 10) || 0) + 1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetItem"])('acfs_visit_count', visitCount.toString());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserProperties"])({
                visit_count: visitCount,
                is_returning_user: visitCount > 1
            });
        }
    }["AnalyticsTracker.useEffect"], [
        gaId
    ]);
    // Scroll depth tracking
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnalyticsTracker.useCallback[handleScroll]": ()=>{
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackScrollDepth"])(milestone, pathname);
                }
            }
        }
    }["AnalyticsTracker.useCallback[handleScroll]"], [
        pathname,
        gaId
    ]);
    // Set up scroll tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!gaId) return;
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "AnalyticsTracker.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["AnalyticsTracker.useEffect"];
        }
    }["AnalyticsTracker.useEffect"], [
        handleScroll,
        gaId
    ]);
    // Time on page tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!gaId) return;
            const timeCheckpoints = [
                30,
                60,
                120,
                300,
                600
            ]; // seconds
            let lastCheckpoint = 0;
            timeIntervalRef.current = setInterval({
                "AnalyticsTracker.useEffect": ()=>{
                    const elapsed = Math.floor((Date.now() - pageStartTime.current) / 1000);
                    for (const checkpoint of timeCheckpoints){
                        if (elapsed >= checkpoint && lastCheckpoint < checkpoint) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackTimeOnPage"])(checkpoint, pathname);
                            lastCheckpoint = checkpoint;
                        }
                    }
                }
            }["AnalyticsTracker.useEffect"], 5000); // Check every 5 seconds
            return ({
                "AnalyticsTracker.useEffect": ()=>{
                    if (timeIntervalRef.current) {
                        clearInterval(timeIntervalRef.current);
                    }
                }
            })["AnalyticsTracker.useEffect"];
        }
    }["AnalyticsTracker.useEffect"], [
        pathname,
        gaId
    ]);
    // Track visibility changes (tab switching)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!gaId) return;
            const handleVisibilityChange = {
                "AnalyticsTracker.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        const timeSpent = Math.floor((Date.now() - pageStartTime.current) / 1000);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendEvent"])('page_hidden', {
                            page_path: pathname,
                            time_spent_seconds: timeSpent
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendEvent"])('page_visible', {
                            page_path: pathname
                        });
                    }
                }
            }["AnalyticsTracker.useEffect.handleVisibilityChange"];
            document.addEventListener('visibilitychange', handleVisibilityChange);
            return ({
                "AnalyticsTracker.useEffect": ()=>document.removeEventListener('visibilitychange', handleVisibilityChange)
            })["AnalyticsTracker.useEffect"];
        }
    }["AnalyticsTracker.useEffect"], [
        pathname,
        gaId
    ]);
    // Track page exit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTracker.useEffect": ()=>{
            if (!gaId) return;
            const handleBeforeUnload = {
                "AnalyticsTracker.useEffect.handleBeforeUnload": ()=>{
                    const timeSpent = Math.floor((Date.now() - pageStartTime.current) / 1000);
                    // Use GA4 gtag with beacon transport (Measurement Protocol api_secret cannot
                    // be safely used client-side).
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendEvent"])('page_exit', {
                        page_path: pathname,
                        time_spent_seconds: timeSpent,
                        scroll_depths_reached: Array.from(scrollDepthsReached.current),
                        transport_type: 'beacon'
                    });
                }
            }["AnalyticsTracker.useEffect.handleBeforeUnload"];
            window.addEventListener('beforeunload', handleBeforeUnload);
            return ({
                "AnalyticsTracker.useEffect": ()=>window.removeEventListener('beforeunload', handleBeforeUnload)
            })["AnalyticsTracker.useEffect"];
        }
    }["AnalyticsTracker.useEffect"], [
        pathname,
        gaId
    ]);
    return null; // This component only tracks, doesn't render anything
}
_s(AnalyticsTracker, "66UjKejQsP+9qSI4RBX9GvQ/4fQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AnalyticsTracker;
function AnalyticsProvider({ children }) {
    const gaId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GA_MEASUREMENT_ID"]?.trim();
    if (!gaId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const gaExternalScriptProps = {
        src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`,
        strategy: 'afterInteractive'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...gaExternalScriptProps
            }, void 0, false, {
                fileName: "[project]/apps/web/components/analytics-provider.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsTracker, {}, void 0, false, {
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
_c1 = AnalyticsProvider;
const __TURBOPACK__default__export__ = AnalyticsProvider;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnalyticsTracker");
__turbopack_context__.k.register(_c1, "AnalyticsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/third-party-scripts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThirdPartyScripts",
    ()=>ThirdPartyScripts,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$analytics$40$1$2e$6$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@vercel+analytics@1.6.1+6ad186dffa08410d/node_modules/@vercel/analytics/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$speed$2d$insights$40$1$2e$3$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@vercel+speed-insights@1.3.1+6ad186dffa08410d/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Environment variables for third-party services
// Note: GA4 is handled by AnalyticsProvider to avoid duplicate scripts
const GTM_ID_RAW = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GTM_ID;
const CLARITY_PROJECT_ID_RAW = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
function isValidGtmId(value) {
    return typeof value === 'string' && /^GTM-[A-Z0-9]+$/.test(value);
}
function isValidClarityProjectId(value) {
    return typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value);
}
const GTM_ID = isValidGtmId(GTM_ID_RAW) ? GTM_ID_RAW : undefined;
const CLARITY_PROJECT_ID = isValidClarityProjectId(CLARITY_PROJECT_ID_RAW) ? CLARITY_PROJECT_ID_RAW : undefined;
// Only enable Vercel Analytics when explicitly configured (requires Vercel project config)
const ENABLE_VERCEL_ANALYTICS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === 'true';
// Only enable Speed Insights when explicitly configured (requires Vercel Pro)
const ENABLE_SPEED_INSIGHTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS === 'true';
function ThirdPartyScripts() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Track virtual pageviews for GTM on SPA navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThirdPartyScripts.useEffect": ()=>{
            if (!GTM_ID) return;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'virtual_pageview',
                page_path: pathname,
                page_title: document.title
            });
        }
    }["ThirdPartyScripts.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            GTM_ID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            CLARITY_PROJECT_ID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            ENABLE_VERCEL_ANALYTICS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$analytics$40$1$2e$6$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"], {}, void 0, false, {
                fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                lineNumber: 85,
                columnNumber: 35
            }, this),
            ENABLE_SPEED_INSIGHTS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$vercel$2b$speed$2d$insights$40$1$2e$3$2e$1$2b$6ad186dffa08410d$2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpeedInsights"], {}, void 0, false, {
                fileName: "[project]/apps/web/components/third-party-scripts.tsx",
                lineNumber: 88,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true);
}
_s(ThirdPartyScripts, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ThirdPartyScripts;
const __TURBOPACK__default__export__ = ThirdPartyScripts;
var _c;
__turbopack_context__.k.register(_c, "ThirdPartyScripts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/motion/index.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
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
const MotionDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div;
const MotionSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span;
const MotionSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].section;
const MotionNav = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].nav;
const MotionButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].button;
const MotionA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].a;
const MotionUl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].ul;
const MotionLi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].li;
const MotionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].header;
const MotionFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].footer;
const MotionArticle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].article;
const MotionAside = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].aside;
const MotionMain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].main;
const MotionP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].p;
const MotionH1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].h1;
const MotionH2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].h2;
const MotionH3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].h3;
const MotionH4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].h4;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/motion/motion-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionProvider",
    ()=>MotionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.4+bed583e097fb7228/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.23.26+67f6792bdf102c28/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$motion$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/motion/index.tsx [app-client] (ecmascript) <locals>");
"use client";
;
;
;
function MotionProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
        features: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domAnimation"],
        strict: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$4$2b$bed583e097fb7228$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$23$2e$26$2b$67f6792bdf102c28$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$motion$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["springs"].smooth,
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
_c = MotionProvider;
var _c;
__turbopack_context__.k.register(_c, "MotionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_4d624369._.js.map