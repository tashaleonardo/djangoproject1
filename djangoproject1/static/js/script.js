function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        shakeForm();
        return false;
    }

    if (username === 'admin' && password === '1234') {
        const loginContainer = document.querySelector('.login-container');
        loginContainer.style.transform = 'scale(1.05)';
        loginContainer.style.boxShadow = '0 0 30px rgba(162, 213, 242, 0.8)';
        
        setTimeout(() => {
            alert('Login successful!');
            loginContainer.style.transform = 'scale(1)';
            loginContainer.style.boxShadow = '0 15px 35px rgba(255, 182, 193, 0.4)';
        }, 300);
        
        return true;
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        shakeForm();
        return false;
    }
}

function shakeForm() {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        loginContainer.style.animation = '';
    }, 500);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});