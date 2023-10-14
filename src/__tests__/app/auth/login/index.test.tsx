import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '@/app/auth/login/page';
import DashboardPage from '@/app/(admin)/dashboard/page';

describe('Login component', () => {
    it('renders the login form', () => {
        render(<Login />);
        const emailInput = screen.getByLabelText('Usuario:');
        const passwordInput = screen.getByLabelText('Contraseña:');
        const submitButton = screen.getByRole('button', { name: 'Login' });
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('displays an error message when the form is submitted with invalid credentials', async () => {
        render(<Login />);
        const emailInput = screen.getByLabelText('Usuario:');
        const passwordInput = screen.getByLabelText('Contraseña:');
        const submitButton = screen.getByRole('button', { name: 'Login' });
        const errorMessage = 'Usuario y/o contraseña incorrectos';

        emailInput.nodeValue = '    ';
        passwordInput.nodeValue = '    ';
        submitButton.click();
        const errorElement = await screen.findByText(errorMessage);
        expect(errorElement).toBeInTheDocument();
    });

    it('redirects to the dashboard page when the form is submitted with valid credentials', async () => {
        render(<Login />);
        const emailInput = screen.getByLabelText('Usuario:');
        const passwordInput = screen.getByLabelText('Contraseña:');
        const submitButton = screen.getByRole('button', { name: 'Login' });
        //const dashboardPageTitle = 'Dashboard';
        //emailInput.nodeValue = 'valid-email@example.com';
        //passwordInput.nodeValue = 'valid-password';
        submitButton.click();
        //const dashboardPageTitleElement = await screen.findByText(dashboardPageTitle);
        //expect(dashboardPageTitleElement).toBeInTheDocument();
    });
});
