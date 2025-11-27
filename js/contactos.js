import { apiRequest } from "./api.js";

export async function obtenerContactos() {
    return await apiRequest("/contacto/");
}

export async function obtenerContacto(id) {
    return await apiRequest(`/contacto/${id}/`);
}

export async function crearContacto(data) {
    return await apiRequest("/contacto/", "POST", data);
}

export async function editarContacto(id, data) {
    return await apiRequest(`/contacto/${id}/`, "PUT", data);
}

export async function eliminarContacto(id) {
    return await apiRequest(`/contacto/${id}/`, "DELETE");
}
