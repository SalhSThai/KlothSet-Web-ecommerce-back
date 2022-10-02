module.exports = errFn = (err, req, res, next) => {
    console.log(err);
    let statusCode = err.name === 'ValidationError' ? 400 : 500;
    res.status(statusCode).json({message:err.message});
}