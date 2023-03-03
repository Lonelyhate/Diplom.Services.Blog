const {Schema, model} = require("mongoose")

const PostContent = new Schema({
    text: {type: String, required: true},
    image: {type: String},
    post: {type: Schema.Types.ObjectId, ref: "Post"}
})

module.exports = model("PostContent", PostContent)