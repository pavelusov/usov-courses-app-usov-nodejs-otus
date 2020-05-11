import React, { Fragment } from 'react';

export default function HTML({ children }) {

  return (
  <html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
  </head>
  <body>
  <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
  <script src="/vendor-bundle.js" />
  <script src="/main-bundle.js" />
  </body>
  </html>
  );
};
