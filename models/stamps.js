const stampSchema = new mongoose.Schema({
    name: String,
    id: Number,
    img: String,
    coordinates: String,
    sections: Array
})