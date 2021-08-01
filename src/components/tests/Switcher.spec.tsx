import Swticher from "../Swticher";
import { render, screen } from "@testing-library/react";

test('renders icon button', async () => {
    render(<Swticher />)
    const iconButton = screen.getByTestId('icon-button')
    expect(iconButton).toBeInTheDocument()
});