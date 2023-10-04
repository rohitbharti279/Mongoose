//Restrict to add extra data
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/e-comm');

//validation
const product_Schema = new mongoose.Schema({
    //whatever add here that will be add only with same type
    name: String,
    price: Number,
    brand: String,
    category: String
});

const SaveInDb = async () => {
    const dataFromMongodb = mongoose.model('products', product_Schema); //model connect node-js to mongoDB
    const data = new dataFromMongodb({ name: "rony", price: 90, brand: "maxx", category: "HOME" });
    const result = await data.save();
    console.log(result);

}
// SaveInDb();

const updateInDb = async () => {
    const dataFromMongodb = mongoose.model('products', product_Schema);
    const data = await dataFromMongodb.updateOne(
        {name: " m 20"},
        {
            $set: {brand: "Samsung Galaxy"}
        }
    )
    console.log(data);
}
// updateInDb();

const deleteInDb = async () => {
    const dataFromMongodb = mongoose.model('products', product_Schema);
    const data = await dataFromMongodb.deleteOne({name: "rony"});
    console.log(data);
}
// deleteInDb();

const findInDb = async () => {
    const dataFromMongodb = mongoose.model('products', product_Schema);
    // const data = await dataFromMongodb.find(); //find all data
    const data = await dataFromMongodb.find({name: " m 20"}); // find particular data by .........
    console.log(data);
}
findInDb();