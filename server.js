const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>สวัสดี! นี่คือเซิร์ฟเวอร์ พอร์ต 3000 ของคุณ</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
