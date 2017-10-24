const byteSize = require('byte-size')

module.exports = (app) => {
    app.get('/', function (req, res) {
            res.render("index")
        }),

        app.post('/upload', function (req, res) {
            try {
                if (!req.files.uploadedFile) {
                    res.status(400).send('No files were uploaded.');
                } else {
                    let uploadedFile = req.files.uploadedFile
                    res.send({
                        'name': uploadedFile.name,
                        "mimetype": uploadedFile.mimetype,
                        'size': byteSize(uploadedFile.data.length)
                    })
                }
            } catch (err) {
                res.send('error occured')
            }
        })
}