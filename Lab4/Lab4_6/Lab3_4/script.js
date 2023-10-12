document.addEventListener('DOMContentLoaded', function() {
    var fullNameInput = document.querySelector('input[name="full-name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var passwordInput = document.querySelector('input[name="password"]');

    fullNameInput.addEventListener('blur', validateFullName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);

    function validateFullName() {
        var fullName = fullNameInput.value;
        var fullNameError = document.getElementById('full-name-error');

        if (fullName === '') {
            fullNameError.textContent = 'Vui lòng nhập họ và tên';
        } else {
            fullNameError.textContent = '';
        }
    }

    function validateEmail() {
        var email = emailInput.value;
        var emailError = document.getElementById('email-error');

        if (email === '') {
            emailError.textContent = 'Vui lòng nhập địa chỉ email';
        } else {
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        var password = passwordInput.value;
        var passwordError = document.getElementById('password-error');

        if (password === '') {
            passwordError.textContent = 'Vui lòng nhập mật khẩu';
        } else {
            passwordError.textContent = '';
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var dayInput = document.querySelector('input[name="day"]');
    var monthInput = document.querySelector('input[name="month"]');
    var yearInput = document.querySelector('input[name="year"]');
    var maleInput = document.querySelector('input[name="male"]');
    var femaleInput = document.querySelector('input[name="female"]');
    var cardNumberInput = document.querySelector('input[name="card-number"]');
    var cardCVCInput = document.querySelector('input[name="card-cvc"]');
    var termsCheckbox = document.querySelector('input[name="terms"]');

    dayInput.addEventListener('blur', validateDay);
    monthInput.addEventListener('blur', validateMonth);
    yearInput.addEventListener('blur', validateYear);
    maleInput.addEventListener('blur', validateGender);
    femaleInput.addEventListener('blur', validateGender);
    cardNumberInput.addEventListener('blur', validateCardNumber);
    cardCVCInput.addEventListener('blur', validateCardCVC);
    termsCheckbox.addEventListener('change', validateTerms);
    function validateDay() {
        var day = dayInput.value;
        // Kiểm tra giá trị của day
        // Nếu không hợp lệ, hiển thị thông báo
    }

    function validateMonth() {
        var month = monthInput.value;
        // Kiểm tra giá trị của month
        // Nếu không hợp lệ, hiển thị thông báo
    }

    function validateYear() {
        var year = yearInput.value;
        // Kiểm tra giá trị của year
        // Nếu không hợp lệ, hiển thị thông báo
    }

    function validateGender() {
        var male = maleInput.checked;
        var female = femaleInput.checked;
        // Kiểm tra giá trị của male và female
        // Nếu không hợp lệ, hiển thị thông báo
    }

    function validateCardNumber() {
        var cardNumber = cardNumberInput.value;
        // Kiểm tra giá trị của cardNumber
        // Nếu không hợp lệ, hiển thị thông báo
    }

    function validateCardCVC() {
        var cardCVC = cardCVCInput.value;
        // Kiểm tra giá trị của cardCVC
        // Nếu không hợp lệ, hiển thị thông báo
    }

    function validateTerms() {
        var termsAccepted = termsCheckbox.checked;
        // Kiểm tra giá trị của termsAccepted
        // Nếu không hợp lệ, hiển thị thông báo
    }
});