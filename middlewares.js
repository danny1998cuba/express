let uniqueString
let url
import('unique-string').then(e => uniqueString = e.default)
import('url-exist-sync').then(e => url = e.default)

let uris = []

function generateShort(req, res, next) {
    let short = uniqueString()
    if (uris.filter(el => el.short === short).length == 0) {
        req.short = short
        next()
    } else {
        generateShort(req, res, next)
    }
}

function validateUrl(req, res, next) {
    if (url(req.body.url)) {
        let uri = uris.find(el => el.full === req.body.url)
        if (uri) {
            console.log('Already registered');
            res.json({ original_url: uri.full, short_url: uri.short })
        } else {
            console.log('It\'s new');
            next()
        }
    } else {
        res.json({ error: 'invalid url' })
    }
}

module.exports = {
    generateShort,
    validateUrl,
    uris
}