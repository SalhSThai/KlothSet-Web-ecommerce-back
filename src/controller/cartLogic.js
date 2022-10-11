const db = require('../models');
const { sequelize, User, ShopPath, Product, Category, ShopCarousal, UrlImage, ItemDetail, ProductCategory, Cart } = require('../models/index');
const cloudinary = require('../utility/cloudinary');
const AppError = require('../utility/appError');
const fs = require('fs');
//=====================================================Imported Zone

//=====================================================register Zone
const buyProduct = async (req, res, next) => {
    const { productName, price, amount, brandName, categoryName, size, gender, color, description, sellerId } = req.body;
    console.log(req.body);
    try {
        const cartBuy = await sequelize.transaction(async (t) => {
            if (!req.file) {
                throw new AppError('title or image is required', 400);
            }

            const data = { productId: req.body.productId };
            if (req.file) {
                data.image = await cloudinary.upload(req.file.path);
            }
            const productRes = await Product.create({ productName, brandName, description, gender, productImage: data.image, sellerId }, { transaction: t })

            const itemRes = await ItemDetail.create({ price, size, amount, color, productId: productRes.id }, { transaction: t })

            const catReq = await Category.findOne({
                where: { [db.Sequelize.Op.and]: [{ shopId: sellerId }, { categoryName }] }
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




const getProductOut = async (req, res, next) => {
    const { productId, userId } = req.params;
    try {
        await Cart.destroy({
            where: { userId },
        });

        res.status(201).json(data)
    } catch (err) {
        next(err);
    }
}
const fetchAllProduct = async (req, res, next) => {
    const {userId} = req.params;
   
    try {

        const addProduct = await Cart.findAll({
            where: { userId },
            include: [{ model: ItemDetail, include: Product }]
        });

        res.status(201).json(addProduct)
    } catch (err) {
        next(err);
    }
}
const addCartProduct = async (req, res, next) => {

    const { itemId, userId, price } = req.body;
    try {
        const data = await Cart.findOne({
            where: { [db.Sequelize.Op.and]: [{ userId }, { itemId }] },
        });
        if (!data) {

            const update = await Cart.create({ userId, itemId, amount: 1, price })

            const newCart = await Cart.findAll({
                where: { userId },
                include: [{ model: ItemDetail, include: Product }]

            });

            res.status(201).json(newCart)

        }
        else {
            const update = await Cart.update({ ...data, amount: data?.amount + 1 },
                { where: { [db.Sequelize.Op.and]: [{ userId }, { itemId }] } },
            );

            const addProduct = await Cart.findAll({
                where: { userId },
                include: [{ model: ItemDetail, include: Product }]
            });
            res.status(201).json(addProduct)

        }


        // await UrlImage.create({ "urlImage": data.image, productId: req.body.productId })
    } catch (err) {
        console.log("object");
        next(err);
    } finally {
        // if (req.file) fs.unlinkSync(req.file.path)
    }
}
//=====================================================Exported Zone
module.exports = { fetchAllProduct, getProductOut, addCartProduct, buyProduct };
