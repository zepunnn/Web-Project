window.onload = async () => {
    // Teks animasi untuk header
    const typedHeader = "Selamat Datang!";
    const typedElement = document.getElementById("typed-header");
    
    let index = 0;
    const typingSpeed = 100; // Kecepatan ketikan dalam ms

    // Fungsi untuk animasi ketikan
    function typeWriter() {
        if (index < typedHeader.length) {
            typedElement.innerHTML += typedHeader.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Menjalankan animasi ketikan
    typeWriter();

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
