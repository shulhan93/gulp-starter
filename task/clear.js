const del = require("del");

// конфигурация
const path = require("../config/path.js");

// удаление
const clear = () => {
    return del(path.root);
};

module.exports = clear;
