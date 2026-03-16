function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (email === 'hong@example.com' && password === 'qwer1234') {
        location.href = 'user-list.html';
    } else {
        errorMsg.style.display = 'block';
    }
}

// Enter 키로도 로그인 가능
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') login();
});