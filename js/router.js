// js/router.js

import { requireAuth, getToken, isTokenExpired, logout } from "./auth.js";

export function protectPage() {
    const token = getToken();

    if (!token || isTokenExpired(token)) {
        logout();
        return;
    }

    // token válido → continuar
}
