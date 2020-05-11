import React from 'react';
import { renderToString } from 'react-dom/server';

import router from '../routes/router';

export default () => async (req, res) => {
  const Component = await router.resolve({pathname: '/'});

  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Title</title>
        <link rel="stylesheet" type="text/css" href="/main.css">
    </head>
    <body>
      <div id="root">${renderToString(<Component />)}</div> 
      <script src="vendor-bundle.js"></script>
      <script src="main-bundle.js"></script>
    </body>
    </html>`)
};
