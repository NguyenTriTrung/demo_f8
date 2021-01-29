class SiteController {
    search(req, res) {
        res.render('search');
    }
    show(req, res) {
        res.send('show');
    }
}

module.exports = new SiteController();
