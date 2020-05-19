module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "wx": "readonly",
        "App": "readonly",
        "Page": "readonly",
        "Component": "readonly",
        "getApp": "readonly",
        "getCurrentPages": 'readonly'
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": 0,
        "no-use-before-define": 0,
        "import/no-extraneous-dependencies": 0,
        "no-console": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "class-methods-use-this": 0
    }
};