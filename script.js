// Memastikan halaman memuat dengan benar
document.addEventListener('DOMContentLoaded', () => {
    // Data langsung dari backend (contoh statis untuk simulasi)
    const personalInfo = {
        aboutMe: "Halo! Saya adalah seorang pengembang web dengan passion di teknologi.",
        email: "zepunchan@gmail.com",
        phone: "+62 857-0225-3964"
    };

    // Mengisi elemen HTML dengan data
    document.getElementById('about-me').textContent = personalInfo.aboutMe;
    document.getElementById('email').textContent = personalInfo.email;
    document.getElementById('phone').textContent = personalInfo.phone;
});