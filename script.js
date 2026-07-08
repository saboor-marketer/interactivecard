// DOM Elements
const cardForm = document.getElementById('cardForm');
const cardHolder = document.getElementById('cardHolder');
const cardNumber = document.getElementById('cardNumber');
const expiryMonth = document.getElementById('expiryMonth');
const expiryYear = document.getElementById('expiryYear');
const cvc = document.getElementById('cvc');

const cardNumberDisplay = document.getElementById('cardNumberDisplay');
const cardHolderDisplay = document.getElementById('cardHolderDisplay');
const cardExpiryDisplay = document.getElementById('cardExpiryDisplay');
const cvvDisplay = document.getElementById('cvvDisplay');
const card = document.querySelector('.card');

// Error message elements
const cardHolderError = document.getElementById('cardHolderError');
const cardNumberError = document.getElementById('cardNumberError');
const expiryMonthError = document.getElementById('expiryMonthError');
const expiryYearError = document.getElementById('expiryYearError');
const cvcError = document.getElementById('cvcError');

// Real-time updates
cardHolder.addEventListener('input', (e) => {
    const value = e.target.value.toUpperCase();
    cardHolderDisplay.textContent = value || 'YOUR NAME';
    clearError(cardHolder, cardHolderError);
});

cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = value;
    
    const displayValue = value || '0000 0000 0000 0000';
    cardNumberDisplay.textContent = displayValue;
    clearError(cardNumber, cardNumberError);
});

expiryMonth.addEventListener('change', () => {
    updateExpiryDisplay();
    clearError(expiryMonth, expiryMonthError);
});

expiryYear.addEventListener('change', () => {
    updateExpiryDisplay();
    clearError(expiryYear, expiryYearError);
});

cvc.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    cvvDisplay.textContent = value || '•••';
    clearError(cvc, cvcError);
});

cvc.addEventListener('focus', () => {
    card.classList.add('flipped');
});

cvc.addEventListener('blur', () => {
    card.classList.remove('flipped');
});

function updateExpiryDisplay() {
    const month = expiryMonth.value || 'MM';
    const year = expiryYear.value || 'YY';
    cardExpiryDisplay.textContent = `${month}/${year}`;
}

// Error handling
function showError(input, errorElement, message) {
    input.parentElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('visible');
}

function clearError(input, errorElement) {
    input.parentElement.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('visible');
}

// Validation
function validateCardHolder(value) {
    if (!value.trim()) {
        return 'Cardholder name is required';
    }
    if (value.trim().length < 3) {
        return 'Cardholder name must be at least 3 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
        return 'Cardholder name can only contain letters';
    }
    return '';
}

function validateCardNumber(value) {
    const cleanedValue = value.replace(/\s/g, '');
    if (!cleanedValue) {
        return 'Card number is required';
    }
    if (cleanedValue.length < 16) {
        return 'Card number must be 16 digits';
    }
    if (!/^\d+$/.test(cleanedValue)) {
        return 'Card number can only contain digits';
    }
    return '';
}

function validateExpiry(month, year) {
    if (!month || !year) {
        return 'Expiry date is required';
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const expYear = parseInt(year);
    const expMonth = parseInt(month);
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        return 'Card has expired';
    }
    return '';
}

function validateCVC(value) {
    if (!value) {
        return 'CVC is required';
    }
    if (value.length < 3) {
        return 'CVC must be at least 3 digits';
    }
    if (!/^\d+$/.test(value)) {
        return 'CVC can only contain digits';
    }
    return '';
}

// Form submission
cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate card holder
    const cardHolderErrorText = validateCardHolder(cardHolder.value);
    if (cardHolderErrorText) {
        showError(cardHolder, cardHolderError, cardHolderErrorText);
        isValid = false;
    }
    
    // Validate card number
    const cardNumberErrorText = validateCardNumber(cardNumber.value);
    if (cardNumberErrorText) {
        showError(cardNumber, cardNumberError, cardNumberErrorText);
        isValid = false;
    }
    
    // Validate expiry
    const expiryErrorText = validateExpiry(expiryMonth.value, expiryYear.value);
    if (expiryErrorText) {
        if (!expiryMonth.value) {
            showError(expiryMonth, expiryMonthError, 'Month is required');
        }
        if (!expiryYear.value) {
            showError(expiryYear, expiryYearError, 'Year is required');
        }
        if (expiryMonth.value && expiryYear.value && expiryErrorText) {
            showError(expiryMonth, expiryMonthError, expiryErrorText);
        }
        isValid = false;
    }
    
    // Validate CVC
    const cvcErrorText = validateCVC(cvc.value);
    if (cvcErrorText) {
        showError(cvc, cvcError, cvcErrorText);
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        cardForm.reset();
        cardHolderDisplay.textContent = 'YOUR NAME';
        cardNumberDisplay.textContent = '0000 0000 0000 0000';
        cardExpiryDisplay.textContent = 'MM/YY';
        cvvDisplay.textContent = '•••';
    }
});
