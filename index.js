const express = require('express');
const {keyboard, Key} = require("@nut-tree/nut-js");

keyboard.config.autoDelayMs = 0;

function start() {

  const app = express();
  const port = 3000;

  app.use(express.json());

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
    console.log(`Type app listening on port ${port}`);
  });
  
}

start();