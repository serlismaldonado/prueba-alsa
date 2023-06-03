import prisma from "../../../../db/connection"
export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.query
        const producto = await prisma.producto.delete({
            where: {
                idProducto: Number(id)
            }
        })
        res.status(200).json(producto)
    }
}