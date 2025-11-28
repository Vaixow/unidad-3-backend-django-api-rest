// js/auth.js

const API_URL = "https://ultimo-intento-ahora-si.onrender.com";

export function saveToken(token) {
    localStorage.setItem("token", token);
}

export function getToken() {
    return localStorage.getItem("token");
}

export function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

export async function login(username, password) {
    const res = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        throw new Error("Credenciales incorrectas");
    }

    const data = await res.json();
    saveToken(data.access);
    return data.access;
}

export function requireAuth() {
    const token = getToken();
    if (!token) {
        window.location.href = "login.html";
        return false;
    }
    return true;
}

// Verifica si el token expiró (opcional)
export function isTokenExpired(token) {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp * 1000 < Date.now();
    } catch {
        return true;
    }
}
