const obtenerDatos = () => {
	let angulo = parseInt(document.getElementById("angulo").value);
	const tiempo = parseInt(document.getElementById("tiempo").value);
	const radio = parseInt(document.getElementById("radio").value);
	const alert = document.getElementById("alert");


	if (!angulo || !tiempo || !radio) {
		alert.classList.remove("d-none");
		return;
	} else {
		alert.classList.add("d-none");

		angulo = angulo * (Math.PI / 180);

		return { angulo, tiempo, radio }
	}
}
const calcularDatos = (datos) => {
	const { angulo, tiempo, radio } = datos;

	const velocidadAngular = angulo/tiempo;
	const velocidadTangencial = velocidadAngular * radio;
	const aceleracionCentripeta = Math.pow(velocidadAngular, 2) * radio;

	return {
		velocidadAngular,
		velocidadTangencial,
		aceleracionCentripeta
	}
}
(() => {
	const button = document.getElementById("calcular");
	const tabla = document.getElementById("tabla");
	button.onclick = (e) => {
		e.preventDefault();
		const tr = document.createElement("tr");
		const { velocidadAngular, velocidadTangencial, aceleracionCentripeta } = calcularDatos(obtenerDatos());
		tr.innerHTML = `
			<td>${velocidadAngular.toFixed(2)} rad/seg</td>
			<td>${velocidadTangencial.toFixed(2)} m/s</td>
			<td>${aceleracionCentripeta} m/s²</td>
		`

		tabla.appendChild(tr);
	}
})();
