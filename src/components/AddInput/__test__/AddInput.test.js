import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn(); //mock function

describe('AddInput', () => {
	it('should render input element', async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});

	it('should be able to type in input', async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		fireEvent.change(inputElement, { target: { value: 'Go Shopping' } });
		expect(inputElement.value).toBe('Go Shopping');
	});

	it('should have empty input after button pressed', async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: 'Go Shopping' } });
		fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("")
	});
});
