import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import Nav from "../Nav";

test('renders menu', async() => {
    render(<Nav />)
    const menu = screen.getByTestId('menu')
    expect(menu).toBeInTheDocument()
});

test('renders switcher', async() => {
    render(<ChakraProvider><Nav /></ChakraProvider>)
    const menu = screen.getByTestId('icon-button')
    expect(menu).toBeTruthy()
});