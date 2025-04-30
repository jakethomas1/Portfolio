export const interpolate = (from, to, progress) => from + Math.max(0, Math.min(1, progress)) * (to - from);

export const interpolateColors = (from, to, progress) => {
    const clamp = p => Math.max(0, Math.min(1, p));
    const hexToRgb = hex => {
        const n = parseInt(hex.replace('#', ''), 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    };
    const [r1, g1, b1] = hexToRgb(from);
    const [r2, g2, b2] = hexToRgb(to);
    const p = clamp(progress);
    const r = Math.round(r1 + (r2 - r1) * p);
    const g = Math.round(g1 + (g2 - g1) * p);
    const b = Math.round(b1 + (b2 - b1) * p);
    return `rgb(${r}, ${g}, ${b})`;
};
