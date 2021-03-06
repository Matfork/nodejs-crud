 var express     = require('express'),
  authController = require('../controllers/authController'),
  authMiddleware = require('../middleware/auth'),
  rIndex         = express.Router(),
  rAuth          = express.Router();

  module.exports.addRoutes = function(app: any){

    rIndex.get('/', function(req: any, res: any, next: any) {
        res.render('index', { title: 'Express' });
    });

    rAuth.post('/auth/login', authController.login);
    rAuth.post('/auth/verify', authMiddleware.__verifyToken);

    app.use('/', rIndex);
    app.use('/api/', rAuth);

    return app;
  }
