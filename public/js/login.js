const login = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
        // see if this is the right route to send to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": 'application/json'},
        });
        console.log(response)

        // if login is successful redirect them to the home page? can change if need to.
        if (response.ok) {
            const jsonData = await response.json()
            localStorage.setItem("User", JSON.stringify(jsonData.user))
            document.location.replace('/')
        } else { 
            alert(response.statusText);
        }
    }
};

const signUp = async (event) => {
    event.preventDefault();

    // const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if(email && password) {
        // check if this is the right API end point to send to
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        // if signup is successful redirect them to the home page? can change if need to.
        if (response.ok) {
            const jsonData = await response.json()
            localStorage.setItem("User", JSON.stringify(jsonData.user))
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('click', login)
document.querySelector('.signup-form').addEventListener('click', signUp)