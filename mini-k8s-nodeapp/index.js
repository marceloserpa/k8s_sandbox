
const redis = require("redis");


const redishost = process.env.REDIS_HOST

//redis[s]://[[username][:password]@][host][:port][/db-number]
const redisUrl = 'redis://@'+redishost

console.log(`creating connection with ${redisUrl}`)
const redisClient = redis.createClient({
  url: redisUrl
});


redisClient.connect()

const express = require('express')
const app = express()
const port = 3000

app.get('/leaderboard/games/:gameId/users/:userId/score/:score', async (req, res) => {

  const gameId = req.params.gameId
  const userId = req.params.userId
  const score = req.params.score

  const key = `game:${gameId}`
  const member = `user:${userId}`

  await redisClient.zIncrBy(key, score, userId, member)


  res.send('Game ' + gameId + ' user ' + userId + ' score ' + score)
})

app.get('/leaderboard/games/:gameId', async (req, res) => {
  const gameId = req.params.gameId
  const key = `game:${gameId}`
  const scoresRedis = await redisClient.sendCommand(['zrevrange', key, '0', '-1', 'withscores']);


  res.send(scoresRedis)
})

app.listen(port, () => {
  console.log(`Example app listening at ... http://localhost:${port}`)
})
