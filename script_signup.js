function validateAndSubmit() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(!firstName || !lastName || !email || !password || !confirmPassword) {
        window.alert("Please fill in all fields");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        window.alert("Please enter a valid email address");
        return;
    }
    if(password !== confirmPassword) {
        window.alert("Passwords do not match");
        return;
    }
    
    window.alert("Sign up successful! Please login with your credentials.");
    window.location.href = "login.html";
}