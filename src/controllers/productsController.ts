import express from 'express'
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

class ProductsController {
    async index(req: express.Request, res: express.Response) {
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
    async insert(req: express.Request, res: express.Response) {
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
    async get(req: express.Request, res: express.Response) {
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
    async delete(req: express.Request, res: express.Response) {
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
    async update(req: express.Request, res: express.Response) {
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

export default new ProductsController();
