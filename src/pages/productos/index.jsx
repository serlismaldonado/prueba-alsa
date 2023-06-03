import { useState, useEffect } from 'react'
import FormCrudProduct from '../../../components/FormCrud'

export default function Page({ data }) {
	const [products, setProducts] = useState([])
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		getProducts().then((res) => {
			setProducts(res)
			console.log(res)
		})
	}, [refresh])

	const saveProduct = async (nombre, precio, stock) => {
		const product = await fetch('http://localhost:3000/api/products', {
			method: 'POST',
			body: JSON.stringify({
				nombre: nombre,
				precio: precio,
				stock: stock,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json())

		setRefresh(!refresh)
	}

	const updateProduct = async (id) => {
		const product = await fetch(`http://localhost:3000/api/products/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				nombre: 'Producto 1',
				precio: 100,
				stock: 10,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json())

		setRefresh(!refresh)
	}

	const deleteProduct = async (id) => {
		const product = await fetch(`http://localhost:3000/api/products/${id}`, {
			method: 'DELETE',
		}).then((res) => res.json())

		setRefresh(!refresh)
	}

	return (
		<div className='flex flex-col bg-slate-50 p-5'>
			<h1>inventario - Serlis Maldonado</h1>
			{/* Formulario de creacion y modificacion */}
			<FormCrudProduct action={saveProduct} />
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Stock</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{products.length > 0 ? (
						products.map((item) => (
							<tr key={item.idProducto}>
								<td>{item.idProducto}</td>
								<td>{item.nombre}</td>
								<td>{item.precio}</td>
								<td>{item.stock}</td>
								<td className='flex gap-2'>
									<button
										onClick={() => updateProduct(item.idProducto)}
										className='btn bg-sky-500 rounded-md p-2 text-white'>
										Editar
									</button>
									<button
										onClick={() => deleteProduct(item.idProducto)}
										className='btn bg-red-500 rounded-md p-2 text-white'>
										Eliminar
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan='4'>No hay datos</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export async function getProducts() {
	const res = await fetch('http://localhost:3000/api/products', {
		method: 'GET',
	}).then((res) => res.json())

	return res
}
