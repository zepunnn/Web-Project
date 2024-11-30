// Import modul Express
const express = require('express');

// Inisialisasi aplikasi Express
const app = express();

// Tentukan port server
const PORT = 3000;

// Rute default
app.get('/', (req, res) => {
    res.send('Selamat datang di server sederhana!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
