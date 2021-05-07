var express = require('express');
var router = express.Router();
const { getList,
   getDetail,
   newBlog,
   updateBlog,
   delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
//获取博客列表
router.get('/list', (req, res, next) => {
   const { author, keyword } = req.query

   //管理员界面
   if (req.query.isadmin) {
      if (req.session.username == null) {
         res.json(
            new ErrorModel('未登录')
         )
         return
      }
      //强制查询自己的博客
      author = req.session.username
   }



   const result = getList(author, keyword)
   return result.then(listData => {
      res.json(
         new SuccessModel(listData)
      )
   })
});

//获取博客详情
router.get('/detail', (req, res, next) => {
   const { id } = req.query
   const result = getDetail(id)
   return result.then(detail => {
      res.json(
         new SuccessModel(detail)
      )
   })
})

//删除博客
router.post('/del', loginCheck, (req, res, next) => {
   const { id } = req.query
   const author = req.session.username
   const result = delBlog(id, author)
   return result.then(val => {
      if (val) {
         res.json(
            new SuccessModel()
         )
         return
      } else {
         res.json(
            new ErrorModel('删除博客失败')
         )
      }
   })
})

//更新博客
router.post('/update', loginCheck, (req, res, next) => {
   const { id } = req.query
   const postData = req.body
   const result = updateBlog(id, postData)
   return result.then(val => {
      if (val) {
         res.json(
            new SuccessModel()
         )
         return
      } else {
         res.json(
            new ErrorModel('更新博客失败')
         )
      }
   })
})

//增加博客
router.post('/new', loginCheck, (req, res, next) => {
   req.body.author = req.session.username
   const result = newBlog(req.body)
   return result.then(id => {
         res.json(
            new SuccessModel()
         )
         return
   })
})

module.exports = router;