import { NS } from "@ns";

export async function main(ns:NS):Promise<void> {
    var ram = 8;
    var i = 0;

    while (i < ns.getPurchasedServerLimit()) {
        await ns.sleep(1000); 
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            ns.purchaseServer("Throw", ram);
            i++;
        }
    }
}