exports.middlewareGlobal = (req, res, next ) => {
     console.log();     

     if(req.body.Cliente) {
          req.body.Cliente = req.body.Cliente.replace('lima', 'não use lima')
          console.log(`vi que postou o ${req.body.Cliente}`);
     }

     console.log();      
     next();
};

exports.outroMiddleware = (req, res, next ) => {
     console.log(`outro middleware`);
     next();
};