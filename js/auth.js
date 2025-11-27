const TOKEN_URL = "https://TU-PROYECTO-RENDER.onrender.com/api/token/";
const REFRESH_URL = "https://TU-PROYECTO-RENDER.onrender.com/api/token/refresh/";

export async function login(username, password) {
    const response = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        return true;
    }
    return false;
}

export async function refreshToken() {
    const refresh = localStorage.getItem("refresh");

    if (!refresh) return false;

    const response = await fetch(REFRESH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh })
    });

    if (!response.ok) return false;

    const data = await response.json();
    localStorage.setItem("access", data.access);
    return true;
}

export function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "login.html";
}
