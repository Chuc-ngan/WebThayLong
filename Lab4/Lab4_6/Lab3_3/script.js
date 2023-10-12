document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.sign-in form');
    form.addEventListener('submit', function(event) {
        var username = document.querySelector('input[name="username"]').value;
        var password = document.querySelector('input[name="password"]').value;
        var valid = true;

        // Kiểm tra username
        if (username === '') {
            var usernameError = document.getElementById('username-error');
            usernameError.textContent = 'Vui lòng nhập tên đăng nhập hoặc email';
            valid = false;
        } else {
            document.getElementById('username-error').textContent = '';
        }

        // Kiểm tra password
        if (password === '') {
            var passwordError = document.getElementById('password-error');
            passwordError.textContent = 'Vui lòng nhập mật khẩu';
            valid = false;
        } else {
            document.getElementById('password-error').textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});