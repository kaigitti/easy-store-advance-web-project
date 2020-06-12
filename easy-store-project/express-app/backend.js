const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const url = 'mongodb://localhost:27017/store_db';

const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

var Schema = require('mongoose').Schema;

const productsSchema = Schema({
    product_name: String,
    product_detail: String,
    product_quantity: Number,
    product_price: Number,
    product_img: String
}, {
    collection: 'products'
});

let Product
try {
    Product = mongoose.model('products')
} catch (error) {
    Product = mongoose.model('products', productsSchema);
}

expressApp.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUSH, GET, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next()
});

expressApp.use(expressFunction.json());

expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connection Success');
        next();
    })
    .catch(err => {
        console.log('Connection Failed : '+err);
        res.status(501).send(err)
    });
});

const addProduct = (productData) => {
    return new Promise ((resolve, reject) => {
        var new_product = new Product(
            productData
        );
        new_product.save((err, data) => {
            if(err){
                reject(new Error('Product add Failed!!'));
            }else{
                resolve({message: 'Product add Succes!!'});
            }
        });
    });
}

const getProduct = () => {
    return new Promise ((resolve, reject) => {
        Product.find({}, (err, data) => {
            if(err){
                reject(new Error('Get Product Failed!!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Get Product Failed!!'))
                }
            }
        });
    });
}

const deleteProducts = () => {
    return new Promise ((resolve, reject) => {
        Product.findOneAndDelete({product_name: req.params}, (err, data) => {
            if(err){
                reject(new Error('Delete Product Failed!!'));
            }else{
                if(data){
                    resolve({message: 'Delete Product Success!!'})
                }else{
                    reject(new Error('Delete Product Failed!!'))
                }
            }
        });
    });

}

expressApp.delete('/products/delete/:name',(req,res) => {
    console.log('delete');
    deleteProducts()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
})

expressApp.post('/products/add',(req,res) => {
    console.log('add');
    addProduct(req.body)
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
});

expressApp.get('/products/get',(req,res) => {
    console.log('get');
    getProduct()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
});



expressApp.listen(3000, function(){
    console.log('Listening on port: 3000');
});