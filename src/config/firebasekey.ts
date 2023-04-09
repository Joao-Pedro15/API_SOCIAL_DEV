import { ServiceAccount } from "firebase-admin"


export const serviceAccount: ServiceAccount = {
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
}
