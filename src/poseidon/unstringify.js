export default function unstringifyBigInts(o) {
    if (typeof o == "string" && /^[0-9]+$/.test(o)) {
        return BigInt(o);
    } else if (typeof o == "string" && /^0x[0-9a-fA-F]+$/.test(o)) {
        return BigInt(o);
    } else if (typeof o == 'string' && /^[a-zA-Z0-9+\/]+={0,2}$/.test(o)) {
        // base64
        const byteArray = Uint8Array.from(atob(o), c => c.charCodeAt(0))
        const hex = [...byteArray].map(x => x.toString(16).padStart(2, '0')).join('')
        return BigInt(`0x${hex}`)
    } else if (Array.isArray(o)) {
        return o.map(unstringifyBigInts);
    } else if (typeof o == "object") {
        if (o === null) return null;
        const res = {};
        const keys = Object.keys(o);
        keys.forEach((k) => {
            res[k] = unstringifyBigInts(o[k]);
        });
        return res;
    } else {
        return o;
    }
}
