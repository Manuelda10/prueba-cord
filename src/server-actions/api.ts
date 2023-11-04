import { formatDate } from "@/utils/utils";

const API_URL = 'https://undy6mcm8a.execute-api.us-east-1.amazonaws.com/Prod';

/*
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
}*/


const getDocuments = async () => {
    const response = await fetch(`${API_URL}/document`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        return Promise.reject(response);
    }

    const data = await response.json();
    console.log("DATA: ", data)
    data.forEach((document: any) => {
        document.fecha_de_pago = formatDate(document.fecha_de_pago, 2);
    })
    return data;
}

const createDocument = async (document: any) => {
    const response = await fetch(`${API_URL}/document`, {
        method: 'POST',
        /*headers: {
        'Content-Type': 'application/json'
        },*/
        body: JSON.stringify(document)
    });
    
    if (!response.ok) {
        return Promise.reject(response);
    }

    const data = await response.json();
    return data;
}

export { getDocuments, createDocument };
