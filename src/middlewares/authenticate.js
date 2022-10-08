
const { sequelize, User ,ShopPath} = require('../models/');
const jwt = require('jsonwebtoken');


module.exports = async function authenticate(req, res, next) {

    try {
        const authorization = req?.headers?.authorization.startsWith('Bearer') ? req.headers.authorization : res.status(404).json({ message: 'you are not login' });
        const token = authorization.split(' ')[1] ? authorization.split(' ')[1] : res.status(400).json({ message: 'invalid token' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY ?? 'key');
        const user = await User.findOne({
            where: { id: decoded.id }, 
            attributes: { exclude: 'userId' },
            include: { model: ShopPath }
        })
        req.user = user;
        const nex = user ? next() : res.status(404).json({ message: 'you are not login' })
    } catch (err) {
        next(err)
    }

}
