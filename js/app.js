//Acceder al form

const formulario = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");

formulario.addEventListener("submit", async (e) => {
	e.preventDefault();
	//insertar codigo en bd
	// utilizando Fetch
	try {
		const respuesta = await fetch(
			"https://sheet.best/api/sheets/f7a6c8b3-be20-432a-81cb-40f3fc2dd6ff",
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					Nombre: formulario.nombre.value,
					Correo: formulario.correo.value,
					Telefono: formulario.telefono.value,
				}),
			}
		);
	} catch (error) {
		console.log(error);
	}

	// leer filas

	// try {
	// 	const respuesta2 = await fetch(
	// 		"https://sheet.best/api/sheets/f7a6c8b3-be20-432a-81cb-40f3fc2dd6ff"
	// 	);
	// 	const contenido = await respuesta2.json();
	// 	console.log(contenido);
	// } catch (error) {
	// 	console.log(error);
	// }
	registro.classList.remove("activo");
	exito.classList.add("activo");
});
