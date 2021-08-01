import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "../Menu";

test('renders menu button', async() => {
    render(<Menu />)
    const menuBtn = screen.getByText('Menu')
    expect(menuBtn).toBeInTheDocument()
});

test('render drawer cancel button', async() => {
    render(<Menu />)
    const menuBtn = screen.getByText('Menu')
    fireEvent.click(menuBtn)
    const closeBtn = screen.getByTestId('close-btn')
    expect(closeBtn).toBeInTheDocument()
});