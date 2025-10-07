// utils/interpolation.ts

/**
 * Linearly interpolates between two numbers based on progress.
 * @param from - starting value
 * @param to - ending value
 * @param progress - progress value between 0 and 1
 * @returns interpolated number
 */
export const interpolate = (from: number, to: number, progress: number): number => {
    const p = Math.max(0, Math.min(1, progress));
    return from + p * (to - from);
};

/**
 * Linearly interpolates between two hex colors based on progress.
 * @param from - starting color in hex format (e.g., '#ff0000')
 * @param to - ending color in hex format (e.g., '#00ff00')
 * @param progress - progress value between 0 and 1
 * @returns interpolated color in `rgb(r, g, b)` format
 */
export const interpolateColors = (from: string, to: string, progress: number): string => {
    const clamp = (p: number) => Math.max(0, Math.min(1, p));

    const hexToRgb = (hex: string): [number, number, number] => {
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
