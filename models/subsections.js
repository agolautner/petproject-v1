const subsectionSchema = new mongoose.Schema({
    id: Number,
    startPoint: Number,
    endPoint: Number,
    length: Number,
    elevation: Number,
    time: Number
})