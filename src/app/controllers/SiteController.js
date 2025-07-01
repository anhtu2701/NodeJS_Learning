class SiteController {

    //  [GET] /
    home(req, res) {
        res.render('/');
    }
    //  [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();


