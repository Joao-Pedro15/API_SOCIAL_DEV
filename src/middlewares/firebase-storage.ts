import * as admin from "firebase-admin";

import { serviceAccount } from '@/config/firebasekey'
import { NextFunction, Request, Response } from "express";

const BUCKET = process.env.BUCKET

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket()

export const uploadImage = (request: Request, response: Response, next: NextFunction) => {
  if(!request['file']) {
    console.log('caiu aquyi');
    return next()
    
  }
  const image = request['file']
  const nameFile = `${Date.now()}.${image.originalname.split(".").pop()}`
  const file = bucket.file(nameFile)
  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype
    }    
  })

  stream.on('error', (error) => console.error(error))
  stream.on('finish', async () => { 
    await file.makePublic()
    request['file'].firebaseUrl = `https://storage.googleapis.com/${BUCKET.replace('gs://', '')}/${nameFile}`
    next()
  })

  stream.end(image.buffer)
} 