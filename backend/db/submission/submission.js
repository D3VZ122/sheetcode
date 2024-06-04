const express = require("express");


const router = express.Router();


const axios  = require("axios");



router.post("/test", async (req, res) => {
    const { code, inputs,language } = req.body;

    try {
        const resp = await axios.post("http://localhost:4001/run/"+language, { code, inputs });
        const data = resp.data;
        return res.json({ data });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error running code', error: error.message });
    }
});



module.exports = router;
