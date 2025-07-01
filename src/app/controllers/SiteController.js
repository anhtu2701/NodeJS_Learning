NguoiDung = require('../models/NguoiDung');

class SiteController {

    //  [GET] /
    async home(req, res) {
        // res.render('home');
        try {
            const users = await NguoiDung.getAll();
            res.render('home', { users })
        } catch (error) {
            res.status(500).send('Có lỗi khi lấy dữ liệu người dùng!');
        }
    }
    //  [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();


