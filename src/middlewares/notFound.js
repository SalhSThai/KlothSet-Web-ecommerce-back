module.exports = notFound = (req,res,next)=>{
    res.status(404).send(`<h1>404:ERROR</h1>`);
}