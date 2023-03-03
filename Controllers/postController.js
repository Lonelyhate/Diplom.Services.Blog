const Post = require("../model/Post");
const PostContent = require("../model/PostContent")

class PostController {
    async addPost(req, res) {
        try {
            const {title, content} = req.body;

            // const post = await Post.create({title, content})
            // await post.save();
            return res.json(content);
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: "serverError"})
        }
    }
}

module.exports = new PostController();