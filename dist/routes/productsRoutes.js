"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _productsController = require('../controllers/productsController'); var _productsController2 = _interopRequireDefault(_productsController);

const router = _express2.default.Router();

router.get('/', _productsController2.default.index);
router.get('/:id', _productsController2.default.get);
router.post('/', _productsController2.default.insert);
router.delete('/:id', _productsController2.default.delete);
router.put('/:id', _productsController2.default.update);

exports. default = router;
