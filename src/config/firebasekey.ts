import { ServiceAccount } from "firebase-admin"


export const serviceAccount: ServiceAccount = {
  clientEmail: process.env.clientEmail,
  privateKey: process.env.privateKey,
  projectId: process.env.projectId  
}
