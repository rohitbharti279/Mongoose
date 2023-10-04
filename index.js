//Restrict to add extra data
const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    
    //validation
    const product_Schema = new mongoose.Schema({
        //whatever add here that will be add only with same type
        name:String,  
        price:Number
    });

    const productsModel = mongoose.model('products', product_Schema); //model connect node.js to mongoDB
    const data = new productsModel({name: "Sam", price: 400});
    const result = await data.save();
    console.log(result);

}
main();