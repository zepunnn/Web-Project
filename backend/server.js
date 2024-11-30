const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API
app.get('/api/info', (req, res) => {
    res.json({
        aboutMe: "Halo! Saya adalah seorang pengembang web dengan passion di teknologi.",
        email: "zepunchan@gmail.com",
        phone: "+62 857-0225-3964"
    });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
