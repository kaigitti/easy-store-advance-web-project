const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();
expressApp.use(expressFunction.json());

const url = 'mongodb://localhost:27017/store_db';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUSH, GET, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next()
});

mongoose.connect(url, config)
    .then(() => {
        console.log('Connection Success...');
    })
    .catch(err => {
        res.send('Connection Failed...!!');
    })

var addressSchema = new mongoose.Schema({
    id: String,
    name_surname: String,
    tel: Number,
    province: String,
    district: String,
    sub_district: String,
    postcode: Number,
    other: String
}, {
    collection: 'address'
});

let Address = mongoose.model('address', addressSchema);

expressApp.get('/showAddress', (req, res) => {
    Address.find({}, (err, data) => {
        if (err) {
            console.log('No Address Available Or Error : ' + err);
        } else {
            console.log('All Address Here!!')
            res.status(200).send(data);
        }
    })
})


expressApp.post('/addAddress', (req, res) => {
    Address.insertMany(req.body)
        .then(result => {
            console.log('Add address Success!!')
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log('Add address Failed : ' + err)
            console.log(err);
        })
})

expressApp.delete('/deleteAddress/:id',async (req, res) => {
    const { id } = req.params

    await Address.findByIdAndDelete(id)
    res.status(204).end()
    })


expressApp.listen(3000, function () {
    console.log('Listening on port: 3000');
});