const Router = require('express');
const router = new Router();
const postController = require("../Controllers/postController")

router.post("/create", postController.addPost)

module.exports = router;