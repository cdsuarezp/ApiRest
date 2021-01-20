process.env.PORT=process.env.PORT || 3000;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe'
    
} else {
    urlDB = 'mongodb://root:root@cluster0-shard-00-00.75w5g.mongodb.net:27017,cluster0-shard-00-01.75w5g.mongodb.net:27017,cluster0-shard-00-02.75w5g.mongodb.net:27017/cafe?replicaSet=atlas-11n289-shard-0&ssl=true&authSource=admin';
}


process.env.URLDB = urlDB;