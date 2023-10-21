"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Submitting login with username: ${username} and password: ${password}`);
        try {
            //const loginResponse = await login(username, password);
            //localStorage.setItem('token', loginResponse.access_token);
            
            if (username === 'admin' && password === 'admin123'){
                router.push('/dashboard', { scroll: false })
            } else if (username === 'residente' && password === 'residente123'){
                router.push('/profile', { scroll: false })
            } else {
                setErrorMessage('Usuario y/o contraseña incorrectos');
            }

            //setErrorMessage('Usuario y/o contraseña incorrectos');
            //console.log(loginResponse.access_token);
        } catch (error) {
            setErrorMessage('Usuario y/o contraseña incorrectos');
        }
    };

    const handleBack = () => {
        window.history.back();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover relative bg-[linear-gradient(to_bottom,rgba(22,26,54,0.65),rgba(22,26,54,0.85)),url('/assets/bg-image.jpg')]">
            <div className="absolute left-5 top-5 flex items-center w-20">
                <Image className='hover:cursor-pointer' onClick={handleBack} src="/assets/logo.svg" alt="Logo" width={100} height={100} color="white" />
                <p className="break-words font-medium text-white">SISTEMA DE GESTIÓN DOCUMENTAL</p>
            </div>
            <div className='flex-col items-center justify-center p-10 bg-white rounded-md'>
                <h1 className='text-center font-medium text-black text-3xl mb-3'>Inicio de sesión</h1>
                
                <form onSubmit={handleSubmit}>
                    <label className='text-black mt-2' htmlFor='username-input'>
                        Usuario:
                    </label><br/>
                    <input className='py-1.5 px-3 mt-2 border-solid border-2 outline-none border-gray-300 focus:border-blue-400' id="username-input" type="text" value={username} onChange={handleUsernameChange} />
                    <br />
                    <label className='text-blck mt-2' htmlFor='password-input'>
                        Contraseña:
                    </label><br/>
                    <input className='py-1.5 px-3 mt-2 border-solid border-2 outline-none border-gray-300 focus:border-blue-400' id='password-input' type="password" value={password} onChange={handlePasswordChange} />
                    {errorMessage && <p className='text-red-500 mb-3'>{errorMessage}</p>}
                    <button className='bg-blue-600 hover:bg-blue-700 text-white w-60 font-semibold py-3.5 px-4 rounded-md flex justify-center m-1 mt-5' type="submit">Login</button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;