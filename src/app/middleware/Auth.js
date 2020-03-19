const basicAuth = require('basic-auth');
const secrets = require('../../../secrets');

class Auth {
    terminal(req, res, next) {
        const user = basicAuth(req);
        if(!user) return res.status(401).json({err: 'Unauthenticated'});
        const {name, pass} = user;
        if(name !== 'terminal' || secrets.terminal !== pass) return res.status(401).json({err: 'Unauthenticated'});
        req.user = 'terminal';
        return next();
    }

    portal(req, res, next) {
        const user = basicAuth(req);
        if(!user) return res.status(401).json({err: 'Unauthenticated'});
        const {name, pass} = user;
        if(name !== 'portal' || secrets.portal !== pass) return res.status(403).json({err: 'Forbidden'});
        req.user = 'portal';
        return next();
    }
}

module.exports = new Auth();