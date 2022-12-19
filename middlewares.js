exports.Logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
}

exports.now = (req, res, next) => {
    req.time = new Date().toString()
    next()
}