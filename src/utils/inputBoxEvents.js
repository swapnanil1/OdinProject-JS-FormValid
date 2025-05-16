export default function inputEvents() {
    const email = document.getElementById('mail')
    const passwordInput = document.getElementById('password')
    const form = document.getElementById('myForm')

    email.addEventListener('input', () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('I am expecting an email address!')
        } else {
            email.setCustomValidity('')
        }
    })

    function isPasswordStrong(password) {
        const strongPasswordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+.])[A-Za-z\d!@#$%^&*()\-+.]{8,}$/
        return strongPasswordPattern.test(password)
    }
    passwordInput.addEventListener('input', () => {
        const currentPassword = passwordInput.value
        if (currentPassword.length > 0 && !isPasswordStrong(currentPassword)) {
            if (passwordInput.validity.tooShort) {
                passwordInput.setCustomValidity(
                    `Password must be at least ${passwordInput.minLength} characters long.`
                )
            } else {
                passwordInput.setCustomValidity(
                    'Password must be 8+ chars and include uppercase, lowercase, digit, and special char (e.g., !@#$%).'
                )
            }
        } else {
            passwordInput.setCustomValidity('')
        }
    })

    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault()
        } else {
            console.log('Form is valid. Submitting...')
        }
    })
}
