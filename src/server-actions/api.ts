interface LoginResponse {
    access_token: string;
    refresh_token: string;
}

async function login(username: string, password: string): Promise<LoginResponse> {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        return Promise.reject(response);
    }

    const data = await response.json();
    return data;
}

export { login };
