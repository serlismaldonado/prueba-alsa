import { useState } from 'react'
export default function FormCrudProduct({ action }) {
	const [nombre, setNombre] = useState('')
	const [precio, setPrecio] = useState('')
	const [stock, setStock] = useState('')

	return (
		<div className='flex flex-col bg-slate-100 p-5 gap-3'>
			<h1>Formulario</h1>
			<form className='flex flex-col  gap-2 text-center'>
				<div className='flex  gap-2 text-center items-center'>
					<label htmlFor='nombre'>Nombre</label>
					<input
						type='text'
						name='nombre'
						id='nombre'
						placeholder='Nombre del Producto'
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className='flex  gap-2 text-center items-center'>
					<label htmlFor='nombre'>Precio</label>
					<input
						type='number'
						name='precio'
						id='precio'
						placeholder='Nombre del Producto'
						value={precio}
						onChange={(e) => setPrecio(e.target.value)}
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
						onClick={() => action(nombre, precio, stock)}
						className='btn bg-fuchsia-500 rounded-md p-2 text-white'>
						Guardar
					</button>
				</div>
			</form>
		</div>
	)
}
