// js/api.js

import { getToken, logout } from "./auth.js";

const API_URL = "https://ultimo-intento-ahora-si.onrender.com";

export async function apiGet(path) {
    const res = await fetch(`${API_URL}${path}`, {
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (res.status === 401) logout();

    return res.json();
}

export async function apiPost(path, body) {
    const res = await fetch(`${API_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(body),
    });

    if (res.status === 401) logout();

    return res.json();
}

export async function apiPut(path, body) {
    const res = await fetch(`${API_URL}${path}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(body),
    });

    if (res.status === 401) logout();

    return res.json();
}

export async function apiDelete(path) {
    const res = await fetch(`${API_URL}${path}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (res.status === 401) logout();

    return res.ok;
}
