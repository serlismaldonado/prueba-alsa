import { useState, useEffect } from 'react'
import FormCrud from '../../../components/FormCrud'

export default function Page({ data }) {
	const [inventario, setInventario] = useState([])
	const [refresh, setRefresh] = useState(false)
	const [idProduct, setIdProducto] = useState('')
	const [idCliente, setCliente] = useState('')
	const [idEmployee, setEmpleado] = useState('')
	const [stock, setStock] = useState('')
	const [id, setId] = useState('')

	const changeIdClient = (e) => {
		setCliente(e)
	}

	const changeIdEmployee = (e) => {
		setEmpleado(e)
	}

	const changeStock = (e) => {
		setStock(e)
	}

	useEffect(() => {
		getProducts().then((res) => {
			setInventario(res)
			console.log(res)
		})
	}, [refresh])

	const chargeInventory = async (id) => {
		const product = await fetch(`http://localhost:3000/api/inventory/${id}`, {
			method: 'GET',
		}).then((res) => res.json())

		setIdProducto(product.idProducto)
		changeIdClient(product.idCliente)
		changeIdEmployee(product.idEmpleado)
		changeStock(product.cantidad)
	}

	const updateInventory = async (idProduct, stock, idClient, idEmployee) => {
		const product = await fetch('http://localhost:3000/api/inventory', {
			method: 'PUT',
			body: JSON.stringify({
				id: idProduct,
				cantidad: stock,
				idCliente: idClient,
				idEmpleado: idEmployee,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json())

		setRefresh(!refresh)
	}

	return (
		<div>
			<h1>inventario - Serlis Maldonado</h1>
			{/* Formulario de creacion y modificacion */}
			<form className='flex flex-col  gap-2 text-center'>
				<div className='flex  gap-2 text-center items-center'>
					<label htmlFor='nombre'>Id de Producto</label>
					<input
						type='text'
						name='nombre'
						placeholder='Nombre del Producto'
						value={idProduct}
						onChange={(e) => setIdProducto(e.target.value)}
					/>
				</div>

				<div className='flex  gap-2 text-center items-center'>
					<label htmlFor='nombre'> ID cliente</label>
					<input
						type='number'
						name='cliente'
						id='cliente'
						placeholder='Cliente'
						value={idCliente}
						onChange={(e) => setCliente(e.target.value)}
					/>
				</div>
				<div className='flex  gap-2 text-center items-center'>
					<label htmlFor='nombre'>ID Empleado</label>
					<input
						type='number'
						name='empleado'
						id='Empleado'
						placeholder='Empleado'
						value={idEmployee}
						onChange={(e) => setEmpleado(e.target.value)}
					/>
				</div>

				<div className='flex  gap-2 text-center items-center'>
					<label htmlFor='nombre'>Stock</label>
					<input
						type='number'
						name='stock'
						id='stock'
						placeholder='Stock'
						value={stock}
						onChange={(e) => setStock(e.target.value)}
					/>
				</div>

				<div className='flex gap-4'>
					<button
						type='button'
						onClick={() =>
							updateInventory(idProduct, stock, idCliente, idEmployee)
						}
						className='btn bg-fuchsia-500 rounded-md p-2 text-white'>
						Guardar
					</button>
				</div>
			</form>
			<table>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Cantidad</th>
						<th>Empleado</th>
						<th>Cliente</th>
						<th>Fecha</th>
						<th>Actualizar</th>
					</tr>
				</thead>
				<tbody>
					{inventario.length > 0 ? (
						inventario.map((item) => (
							<tr key={item.idInventario}>
								<td>{item.productos?.nombre}</td>
								<td>{item.cantidad}</td>
								<td>{item.empleado.nombre}</td>
								<td>{item.cliente.nombre}</td>
								<td>{item.createdAt}</td>
								<td className='flex gap-2'>
									<button
										onClick={() => chargeInventory(item.idInventario)}
										className='btn bg-sky-500 rounded-md p-2 text-white'>
										Actualizar
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
	const res = await fetch('http://localhost:3000/api/inventory', {
		method: 'GET',
	}).then((res) => res.json())

	return res
}
