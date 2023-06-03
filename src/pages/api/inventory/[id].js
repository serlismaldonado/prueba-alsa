import prisma from "../../../../db/connection"

export default async function handler(req, res) {
    if (req.method === "GET") { 
        
        const inventario = await prisma.inventario.findUnique({
            where: {
                idInventario: Number(req.query.id)
            },
        })

        console.log(inventario)
        res.status(200).json(inventario)
       
    }
}