const API_URL = "https://TU-PROYECTO-RENDER.onrender.com/api";

export async function apiRequest(endpoint, method = "GET", data = null) {
    const token = localStorage.getItem("access");

    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const options = {
        method,
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    // Si token expiró → refrescar
    if (response.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) return apiRequest(endpoint, method, data);
        window.location.href = "login.html";
    }

    return response.json();
}
