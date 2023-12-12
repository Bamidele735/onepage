import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'z4f5jbdl',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
})