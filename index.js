'use strict'
var app = require('./app');
var port = process.env.PORT || 3678
var mongoose = require('mongoose');

// mongodb: //<dbuser>:<dbpassword>@ds253713.mlab.com:53713/favoritos
    // mongoose.connect('mongodb://root:ppB3WPN6tZBMyXm@ds255253.mlab.com:55253/boti', { useNewUrlParser: true }, (err, res) => {
    mongoose.connect('mongodb://admin:admin123@ds253713.mlab.com:53713/favoritos', { useNewUrlParser: true }, (err, res) => {

        if (err) {
            throw err;
        } else {
            console.log("Conexion a mongodb correcta");
            app.listen(port, () => {
                console.log(`Servidor web funcionando en puertos ` + port);
            });
        }

    });
// mongodb: //user:pass@droplet_ip:27017/my_database

// mongoose.connect('mongodb://root:Alexyjavi08122012@localhost:27017/favorito??authSource=root', { useNewUrlParser: true }, (err, res) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Conexion a mongodb correcta");
//         app.listen(port, () => {
//             console.log(`Servidor web funcionando en puertos ` + port);
//         });
//     }

// });