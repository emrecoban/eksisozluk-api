import express from "express";
import fetch from "node-fetch";

const app = express();

app.get('/getEntry', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = app;
