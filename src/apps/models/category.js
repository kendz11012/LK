
const mongoose = require("../../common/database")();

const CategorySchema = new mongoose.Schema({
    description:{
        type: String,
        default: null
    },
    title:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    },
    brand:{
        type:Array,
        required:true,
    }
    
}, {
    timestamps: true,
});

const CategoryModel = mongoose.model("Category",CategorySchema ,"categories");

module.exports = CategoryModel;