import { formatDate } from "@/utils/utils";

//const API_URL = 'https://undy6mcm8a.execute-api.us-east-1.amazonaws.com/Prod';
const API_URL = '/api/services';

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


const getFilteredDocuments = async (filters: any) => {
    console.log('HOLAAAA')
    const urlAPI:any = new URL('http://localhost:3000/api/services/document/filter');

    console.log('urlAPI: ', urlAPI)
    Object.keys(filters).forEach(key => urlAPI.searchParams.append(key, filters[key]));

    const response = await fetch(`${urlAPI}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
    });
    
    if (!response.ok) {
        return Promise.reject(response);
    }

    const data = await response.json();

    if(data === null) {
        return [];
    }

    data.forEach((document: any) => {
        document.fecha_de_pago = formatDate(document.fecha_de_pago, 2);
    })

    return data;
}

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
    data.forEach((document: any) => {
        document.fecha_de_pago = formatDate(document.fecha_de_pago, 2);
    })
    return data;
}

const createDocument = async (document: any) => {
    const response = await fetch(`${API_URL}/document`, {
        method: 'POST',
        /*headers: {
        'Content-Type': 'multipart/form-data'
        },*/
        body: document
    });
    
    if (!response.ok) {
        return Promise.reject(response);
    }

    const data = await response.json();
    return data;
}

const deleteDocument = async (documentId: any) => {
    const response = await fetch(`${API_URL}/document/${documentId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        return Promise.reject(response);
    }

    const data = await response.json();
    return data;
}

export { getDocuments, getFilteredDocuments, createDocument, deleteDocument };
