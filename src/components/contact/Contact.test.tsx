import { sendForm } from '@emailjs/browser';
import { render, screen, fireEvent } from '@testing-library/react';

import Contact from './Contact';

// Mock the emailjs library
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn(),
}));

test('it should send an email when the form is submitted', () => {
  const formMock = { current: document.createElement('form') };

  const defaultProps: any = { form: formMock };

  render(<Contact {...defaultProps} />);

  // Fill in form input fields
  const nameInput = screen.getByPlaceholderText('Insert your name');
  const emailInput = screen.getByPlaceholderText('Insert your email');
  const messageInput = screen.getByPlaceholderText('Write the content');
  const submitButton = screen.getByText('Send Message');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

  // Submit the form
  fireEvent.click(submitButton);

  expect(sendForm).toHaveBeenCalledWith(
    'service_8j958ei',
    'template_tgoskjh',
    expect.any(HTMLFormElement), // Expect a form element
    '-ujpDtaYzB0cGQj_Q',
  );
});

test('it should do nothing when the form is submitted if form.current is null', () => {
  const formMock = { current: null }; // Mock the ref's current property to be null

  // Render the Contact component with the mocked ref
  const defaultProps: any = { form: formMock };
  render(<Contact {...defaultProps} />);

  // Fill in form input fields
  const nameInput = screen.getByPlaceholderText('Insert your name');
  const emailInput = screen.getByPlaceholderText('Insert your email');
  const messageInput = screen.getByPlaceholderText('Write the content');
  const submitButton = screen.getByText('Send Message');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

  // Mock the emailjs library
  jest.mock('@emailjs/browser', () => ({
    sendForm: jest.fn(),
  }));

  // Submit the form
  fireEvent.click(submitButton);

  // Expect that the emailjs.sendForm function is not called
  expect(sendForm).not.toHaveBeenCalled();
});
