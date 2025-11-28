import { authFetch, logout } from "./auth.js";

document.getElementById("logout").onclick = logout;

async function cargarContactos() {
    const resp = await authFetch("https://ultimo-intento-ahora-si.onrender.com/api/contacto/");
    const data = await resp.json();

    let html = `
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="border-b bg-gray-200">
                    <th class="p-2">Nombre</th>
                    <th class="p-2">Correo</th>
                    <th class="p-2">Teléfono</th>
                    <th class="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.results.forEach(c => {
        html += `
            <tr class="border-b">
                <td class="p-2">${c.nombre}</td>
                <td class="p-2">${c.correo}</td>
                <td class="p-2">${c.telefono}</td>
                <td class="p-2">
                    <a href="editar.html?id=${c.url.split("/").slice(-2, -1)}"
                       class="text-blue-600 hover:underline">Editar</a>

                    <button onclick="eliminar('${c.url}')"
                            class="text-red-600 ml-3 hover:underline">Eliminar</button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    document.getElementById("lista").innerHTML = html;
}

window.eliminar = async function(url) {
    if (!confirm("¿Eliminar contacto?")) return;
    await authFetch(url, { method: "DELETE" });
    cargarContactos();
}

cargarContactos();
