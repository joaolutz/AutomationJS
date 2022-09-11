const express = require('express');
const path = require('path');
const {keyboard, Key} = require("@nut-tree/nut-js");

//setting the delay between keys (fastest is the default)
keyboard.config.autoDelayMs = 0;

function start() {

  const app = express();
  const port = 3000;

  //setting the json type as the default body parser
  app.use(express.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/host.html'));
  });

  app.post('/type', (req, res) => {
    (async () => {
      console.log(req.body.code);
      await keyboard.type(req.body.code);
      if(req.body.sendEnter) {
        await keyboard.type(Key.Enter);
      }
      res.send(`"${req.body.code}" sent to Keyboard input`);
    })();
  });

  app.listen(port, () => {
    console.log(`Type app listening on http://localhost:${port}`);
  });
  
}

start();
