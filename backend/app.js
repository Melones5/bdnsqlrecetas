var redis = require('redis')
var express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

var redis_cliente = redis.createClient(6379, 'redis')
var app = express()
app.use(bodyParser.json());
app.use(cors());

redis_cliente.on('connect', function(){
    console.log("conectado a redis")
})

//redis_cliente.del("kylo")
//redis_cliente.set("kylo", "ren")
//redis_cliente.set("luke", "skywalker")

/*
redis_cliente.get("kylo", function(err, value){
    console.log(value)
})
redis_cliente.get("luke", function(err, value){
    console.log(value)
})
redis_cliente.exists("darth", function(err, value){
    console.log(value)
})

redis_cliente.exists("kylo", function(err, value){
    if(value=="0"){
        console.log('carga') 
        redis_cliente.set("kylo", "FRIST ORDER!!!")
    } 
})

app.get('/', function(req, res){
    redis_cliente.lrange('personajes', 0, -1, function(err,values){
        res.send(JSON.stringify(values))   
    })
})

redis_cliente.exists("kylo", function(err, value){
    if(value=="0"){
        console.log('carga') 
        redis_cliente.set("kylo", "FRIST ORDER!!!")
    } 
})

redis_cliente.del("kylo", function(err, value){
    console.log("borrado")
})*/

//redis_cliente.flushdb();

app.get('/', function( req, res){
    redis_cliente.get("kylo", function(err, value){
        console.log({'valor': value})
        res.send(JSON.stringify({'valor': value}))
    })
})

app.post('/cargar', function( req, res){
    redis_cliente.lpush(req.param("episodio"), [req.param("personaje")])
    res.send("Carga OK!")
})

app.get('/listar', function( req, res){
    redis_cliente.lrange(req.param("episodio"), 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

app.delete('/baja/:episodio/:personaje', function(req,res){
    redis_cliente.lrem(req.params.episodio,1,req.params.personaje)
    res.send("Eliminado Correctamente")
})

app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
})
