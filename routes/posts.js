const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/', async (req, res, next) => {
  try {
    /* 請在此填寫答案 */
    // 取得來自 request body 的資料
    const data = req.body;

    // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
    if (data.content !== undefined) {
      const newPost = await Post.create({
        name: data.name,
        content: data.content,
        image: data.image,
      });
      res.status(200).json({
        status: 'success',
        data: newPost,
      });
    } else {
      res.status(400).json({
        status: 'false',
        message: '未填寫 content 欄位',
      });
    } //-> 未填寫 content 欄位 -> 回傳失敗回應
  } catch (error) {
    res.status(400).json({
      status: 'false',
      message: '欄位未填寫正確，或無此 todo ID',
    });
  }
});

module.exports = router;
