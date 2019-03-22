module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    // TODO: to be removed after adding proptypes
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "document": false,
    "window": false
  }
};