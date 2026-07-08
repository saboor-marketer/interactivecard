# Interactive Card Details Form

A modern, responsive credit card form with real-time preview and validation. This project demonstrates DOM manipulation, form validation, and interactive UI design.

## Features

- **Real-time Card Preview**: See your card details update instantly as you type
- **Form Validation**: Comprehensive validation with clear error messages
  - Empty field detection
  - Format validation for card number, expiry date, and CVC
  - Expiry date validation (checks if card is expired)
- **Responsive Design**: Optimal layout for desktop, tablet, and mobile devices
- **Interactive States**: Hover, active, and focus states for all interactive elements
- **Card Flip Animation**: Card flips to show the back when entering CVC
- **Modern UI**: Beautiful gradient design with smooth transitions

## How to Use

1. Open `index.html` in your web browser
2. Fill in the form fields:
   - **Cardholder Name**: Enter the name on the card (letters only)
   - **Card Number**: Enter 16-digit card number (auto-formatted with spaces)
   - **Expiry Date**: Select month and year from dropdowns
   - **CVC**: Enter 3-4 digit security code
3. Watch the card preview update in real-time
4. Click "Confirm" to submit the form

## Validation Rules

- **Cardholder Name**: Required, minimum 3 characters, letters only
- **Card Number**: Required, exactly 16 digits, numbers only
- **Expiry Date**: Required, must not be in the past
- **CVC**: Required, minimum 3 digits, numbers only

## File Structure

```
interactive-card-form/
├── index.html    # Main HTML structure
├── styles.css    # Styling and responsive design
├── script.js     # Form validation and real-time updates
└── README.md     # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and transitions
- **Vanilla JavaScript**: DOM manipulation and form validation (no frameworks)

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Customization

You can easily customize the design by modifying:
- Card colors in `styles.css` (modify the gradient values)
- Validation rules in `script.js` (adjust the validation functions)
- Form fields in `index.html` (add or remove input fields)

## Future Enhancements

Potential improvements for this project:
- Add support for multiple card types (Visa, Mastercard, Amex)
- Implement Luhn algorithm for card number validation
- Add card type detection and logo display
- Include a dark mode toggle
- Add form submission to a backend API
