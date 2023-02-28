"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _productsRoutes = require('./routes/productsRoutes'); var _productsRoutes2 = _interopRequireDefault(_productsRoutes);
var _typesRouter = require('./routes/typesRouter'); var _typesRouter2 = _interopRequireDefault(_typesRouter);

const whiteList = [
    'http://localhost:3000',
];

const corsOptions = {
    origin: whiteList
};

class App {

    

    constructor() {
        this.app = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(_cors2.default.call(void 0, corsOptions));
        this.app.use(_helmet2.default.call(void 0, ));
        this.app.use(_express2.default.urlencoded({ extended: true }));
        this.app.use(_express2.default.json());

    }

    routes() {
        this.app.use('/products', _productsRoutes2.default);
        this.app.use('/types', _typesRouter2.default);
    }
}

exports. default = new App().app;
