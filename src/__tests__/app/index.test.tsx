import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page';

describe('Home page should render properly', () => {
  it('Should render properly', () => {
    render(<Home/>);

    const header = screen.getByRole('heading');
    const headerText = 'CENTRALIZA Y SIMPLIFICA LA ADMINISTRACIÓN DE TU CONDOMINIO';

    expect(header).toHaveTextContent(headerText);
  });

  it('Admin button should render properly', () => {
    render(<Home/>);

    const buttonText = 'Administrador'
    const buttonAdmin = screen.getByText(buttonText);

    expect(buttonAdmin).toBeInTheDocument();
  });

  it('Resident button should render properly', () => {
    render(<Home/>);
    
    const buttonText = 'Propietarios'
    const buttonResident = screen.getByText(buttonText);

    expect(buttonResident).toBeInTheDocument();
  });

  it('Logo should render properly', () => {
    render(<Home/>);
    
    const logo = screen.getByAltText('Logo');
    const logoText = 'SISTEMA DE GESTIÓN DOCUMENTAL';
    const element = screen.getByText(logoText);

    expect(logo).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
})