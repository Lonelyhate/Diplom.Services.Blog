const Post = require("../model/Post");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class PostController {
  async addPost(req, res) {
    try {
      const { title, text } = req.body;
      const { image } = req.files;
      let content = [];

      for (let i = 0; i < text.length; i++) {
        let cont = {};
        cont.text = text[i];
        if (cont.text.indexOf(";;;paragimgnomer_") !== -1) {
          const imgFile = image[cont.text[cont.text.length - 1]];
          const imgName = uuid.v4() + ".jpg";
          imgFile.mv(path.resolve(__dirname, "..", "static", imgName));
          cont.image = imgName;
          cont.text = cont.text.substring(0, cont.text.indexOf(";;;"));
        }
        content.push(cont);
      }

      const post = await Post.create({ title, content });
      await post.save();

      const response = {};
      response.isSuccess = true;
      response.StatusCode = 201;
      response.data = post;
      return res.status(201).json(response);
    } catch (e) {
      console.log(e);
      const response = {};
      response.isSuccess = false;
      response.StatusCode = 500;
      response.DisplayMessage = "serverError";
      response.ErrorMessage = e;
      return res.status(500).json(e);
    }
  }

  async getPostAll(req, res) {
    try {
      const posts = await Post.find();
      const response = {};
      response.isSuccess = true;
      response.StatusCode = 200;
      response.data = posts;
      return res.json(response);
    } catch (e) {
      console.log(e);
      const response = {};
      response.isSuccess = false;
      response.StatusCode = 500;
      response.DisplayMessage = "serverError";
      response.ErrorMessage = e;
      return res.status(500).json(response);
    }
  }
}

module.exports = new PostController();
