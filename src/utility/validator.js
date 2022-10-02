const { readCat } = require("../services/fileCatagory");
const { ValidationError } = require("./error");

exports.validateCategory = (title,type) =>{
    if (!title || !title.trim()) {
        throw new ValidationError('title is required')
    }
    if (!type || !['expense','income'].includes(type.toLowerCase())) {
        throw new ValidationError('type must be expense or income')
    }
}

exports.validateTransection = (payee,amount,date,productID,oldCategory) =>{

    if (!payee || !payee.trim()) {
        return res.status(400).json({ message: 'title is required' });
    }
    if (typeof amount !== 'number') {
        return res.status(400).json({ message: 'completed must be a number' });
    }
    if (date !== undefined && isNaN(new Date(date).getTime())) {
        return res.status(400).json({ message: 'invalid due date' });
    }
    if(productID && !oldCategory.find(item=>item.id===productID)){
        return res.status(400).json({ message: 'invalid productID' });
    }

}


