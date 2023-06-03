import prisma from "../../../../db/connection"
export default async function handler(req, res) {
    if (req.method === "GET") { 
       
        const inventario = await prisma.inventario.findMany({
            include: {
                producto: true,
                empleado: true,
                cliente: true
            }
        })

        console.log(inventario)
        res.status(200).json(inventario)
       
    }
}