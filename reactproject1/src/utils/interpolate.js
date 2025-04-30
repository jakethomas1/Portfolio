export const interpolate = (from, to, progress) => from + Math.max(0, Math.min(1, progress)) * (to - from);
