import prisma from "../../../../db/connection"
export default async function handler(req, res) {
    if (req.method === "GET") { 
       
        const productos = await prisma.producto.findMany({
        })
        res.status(200).json(productos)
       
    }
    if (req.method === "POST") {
        const { nombre, precio, stock } = req.body
        
        const producto = await prisma.producto.create({
            data: {
                nombre: nombre,
                precio: Number(precio),
                stock: Number(stock),
               
            }
        })
        res.status(200).json(producto)
    }
}