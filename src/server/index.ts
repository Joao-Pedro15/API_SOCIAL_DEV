import server from '@/app'
const PORT = 3344 || process.env.PORT

server.listen(PORT, `Server runnning on port ${PORT}`)
