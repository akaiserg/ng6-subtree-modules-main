const response = require('./responses/response-ok.json');
module.exports = (req, res, next) => {
    return res.jsonp(response);
};