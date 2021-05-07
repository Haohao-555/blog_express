const { REDIS_CONF} =  require('../conf/db')
const redis = require('redis')

//创建 redis 连接客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

//错误处理
redisClient.on('error',err => {
    console.error(err)
})

module.exports = redisClient
