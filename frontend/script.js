// Fetch data from the backend
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/info')
        .then(response => response.json())
        .then(data => {
            // Update the DOM with data from the server
            document.getElementById('about-me').textContent = data.aboutMe;
            document.getElementById('email').textContent = data.email;
            document.getElementById('phone').textContent = data.phone;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
