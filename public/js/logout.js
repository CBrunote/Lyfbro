const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
        localStorage.clear()
        document.location.replace('/login');
    } else {
        // alert(response.statusText);
        alert('failed to log out')
    }
};

document.querySelector('#logout').addEventListener('click', logout) 