import { initTRPC } from "@trpc/server";

const t = initTRPC.context<{
    username : string
}>().create()

/**
 * router utility.
 */
export const router = t.router
/**
 * publicProcedure utility.
 */
export const publicProcedure =t.procedure