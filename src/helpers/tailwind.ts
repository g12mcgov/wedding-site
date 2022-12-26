import { theme } from "../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const tailwindConfig = resolveConfig(theme);

export function isMobile(): boolean {
  const breakpoints = getCurrentBreakpoints();
  return (
    breakpoints.length === 0 ||
    (breakpoints.length === 1 && breakpoints[0] === "sm")
  );
}

export function getCurrentBreakpoints(): Array<string> {
  const { theme } = tailwindConfig;
  return Object.keys(theme.screens).filter(
    (key) => window.innerWidth > parseInt(theme.screens[key].replace("px", ""))
  );
}
