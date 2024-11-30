window.onload = async () => {
    // Pastikan hanya ada satu animasi "Selamat Datang!"
    const typedHeader = "Selamat Datang!";
    const typedElement = document.querySelector("header h1");
    typedElement.textContent = typedHeader; // Set langsung teksnya

    try {
        // Mengambil data tentang diri dan kontak dari backend
        const response = await fetch('/api/info');
        const data = await response.json();

        // Menampilkan data yang diterima pada bagian yang sesuai
        document.getElementById('about-me').textContent = data.aboutMe;
        document.getElementById('email').textContent = data.email;
        document.getElementById('phone').textContent = data.phone;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
