import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Counter App', () => {
	test('The app displays a header', () => {
		render(<App />);
		expect(screen.getByRole('heading')).toHaveTextContent('Counter App');
	});

	test("App displays an initial count of zero", () => {
		render(<App />);
		expect(screen.getByTestId('count')).toHaveTextContent('0')
	});

	test("App when clicking increment, increments the count by one", () => {
		render(<App />);
		fireEvent.click(screen.getByTestId('increment'))
		expect(screen.getByTestId('count')).toHaveTextContent('1')
	});

	test("App when clicking decrement, decrements the count by one", () => {
		render(<App />);
		fireEvent.click(screen.getByTestId('decrement'))
		expect(screen.getByTestId('count')).toHaveTextContent('-1')
	});

	test("App given an initial count prop, displays that initial value", () => {
		const initialCount = 5;
		render(<App initialCount={initialCount}/>);
		expect(screen.getByTestId('count')).toHaveTextContent(initialCount);
	});

	test("App given an incrementBy and an initialCount, when clicking increment, increments the count by the incrementBy", () => {
		render(<App initialCount={2} incrementBy={3} />);
		fireEvent.click(screen.getByTestId('increment'))
		expect(screen.getByTestId('count')).toHaveTextContent('5')
	});

	test("App given an incrementBy and an initialCount, when clicking decrement, decrements the count by the incrementBy", () => {
		render(<App initialCount={2} incrementBy={3} />);
		fireEvent.click(screen.getByTestId('decrement'))
		expect(screen.getByTestId('count')).toHaveTextContent('-1')
	});
});
