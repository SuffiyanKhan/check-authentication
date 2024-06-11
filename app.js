import { RecaptchaVerifier, auth, signInWithPhoneNumber } from "./firbase.js";

const phoneNumberInput = document.getElementById('phone-number');
const sendCodeButton = document.getElementById('send-code');
const verificationCodeInput = document.getElementById('verification-code');
const verifyCodeButton = document.getElementById('verify-code');

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'send-code', {
    'size': 'invisible',
    'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    }
});

// Send verification code
sendCodeButton.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            console.log(error.message)
            grecaptcha.reset(window.recaptchaWidgetId);

            // Or, if you haven't stored the widget ID:
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
            });
            // ...
        });

});

// Verify the code
verifyCodeButton.addEventListener('click', () => {
    const code = verificationCodeInput.value;
    confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        alert('Phone number verified!');
        console.log(user);
    }).catch((error) => {
        console.error("Error during confirmation", error);
        alert('Error during confirmation: ' + error.message);
    });
});