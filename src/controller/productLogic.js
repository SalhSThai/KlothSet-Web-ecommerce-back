const db = require('../models');
const { sequelize, User, ShopPath ,Product,Category,ShopCarousal,UrlImage,ItemDetail, ProductCategory } = require('../models/index');
const cloudinary = require('../utility/cloudinary');
const AppError = require('../utility/appError');
const fs = require('fs');
//=====================================================Imported Zone

//=====================================================register Zone
const createProduct = async (req, res, next) => {
    const { productName, price, amount, brandName, categoryName, size, gender, color, description, sellerId } = req.body;
    console.log(req.body);
    try {
        const result = await sequelize.transaction(async (t) => {
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

const putpicture = async (req, res, next) => {
    const {userId,productId } = req.body;
    try {

        const data2 = await Cart.findOne({
            where: { [db.Sequelize.Op.and]: [{ userId }, { productId }] },
        });



        res.status(201).json({ "status": data2 })
    } catch (err) {
        next(err);
    } finally {
    }
}


const deletedProduct = async (req, res, next) => {
    const { productId ,userId} = req.params;
    try {
        await Product.destroy({
            where: { id: productId },
        });
        const data = await User.findOne({
            where: { id: userId },
            include: [ShopPath, { model: Product, include: [{ model: Category, through: { attributes: [] } }, { model: UrlImage }, { model: ItemDetail }] }, Category, ShopCarousal]
        });

        res.status(201).json(data)
    } catch (err) {
        next(err);
    }
}


const editProduct = async (req, res, next) => {
    const {
        subName, price, size, amount,
        color, sellerId, productId, itemDetailId, discount,
    } = req.body
    try {

       const updateData = {subName, price, size, amount, color,discount,productId}
        const data2 = await ItemDetail.update(updateData,{
            where: { id: itemDetailId }
        });

        res.status(201).json(data2)
    } catch (err) {
        next(err);
    }
}
//=====================================================Exported Zone
module.exports = { editProduct,deletedProduct,putpicture,createProduct};
