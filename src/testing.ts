import { NS } from "@ns"

export async function main(ns:NS) {
    const fullArgs = ns.args;
    console.log('All arguments:', fullArgs);
    ns.tprint(fullArgs[0])
}