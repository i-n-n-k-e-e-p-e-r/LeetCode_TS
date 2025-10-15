export function generateRandomArray(n: number, min = 0, max = 100): number[] {
    const out: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        out[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return out;
}

export function randomString(n: number, chars = 'abcdefghijklmnopqrstuvwxyz'): string {
    const out: string[] = new Array(n);
    const m = chars.length;
    for (let i = 0; i < n; i++) {
        out[i] = chars.charAt(Math.floor(Math.random() * m));
    }
    return out.join('');
}
