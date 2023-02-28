"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _client = require('@prisma/client');
const prisma = new (0, _client.PrismaClient)()

class ProductsController {
    async index(req, res) {
        const prods = await prisma.products.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                type: true,
                typeId: false,
            }
        });
        res.json(prods)

    }
    async insert(req, res) {
        const { name, price, typeId } = req.body;
        if (!name || !price || !typeId) return res.status(400).json({
            error: "You need to send all the data"
        })
        try {
            const prod = await prisma.products.create({

                data: {
                    name,
                    price,
                    typeId
                }
            })
            return res.json(prod);
        }
        catch (e) {
            res.status(400).json(e)
        }

    }
    async get(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "You need to send an id in your url" })
        try {
            const product = await prisma.products.findUnique({
                where: {
                    id
                },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    type: true,
                    typeId: false,
                }
            })
            if (product === null) return res.status(400).json({ error: "Couldn`t find this product" })
            return res.json(product)
        }
        catch (e) {
            return res.status(400).json(e)
        }
    }
    async delete(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "You need to send an id in your url" })
        try {
            const prod = await prisma.products.delete({
                where: {
                    id
                }
            })
            return res.json(prod);
        }
        catch (e) {
            return res.status(400).json(e)
        }
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, price, typeId } = req.body;
        if (!name && !price && !typeId) return res.status(400).json({ error: "You need to send at least one field" });
        if (!id) return res.status(400).json({ error: "You need to send an id in your url" })
        try {
            const product = await prisma.products.update({
                where: {
                    id
                },
                data: {
                    name, price, typeId
                }

            })
            return res.json(product);
        }
        catch (e) {
            return res.status(400).json(e)
        }

    }
}

exports. default = new ProductsController();
