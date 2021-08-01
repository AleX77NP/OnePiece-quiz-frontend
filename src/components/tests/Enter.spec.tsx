import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import Enter from "../Enter";

test('renders start quiz box', async() => {
    render(<ChakraProvider><Enter /></ChakraProvider>)
    const startQuiz = screen.getByText('START QUIZ')
    expect(startQuiz).toBeVisible()
});