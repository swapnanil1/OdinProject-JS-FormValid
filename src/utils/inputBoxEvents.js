export default function inputEvents() {
    const email = document.getElementById('mail')
    const passwordInput = document.getElementById('password')
    const form = document.getElementById('myForm')
    const cPasswordInput = document.getElementById('cPassword')

    email.addEventListener('input', () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('I am expecting an email address!')
        } else {
            email.setCustomValidity('')
        }
    })

    function isPasswordStrong(password) {
        const strongPasswordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/
        return strongPasswordPattern.test(password)
    }

    passwordInput.addEventListener('input', () => {
        const currentPassword = passwordInput.value
        if (currentPassword.length < 0 || !isPasswordStrong(currentPassword)) {
            if (passwordInput.validity.tooShort) {
                passwordInput.setCustomValidity(
                    `Password must be at least ${passwordInput.minLength} characters long.`
                )
            } else {
                passwordInput.setCustomValidity(
                    'Password must be 8+ chars and include uppercase, lowercase, digit, and special char (e.g., !@#$%).'
                )
            }
            // SET CONFIRM PASSWORD SHOW OR NOT
            if (
                cPasswordInput.classList.contains(
                    'relative',
                    'scale-y-100',
                    'opacity-100',
                    'origin-top'
                )
            ) {
                cPasswordInput.classList.add(
                    'absolute',
                    'scale-y-0',
                    'opacity-0',
                    'origin-bottom'
                )
                cPasswordInput.classList.remove(
                    'relative',
                    'scale-y-100',
                    'opacity-100',
                    'origin-top'
                )
            }
        } else {
            passwordInput.setCustomValidity('')
            if (
                cPasswordInput.classList.contains(
                    'absolute',
                    'scale-y-0',
                    'opacity-0',
                    'origin-bottom'
                )
            ) {
                cPasswordInput.classList.add(
                    'relative',
                    'scale-y-100',
                    'opacity-100',
                    'origin-top'
                )
                cPasswordInput.classList.remove(
                    'absolute',
                    'scale-y-0',
                    'opacity-0',
                    'origin-bottom'
                )
            }
        }
    })

    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault()
        } else if (passwordInput.value !== cPasswordInput.value) {
            alert('Passwords Not matching')
            e.preventDefault()
        } else {
            console.log('Form is valid. Submitting...')
        }
    })
}
