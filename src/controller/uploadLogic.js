const db = require('../models/');
const { sequelize, User, UrlImage, ItemDetail, Product, Category, ProductCategory } = require('../models/index');
const cloudinary = require('../utility/cloudinary');
const AppError = require('../utility/appError');
const fs = require('fs');
//=====================================================Imported Zone

//=====================================================register Zone
const createProduct = async (req, res, next) => {
    const { productName,price,amount, brandName,categoryName,size,gender,color, description, sellerId  } = req.body;
    console.log(req.body);
    try {
        const result = await sequelize.transaction( async (t)=> {
            if (!req.file) {
                throw new AppError('title or image is required', 400);
            }
    
            const data = { productId: req.body.productId };
            if (req.file) {
                data.image = await cloudinary.upload(req.file.path);
            }
            const productRes = await Product.create({ productName, brandName, description, gender, productImage: data.image ,sellerId }, { transaction: t })
            
            const itemRes = await ItemDetail.create({ price, size, amount, color, productId: productRes.id }, { transaction: t })
            
            const catReq = await Category.findOne({
                where: { [db.Sequelize.Op.and]: [{ shopId:sellerId }, { categoryName }] }
            }, { transaction: t });
            const proCatRes = await ProductCategory.create({ categoryId: catReq.id, productId: productRes.id }, { transaction: t })
    
            res.status(201).json({ "status": proCatRes })
            
        });
        
    } catch (err) {
        // await t.rollback();
        next(err);
    } finally {
        if (req.file) fs.unlinkSync(req.file.path)
    }
}

const putpicture = async (req, res, next) => {
    const { } = req.body;
    try {

        if (!req.file) {
            throw new AppError('title or image is required', 400);
        }

        const data = { productId: req.body.productId };
        if (req.file) {
            data.image = await cloudinary.upload(req.file.path);
        }


        await UrlImage.create({ "urlImage": data.image, productId: req.body.productId })
        res.status(201).json({ "status": data })
    } catch (err) {
        console.log("object");
        next(err);
    } finally {
        if (req.file) fs.unlinkSync(req.file.path)
    }
}
//=====================================================Exported Zone
module.exports = { putpicture, createProduct };
