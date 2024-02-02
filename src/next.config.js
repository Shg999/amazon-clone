module.exports ={
    images : {
        domains:["links.papareact.com","fakestoreapi.com"],
    },
    webpack(config){
        config.resolve.fallback={
...config.resolve.fallback,
fs:false
        }
        return config
    }
};