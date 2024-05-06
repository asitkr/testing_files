// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

// test('Greet renders correctly', () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument()
// })



// TDD (Test Driven Development Approach)
// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

// test('Greet renders correctly', () => {
//     render(<Greet />);
//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument()
// })

// test('Greet renders with name', () => {
//     render(<Greet name="Ashit" />);
//     const textElement = screen.getByText("Hello Ashit");
//     expect(textElement).toBeInTheDocument()
// })



// Grouping Test
// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

// describe('Greet', () => {
//     test('renders correctly', () => {
//         render(<Greet />);
//         const textElement = screen.getByText("Hello");
//         expect(textElement).toBeInTheDocument()
//     })

//     test('renders with name', () => {
//         render(<Greet name="Ashit" />);
//         const textElement = screen.getByText("Hello Ashit");
//         expect(textElement).toBeInTheDocument()
//     })
// })

// Note:- 
// describe.skip('name', () => {})
// describe.only('name', () => {})


// Nested Grouping
// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

// describe('Greet', () => {
//     test('renders correctly', () => {
//         render(<Greet />);
//         const textElement = screen.getByText("Hello");
//         expect(textElement).toBeInTheDocument()
//     })

//     describe("nested", () => {
//         test('renders with name', () => {
//             render(<Greet name="Ashit" />);
//             const textElement = screen.getByText("Hello Ashit");
//             expect(textElement).toBeInTheDocument()
//         })
//     })
// })


// Two groups in terminal
import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/Greet"

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument()
    })
})


// checking the Jest Threshold
// describe("nested", () => {
//     test('renders with name', () => {
//         render(<Greet name="Ashit" />);
//         const textElement = screen.getByText("Hello Ashit");
//         expect(textElement).toBeInTheDocument()
//     })
// })