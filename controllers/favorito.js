'use strict'
var Favorito = require('../models/favorito');

function prueba(req, res) {
    var nombre = req.params.nombre;
    res.send({ message: "Ingreso correctamente " + nombre });
}


function getFavorito(req, res) {
    var id = req.params.id;

    Favorito.findById(id, (err, favorito) => {
        if (err) {
            res.status(500).send({ message: "Error al encontrar el marcador " });
        } else {
            if (!favorito) {
                res.status(404).send({ message: "No existen datos" });
            } else {
                res.status(200).send({ favorito: favorito });
            }

        }

    });

}

function saveFavoritos(req, res) {
    var params = req.body;

    var favorito = new Favorito();

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: "Error al guardar el favorito" });
        } else {
            res.status(200).send({ favorito: favoritoStored });
        }
    })

}

function updateFavorito(req, res) {

    var params = req.body;
    var id = req.params.id;

    Favorito.findByIdAndUpdate(id, params, (err, favoritoUpdated) => {
        if (err) {
            res.status(500).send({ message: "Error al actualizar el favorito" });
        } else {
            res.status(200).send({ favorito: favoritoUpdated });
        }


    });

    // res.status(200).send({ update: "true", favorito: params });
}


function deleteFavorito(req, res) {
    var id = req.params.id;

    Favorito.findById(id, (err, favorito) => {
        if (err) {
            res.status(500).send({ message: "Error al devolver el favorito" });
        } else {
            if (!favorito) {
                res.status(404).send({ message: "No existe favorito" });
            } else {
                favorito.remove(err => {
                    if (err) {
                        res.status(200).send({ message: 'Error al borrar' });
                    } else {
                        res.status(200).send({ message: "Eliminado Correctamente" });
                    }
                })

            }
        }


    });



}

function getFavoritos(req, res) {

    Favorito.find({}, (err, favoritos) => {
        if (err) {
            res.status(500).send({ message: 'Error al mostrar los datos' });
        } else {
            if (!favoritos) {
                res.status(500).send({ message: "No existen favoritos" });
            } else {
                res.status(200).send({ Favorito: favoritos });
            }


        }



    });
    // res.status(200).send({ delete: "true", favorito: id });
}




module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavoritos,
    updateFavorito,
    deleteFavorito
}