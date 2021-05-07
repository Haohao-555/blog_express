const {exec, escape} = require('../db/mysql')
const xss = require('xss')

//获取博客列表
const getList = (author, keyword) => {
    let sql =`select * from blogs where 1=1 `
    if (author) {
        author = escape(author)
        sql += ` and author =${author} `
    }
    if (keyword) {
        keyword =escape(keyword)
        sql += ` and title like %${keyword}% `
    }
    sql += `order by createtime desc;`
    return exec(sql)
} 

//获取博客详细内容
const getDetail = (id) => {
    id = escape(id)
    let sql =`select content,title,author,id from blogs where id=${id}`
    return exec(sql)
}

//增加博客
const newBlog = (blogData = {}) => {
    const title = xss(escape(blogData.title))
    const content = xss(escape(blogData.content))
    const author = xss(escape(blogData.author))
    const createTime = Date.now()

    const sql = `insert into blogs (title, content, createtime, author)
    values (${title}, ${content}, ${createTime}, ${author})`

    return exec(sql).then(insertData => {
        return {
            id:insertData.insertData
        }
    })
}

//更新博客
const updateBlog = (id, blogData = {}) => {
    const content = xss(escape(blogData.content))
    const title = xss(escape(blogData.title))
    id = escape(id)
    let sql = `update blogs set title=${title}, content=${content} where id=${id}`
    return exec(sql).then(updateData => {
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}

//删除博客
const delBlog = (id, author) => {
     id = xss(escape(id))
     author = xss(escape(author))
     let sql = `delete from blogs where id=${id} and author=${author};`
     return exec(sql).then(delData => {
         if (delData.affectedRows > 0) {
             return true
         }
         return false
     })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}