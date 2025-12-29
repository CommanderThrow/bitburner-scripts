import { NS } from "@ns";

export async function main(ns:NS):Promise<void> {
    const targetServer = ns.args[0].toString();
    while (true) {
        while (ns.getServerSecurityLevel(targetServer) != 1) {
            await ns.weaken(targetServer)
        }
        
        while (ns.getServerMoneyAvailable(targetServer) < ns.getServerMaxMoney(targetServer)) {
            await ns.grow(targetServer)
            await ns.weaken(targetServer)
        }

        await ns.hack(targetServer);
        await ns.weaken(targetServer);
        await ns.grow(targetServer);
        await ns.weaken(targetServer);
    }
}