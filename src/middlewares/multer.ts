import multer from 'multer'

export const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
})