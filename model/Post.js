const {Schema, model} = require("mongoose")

const Post = new Schema({
    title: {type: String, required: true},
    //content: [{type: Schema.Types.ObjectId, ref: "PostContent"}],
    content: [
        {
            text: {type: String, required: true},
            image: {type: String},
        }
    ],
    dateCreation: {type: Date, default: new Date()}
})

module.exports = model('Post', Post);