const Router = require('express');
const router = new Router();
const postRouter = require("./postRouter")

router.use("/blog", postRouter);

module.exports = router;