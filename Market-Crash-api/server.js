var express = require("express");
var logger = require("morgan");
var http = require("http");
var bodyParser = require ("body-parser");
// var multer = require ("multer");
var ok = require("okay");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

var app = express();
var port = process.env.PORT || 8000;

app.use(logger());
// app.use(multer());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var ObjectId = mongoose.Types.ObjectId();
var schema = mongoose.Schema;
var productSchema = schema({
    name: {type: String},
    quantity: {type: String},
    stores: {
        name: {type: String},
        price: {type: Number}
    }
});

var listSchema = schema({
    title: {type: String},
    products: [{ type: schema.Types.ObjectId, ref: "product"}]
});

mongoose.model("product", productSchema);
mongoose.model("list", listSchema);

var router = express.Router();

router
    .use(bodyParser.json())
    .route("/api/products")
        .get(function (req,res){
            product.find({}, ok(next, function(error, posts) {
                res.send(posts);
            }));
        });

router
    .param("id", function (req, res, next) {
        req.dbQuery = {
            id: parseInt(req.params.id, 10)
        };
        next();
    })
    .route("/api/products/:id")
        .get(function (req, res){
            product.findOne({id:req.params.id}).exec(ok(next,function(prod){
                res.send(prod.toJSON());
            }));
        })
        .post(function (req, res){
            var prod = new product(req.body);
            prod.save(ok(next, function(results){
                res.send(results);
            }));
        })
        .put(function (req, res){
            product.findOne({id: req.params.id}, ok(next, function(prod) {
                prod.set(req.body);
                prod.save(ok(next, function(prod) {
                    res.send(prod.toJSON());
                }));
            }));
        });

router
    .use(bodyParser.json())
    .route("/api/lists")
        .get(function (req, res){
            list.find({}, ok(next, function(error, posts) {
                res.send(posts);
            }));
        });

router
    .param("id", function (req, res, next) {
        req.dbQuery = {
            id: parseInt(req.params.id, 10)
        };
        next();
    })
    .route("/api/lists/:id")
        .get(function (req, res){
            list.findOne({id:req.params.id}).exec(ok(next,function(prod){
                res.send(prod.toJSON());
            }));
        })
        .post(function (req, res){
            var prod = new list(req.body);
            prod.save(ok(next, function(results){
                res.send(results);
            }));
        })
        .put(function (req, res){
            list.findOne({id: req.params.id}, ok(next, function(prod) {
                prod.set(req.body);
                prod.save(ok(next, function(prod) {
                    res.send(prod.toJSON());
                }));
            }));
        })
        .delete(function (req, res){
            list.findOne({id: req.params.id}, ok(next, function(prod){
                prod.remove(ok(next, function(results){
                    res.send(results);
                }));
            }));
        });

module.exports = router;

app.listen (port);
console.log("Listening on port " + port);