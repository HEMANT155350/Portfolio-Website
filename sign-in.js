function toggleAuth() {
            document.getElementById('signin-box').classList.toggle('hidden');
            document.getElementById('signup-box').classList.toggle('hidden');
        }

// Sign Up Form Handling (Validation + Data Save)
document.querySelector('#signup-box form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelectorAll('input')[0].value;
    const email = this.querySelectorAll('input')[1].value;
    const password = this.querySelectorAll('input')[2].value;

    // 1. Check karein ki email pehle se exist toh nahi karta
    const existingUser = localStorage.getItem(email);

    if (existingUser) {
        alert('An account with this email already exists! Please Sign In.');
        return; // Execute aage nahi hoga
    }

    // 2. Clear email hai toh data localStorage me save karein
    const userData = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(userData));

    alert('Account created successfully on this device!');
    this.reset();
    toggleAuth(); // Form Reset karke Sign In view show karega
});

// Sign In Form Handling (Data Verification)
document.querySelector('#signin-box form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = this.querySelectorAll('input')[0].value;
    const password = this.querySelectorAll('input')[2].value;

    // LocalStorage se data verify karein
    const storedUser = localStorage.getItem(email);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert(`Welcome back, ${user.name}!`);
            window.location.href = "index.html"; // Homepage par redirect
        } else {
            alert('Incorrect password!');
        }
    } else {
        alert('No account found with this email!');
    }
});


