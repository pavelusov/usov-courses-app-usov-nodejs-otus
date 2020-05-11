import React from "react";
import { renderToString } from "react-dom/server";
const App = require('../components/App').default;
export default () => (req, res) => {
  const html = renderToString(
    <App />
  );


  res.send(`<html lang="en">
    <head>
        <title>Title</title>
        <link rel="stylesheet" type="text/css" href="/main.css">
    </head>
    <body>
      <div id="root">${html}</div>
      <div class="profile">
          <h1 class="title">Pavel build</h1>
      </div>
      <script src="vendor-bundle.js"></script>
      <script src="main-bundle.js"></script>
    </body>
    </html>`)
};
