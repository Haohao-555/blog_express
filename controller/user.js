const {exec,escape} = require('../db/mysql')
const xss = require('xss')
const login = (username,password) => {
  //先用假数据
  // if (username === 'zhangsan' && password === '123') {
  //     return true
  // }
  // return false
  //预防sql攻击
  username = xss(escape(username))
  password = xss(escape(password))
  let sql = `select username, realname from users where username=${username} and password=${password}`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
module.exports =login