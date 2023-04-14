import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import imageToBase64 from "image-to-base64";

const app = express();
app.use(cors({
  origin: ['https://eksishot.vercel.app', 'http://localhost:5173']
}));

app.get('/getEntry', async (req, res) => {
  try {
    const url = req.query.url;
    console.log("GELEN url => ", url.includes("ekstat"))
    if(url.includes("ekstat")){
      imageToBase64(url)
      .then(
          (response) => {
              res.send(`data:image/jpeg;base64,${response}`);
          }
      )
      .catch(
          (error) => {
              console.log(error);
          }
      )
    }else{
      const response = await fetch(url);
      const html = await response.text();
      res.send(html);
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
