const name = document.querySelector('#name')
const password = document.querySelector('#password')
const passwordCheck = document.querySelector('#passwordCheck')
const form = document.querySelector('#form')
const errorElement = document.querySelector('#error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6 || password.value.length > 20) {
        messages.push('Password must be longer than 6 characters, but less than 20')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (password.value != passwordCheck.value) {
        messages.push('Passwords must match')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})