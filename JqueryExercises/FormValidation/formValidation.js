//   Judje time limit

function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckBox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validateDiv = $('#valid');

    let allIsValid = true;

    companyCheckBox.change(function (e) {
        e.preventDefault();

        if (companyCheckBox.is(':checked')) {
            companyInfo.css('display', 'block');

        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.click(function (e) {
        e.preventDefault();

        validateForm();

        validateDiv.css('display', allIsValid ? 'block' : 'none');
        allIsValid = true;
    });

    function validateForm() {
        validateInputWithRegex(username, /^[a-zA-Z\d]{3,20}$/g);

        validateInputWithRegex(email, /^.+?@.+\..+$/g);

        if (password.val() === confirmPassword.val()) {
            validateInputWithRegex(password, /^\w{5,15}$/g);
            validateInputWithRegex(confirmPassword, /^\w{5,15}$/g);
        } else {
            allIsValid = false;

        }
        if (companyCheckBox.is(':checked')) {
            validateCompanyNumber();

        }
    }

    function validateInputWithRegex(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', '2px solid red');
            allIsValid = false;
        }
    }

    function validateCompanyNumber() {
        let numValue = +companyNumber.val();

        if (numValue >= 1000 && numValue <= 9999) {
            companyNumber.css('border', 'none');
        } else {
            companyNumber.css('border', '2px solid red');
            allIsValid = false;
        }
    }
}

//^[a-zA-Z\d]{3,20}$        username regex
//^[a-zA-Z\d_]{5,15}$       password regex
//^.+?@.+\..+$              emial regex