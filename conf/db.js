const env = process.env.NODE_ENV //获取环境参数  package.json dev

let MYSQL_CONF //mysql
let REDIS_CONF //redis
//配置
if (env === "dev") {
    MYSQL_CONF = {
        host:'localhost',//本地地址
        user:'root',//用户名
        password:'123123',//密码
        port:3306,//端口号
        database:'node_blog'//数据库名称
    }
    REDIS_CONF = {
      REDIS_CONFport:6379,
      host:'127.0.0.1'
    }
}
if (env === "production") {
    MYSQL_CONF ={
        host:'localhost',//本地地址
        user:'root',//用户名
        password:'123123',//密码
        port:3306,//端口号
        database:'node_blog'//数据库名称
    }
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
      }
}
module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}