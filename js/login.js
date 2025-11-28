import { saveTokens } from "./auth.js";

document.getElementById("loginForm").addEventListener("submit", async e => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const resp = await fetch("https://ultimo-intento-ahora-si.onrender.com/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const msg = document.getElementById("msg");

    if (!resp.ok) {
        msg.textContent = "Credenciales incorrectas";
        msg.classList.remove("hidden");
        return;
    }

    const data = await resp.json();
    saveTokens(data.access, data.refresh);

    window.location.href = "index.html";
});
