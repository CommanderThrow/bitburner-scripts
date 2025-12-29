import { NS } from "@ns";

export async function main(ns:NS):Promise<void> {
    const args = ns.args;

    const script = args[0].toString();
    const targetServer = args[1].toString();
    const scriptArgs = args[2].toString();
    
    ns.tprint(`Attempting to deploy ${script} on ${targetServer}`)

    if (!ns.serverExists(targetServer)) {
        ns.tprint(`${targetServer} does not exist. Aborting script.`);
        return;
    }

    ns.tprint("Calculating threads...");
    const threads = Math.floor((ns.getServerMaxRam(targetServer) - ns.getServerUsedRam(targetServer)) / ns.getScriptRam(script));

    ns.tprint("Deploying...");
    ns.scp(script, targetServer, "home");
    
    ns.tprint(`Launching ${script} script on ${threads} threads at ${targetServer}`);

    await ns.sleep(ns.getWeakenTime(targetServer))
    ns.exec(script, targetServer, threads, scriptArgs);
}