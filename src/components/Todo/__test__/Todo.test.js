import {render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo/>
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {name: /Add/i});
  tasks.forEach(task => {
    fireEvent.change(inputElement, {target: {value: task}});
    fireEvent.click(buttonElement);
  })
}
//integration test
describe("Todo", () => {
  it('should pass a created todo into todo list', async () => {
    render (<MockTodo />);
    addTask(['Go shopping'])
    const divElement = screen.getByText(/Go shopping/i);
    expect(divElement).toBeInTheDocument();
  })

  it('should add several todo items', async () => {
    render (<MockTodo />);
    addTask(['Go shopping', 'Have a walk', 'Feed the'])
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  })

  it('task should not have completed class when initially added', async () => {
    render (<MockTodo />);
    addTask(['Go shopping'])
    const divElement = screen.getByText(/Go shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  })

  it('task should have completed class when clicked', async () => {
    render (<MockTodo />);
    addTask(['Go shopping'])
    const divElement = screen.getByText(/Go shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  })
})