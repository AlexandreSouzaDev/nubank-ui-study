import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('shows an error for an invalid CPF and success for a valid one', async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByLabelText('CPF');
    await user.type(input, '11111111111');
    await user.click(screen.getByRole('button', { name: 'Continuar' }));
    expect(screen.getByText(/CPF inválido/)).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');

    await user.clear(input);
    await user.type(input, '52998224725');
    expect(input).toHaveValue('529.982.247-25');
    await user.click(screen.getByRole('button', { name: 'Continuar' }));
    expect(screen.getByText(/CPF válido!/)).toBeInTheDocument();
  });

  it('updates the simulator when sliders change', () => {
    render(<App />);
    const before = screen.getByTestId('total').textContent;
    fireEvent.change(screen.getByRole('slider', { name: /Depósito mensal/ }), { target: { value: '2000' } });
    expect(screen.getByTestId('total').textContent).not.toBe(before);
  });

  it('toggles the card number and the mobile menu', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Mostrar número' }));
    expect(screen.getByText('5502 1234 9087 4821')).toBeInTheDocument();
    const burger = screen.getByRole('button', { name: 'Abrir menu' });
    await user.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(burger).toHaveAttribute('aria-expanded', 'false');
  });
});
