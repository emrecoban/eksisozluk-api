import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors({
  origin: 'https://eksishot.vercel.app'
}));

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

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});
