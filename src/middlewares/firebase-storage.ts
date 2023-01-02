import * as admin from "firebase-admin";

import serviceAccount from '@/config/firebase-key.json'
import { NextFunction, Request, Response } from "express";
const service = JSON.stringify(serviceAccount)

const BUCKET = "gs://social-dev-70b45.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(service)),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket()

export const uploadImage = (request: Request, response: Response, next: NextFunction) => {
  if(!request['file']) return next()
  const image = request['file']
  const nameFile = 'teste.jpg'
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