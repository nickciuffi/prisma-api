"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _typesController = require('../controllers/typesController'); var _typesController2 = _interopRequireDefault(_typesController);

const router = _express2.default.Router();

router.get('/', _typesController2.default.index);
router.post('/', _typesController2.default.insert);
router.get('/:id', _typesController2.default.get);
router.delete('/:id', _typesController2.default.delete);
router.put('/:id', _typesController2.default.update);

exports. default = router;
