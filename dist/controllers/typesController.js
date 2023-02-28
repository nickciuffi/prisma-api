"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _client = require('@prisma/client');
const prisma = new (0, _client.PrismaClient)()

class TypesController {
    async index(req, res) {
        const types = await prisma.type.findMany();
        res.json(types)

    }
    async insert(req, res) {
        const { name, desc } = req.body;
        if (!name || !desc) return res.json({ error: "You need to send all the data" })
        try {
            const type = await prisma.type.create({
                data: {
                    name,
                    desc
                }
            })
            res.json(type)
        }
        catch (e) {
            return res.status(400).json(e)
        }

    }
    async get(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "You need to send a name in your url" })
        try {
            const type = await prisma.type.findUnique({
                where: {
                    id
                },
                select: {
                    id: true,
                    name: true,
                    desc: true,
                    Products: {
                        select: {
                            id: true,
                            name: true,
                            price: true
                        }
                    }
                }
            })
            if (type === null) return res.status(400).json("Type not found")
            return res.json(type);
        }
        catch (e) {
            return res.status(400).json(e);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "You need to send an id in your url" });
        try {
            const type = await prisma.type.delete({
                where: {
                    id
                }
            })
            return res.json(type);
        }
        catch (e) {
            return res.status(400).json(e);
        }
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, desc } = req.body;
        if (!name && !desc) return res.json({ error: "You need to send at least one field" })
        if (!id) return res.status(400).json({ error: "You need to send a name in your url" });
        try {
            const type = await prisma.type.update({
                where: {
                    id
                },
                data: {
                    name, desc
                }

            })
            return res.json(type)
        }
        catch (e) {
            return res.status(400).json(e);
        }
    }

}

exports. default = new TypesController();
