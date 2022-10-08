const db = require('../models/');
const { sequelize, User, Product, Address, Category, Cart, OrderItem, Order, Transaction, UrlImage ,ShopPath,ItemDetail,ShopCarousal} = require('../models/index');
const bcrypt = require('bcryptjs');
//=====================================================Imported Zone

//=====================================================register Zone
const setDefault = async (req, res, next) => {
    try {
        await userMock();
        await orderMock();
        await addressMock();
        await productMock();
        await categoryMock();
        await cartMock();
        await urlImageMock();
        await transactionMock();
        await orderItemMock();
        await shopMock();
        await itemDetailMock();
        await carousalMock();

        res.status(201).json({ "status": "success" })
    } catch (err) {
        next(err);
    }
}
const carousalMock= async () => {
    await ShopCarousal.create({ shopId:3, urlCarousal:"https://res.cloudinary.com/klothcloud/image/upload/v1665050958/1665050957094199789784.jpg" });
    await ShopCarousal.create({ shopId:3, urlCarousal:"https://res.cloudinary.com/klothcloud/image/upload/v1664950733/cld-sample-2.jpg" });

    await ShopCarousal.create({ shopId:3, urlCarousal:"https://res.cloudinary.com/klothcloud/image/upload/v1664950734/cld-sample-4.jpg" });

}

