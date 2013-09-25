georgelifchits.ca
-----------------

This is the source for my personal website, a node.js app using the Express framework.

To see how it works on your machine:

1. `node -v` to ensure your machine has node.js installed.
2. clone it
3. `npm install`
4. write a`config.js` file for your email credentials:

  ```javascript
  // config.js
  var config = {};
  config.email = "your@email.address";
  config.emailPassword = "your-password";
  module.exports = config;
  ```

5. `node app.js`
