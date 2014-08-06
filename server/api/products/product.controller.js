/**
 * Using Rails-like standard naming covention for endpoints.
 *
 * GET     /products              ->  index
 * POST    /products              ->  create
 * GET     /products/:id          ->  show
 * PUT     /products/:id          ->  update
 * DELETE  /products/:id          ->  destroy
 *
 */

'use strict';

var _ = require('lodash'),
    Product = require('./product.model');

function handleError(res, err) {
    return res.send(500, err);
}

exports.index = function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            return handleError(res, req);
        }

        return res.json(200, products);
    })
};

exports.show = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        if (!product) {
            return res.send(404);
        }
        return res.json(product);
    });
};

// Creates a new product in the DB.
exports.create = function(req, res) {
    Product.create({
        name: req.body.name,
        type: req.body.type,
        imagePath: req.body.imagePath,
        done : false
    }, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        
        Product.find(function(err, products) {
        if (err) {
            return handleError(res, req);
        }

        res.json(products);
    })
    });
};

// Updates an existing product in the DB.
exports.update = function(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        if (!product) {
            return res.send(404);
        }
        var updated = _.merge(product, req.body);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, product);
        });
    });
};

// Deletes a product from the DB.
exports.destroy = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        if (!product) {
            return res.send(404);
        }
        product.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};
