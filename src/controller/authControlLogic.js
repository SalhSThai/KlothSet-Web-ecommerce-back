const db = require('../models/');
const {sequelize,User} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//=====================================================Imported Zone

//=====================================================register Zone
const register = async (req, res, next) => {
    try {
        const { username, password,cpassword, email,phonenumber,firstName,lastName } = req.body
        password!=cpassword ? res.json({ "password": "unmatch"}):null;
        const hashed = await bcrypt.hash(password, 13);
        await User.create({username,email,password:hashed,phonenumber,firstName,lastName});

        res.status(201).json({ "status": "success" })
    } catch (err) {
        next(err);
    }
}
const changePassword = async (req, res, next) => {
    try {
        const { username, password,confirmPassword, email } = req.body;
        password!=confirmPassword ? res.json({ "password": "unmatch"}):null;
        const hashed = await bcrypt.hash(password, 13);
        await User.update({password:hashed},{where:{username}});
        res.status(200).json({ update: username })
    } catch (err) {
        next(err);
    }

}
const forgetPassword = async (req, res, next) => {
    try {
        const { username, password,confirmPassword, email } = req.body;
        res.status(200).json({ update: "newregister" })

    } catch (err) {
        next(err);
    }

}
//=====================================================DELETE Zone
const registerDelete = async (req, res, next) => {
    try {
        const { username, password,confirmPassword, email } = req.body;
        res.status(200).json({ message: 'Success delete' })

    } catch (err) {
        next(err);
    }
}
//=====================================================login Zone
const login = async (req, res, next) => {
    try {
        const { username, password, } = req.body
        
        const data = await User.findOne({where:{[db.Sequelize.Op.or]:[{username},{email:username}]}});
        !data ? res.status(400).json({message:'invalid username or password'}):null;
        const payload = {
            username,
            id: data.id,
            email:data.email
        }
        const result = await bcrypt.compare(password, data.password);
        !result ? res.status(201).json({ "login_status": "invalid username or password"  }) :null ;
        const token = jwt.sign(payload,String(process.env.JWT_SECRET_KEY ?? 'yek'),{algorithm:'HS384',expiresIn:'30d'});
        res.status(201).json({ 'status':'success',token ,data});
    } catch (err) {
        next(err);
    }
}


//=====================================================Exported Zone
module.exports = { login, register, changePassword, registerDelete ,forgetPassword};
