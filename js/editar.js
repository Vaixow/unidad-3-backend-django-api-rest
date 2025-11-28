import { authFetch } from "./auth.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let URL = `https://ultimo-intento-ahora-si.onrender.com/api/contacto/${id}/`;

async function cargar() {
    const resp = await authFetch(URL);
    const c = await resp.json();

    nombre.value = c.nombre;
    correo.value = c.correo;
    telefono.value = c.telefono;
    direccion.value = c.direccion;
}

document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();

    await authFetch(URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: nombre.value,
            correo: correo.value,
            telefono: telefono.value,
            direccion: direccion.value
        })
    });

    window.location.href = "index.html";
});

cargar();
