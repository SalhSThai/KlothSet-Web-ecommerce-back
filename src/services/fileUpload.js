/* const formidable = require('formidable');

function fileUpload(req, res, next) {
    const filename = (name, ext, part, form) =>part.originalFilename;
    const form = formidable({multiples: true,uploadDir: `${__dirname}/../uploads`,encoding: 'utf-8',filename});

    form.parse(req, (err, fields, files) => {
        err?next(err):res.json({ fields, files });
    });
}

module.exports = fileUpload

 */