const userMock = async () => {
    const user1 = { username: "user1", password: "123456", cpassword: "123456", email: "user@kloth.com", phonenumber: "0915556556", firstName: "user", lastName: "name", role: 1 };
    const admin = { username: "admin", password: "1234", cpassword: "1234", email: "admin@kloth.com", phonenumber: "0955396656", firstName: "admin", lastName: "kloth", role: 0 };
    const seller1 = { username: "seller1", password: "123456", cpassword: "123456", email: "seller@kloth.com", phonenumber: "0915396656", firstName: "seller", lastName: "kloth", role: 2, shopName: "DAZY" }
    const user1Password = await bcrypt.hash(user1.password, 13);
    const adminPassword = await bcrypt.hash(admin.password, 13);
    const seller1Password = await bcrypt.hash(seller1.password, 13);
    await User.create({ ...user1, password: user1Password });
    await User.create({ ...admin, password: adminPassword });
    await User.create({ ...seller1, password: seller1Password });
}
const productMock = async () => {
    const product1 = { productName: "DAZY Cut Out Rib-knit Tee",brandName: "DAZY", description: "description", gender: "FEMALE", sellerId: 3 };
    const product2 = { productName: "SHEIN Argyle Print Tee", brandName: "SHEIN", description: "description1", gender: "FEMALE", sellerId: 3 };
    const product3 = { productName: "Letter Graphic Contrast Trim Tee", description: "description2", gender: "MALE", sellerId: 3 };
    await Product.create({ ...product1 });
    await Product.create({ ...product2 });
    await Product.create({ ...product3 });
}
const itemDetailMock = async () => {
    const item1 = {  price: "160", size: "xs", amount: "5", color: "black" ,productId: 1 };
    const item2 = {  price: "120", size: "m", amount: "11", color: "beige" ,productId: 1}
    const item3 = {  price: "150", size: "s", amount: "8", color: "white" ,productId: 1}
    const item4 = {  price: "140", size: "s", amount: "6", color: "red" ,productId: 2}
    const item5 = {  price: "130", size: "s", amount: "5", color: "blue" ,productId: 3}
    await ItemDetail.create({ ...item1 });
    await ItemDetail.create({ ...item2 });
    await ItemDetail.create({ ...item3 });
    await ItemDetail.create({ ...item4 });
    await ItemDetail.create({ ...item5 });
}
const addressMock = async () => {
    const address1 = { address: "585 Hampton Meadows Bedford 01730", userId: 1 };
    const address2 = { address: "1176 Thrash Trail Longview Texas 75601", userId: 2 };
    const address3 = { address: "3239 Hill Croft Farm Road Chico California 95926", userId: 3 };
    const address4 = { address: "2485 Evergreen Lane South Gate California 90280", userId: 1 };
    const address5 = { address: "881 Wilmar Farm Road Gaithersburg Maryland 20877", userId: 2 };
    const address6 = { address: "1505 Nicholas Street Topeka Kansas 66605", userId: 3 };
    await Address.create({ ...address1 });
    await Address.create({ ...address2 });
    await Address.create({ ...address3 });
    await Address.create({ ...address4 });
    await Address.create({ ...address5 });
    await Address.create({ ...address6 });
}
const categoryMock = async () => {
    const category1 = { categoryName: "T-shirt" ,productId : 1};
    const category2 = { categoryName: "Dresses" ,productId : 1};
    const category3 = { categoryName: "Pants" ,productId : 2};
    const category4 = { categoryName: "Skirts" ,productId : 3};
    const category5 = { categoryName: "Jeans" ,productId : 1};
    const category6 = { categoryName: "ActiveWear" ,productId : 3};
    await Category.create({ ...category1 });
    await Category.create({ ...category2 });
    await Category.create({ ...category3 });
    await Category.create({ ...category4 });
    await Category.create({ ...category5 });
    await Category.create({ ...category6 });
}
const cartMock = async () => {
    const cart1 = { price: "160", amount: "1", userId: 2, productId: 1 };
    const cart2 = { price: "120", amount: "3", userId: 2, productId: 2 };
    const cart3 = { price: "150", amount: "1", userId: 2, productId: 3 };
    await Cart.create({ ...cart1 });
    await Cart.create({ ...cart2 });
    await Cart.create({ ...cart3 });
}
const orderItemMock = async () => {
    const orderItem1 = { price: "160", amount: "1", orderId: 2, productId: 1, transactionId: 1 };
    const orderItem2 = { price: "160", amount: "1", orderId: 2, productId: 1, transactionId: 1 };
    const orderItem3 = { price: "160", amount: "1", orderId: 2, productId: 1, transactionId: 1 };
    await OrderItem.create({ ...orderItem1 });
    await OrderItem.create({ ...orderItem2 });
    await OrderItem.create({ ...orderItem3 });
}
const orderMock = async () => {
    const order1 = { date: "2022-01-01 00:00:00", buyerId: 1 };
    const order2 = { date: "2022-01-02 00:00:00", buyerId: 1 };
    const order3 = { date: "2022-01-03 00:00:00", buyerId: 1 };

    await Order.create({ ...order1 });
    await Order.create({ ...order2 });
    await Order.create({ ...order3 });
}
const transactionMock = async () => {
    const transaction1 = { total: "200", status: "pending", sellerId: 3, date: "2022-01-01 00:00:00" };
    const transaction2 = { total: "200", status: "pending", sellerId: 3, date: "2022-01-02 00:00:00" };
    const transaction3 = { total: "200", status: "pending", sellerId: 3, date: "2022-01-03 00:00:00" };
    await Transaction.create({ ...transaction1 });
    await Transaction.create({ ...transaction2 });
    await Transaction.create({ ...transaction3 });
}
const urlImageMock = async () => {
    const url1 = { urlImage: "http://www.google.com", productId: 1 };
    const url2 = { urlImage: "http://www.google.com", productId: 1 };
    const url3 = { urlImage: "http://www.google.com", productId: 1 };
    await UrlImage.create({ ...url1 });
    await UrlImage.create({ ...url2 });
    await UrlImage.create({ ...url3 });
}
const shopMock = async () => {
    await ShopPath.create({ shopPath:"DAZY",userId:3 });
}

//=====================================================Exported Zone
module.exports = { setDefault, userMock, productMock, addressMock, categoryMock, cartMock, orderItemMock, orderMock, transactionMock, urlImageMock ,shopMock,itemDetailMock};
