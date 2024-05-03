// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

// test('Greet renders correctly', () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument()
// })

// TDD (Test Driven Development Approach)
import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument()
})

test('Greet renders with name', () => {
    render(<Greet name="Ashit" />);
    const textElement = screen.getByText("Hello Ashit");
    expect(textElement).toBeInTheDocument()
})