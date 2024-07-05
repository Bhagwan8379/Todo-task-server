const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    percentage: { type: Number, required: true },
})
module.exports = mongoose.model("todo", TodoSchema)