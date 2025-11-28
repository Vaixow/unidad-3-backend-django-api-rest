import { authFetch } from "./auth.js";

document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();

    await authFetch("https://ultimo-intento-ahora-si.onrender.com/api/contacto/", {
        method: "POST",
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
