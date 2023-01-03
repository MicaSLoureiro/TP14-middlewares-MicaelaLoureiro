module.exports = {
    list : (req, res) => {
        res.render('index', {
            texto : `Bienvenido admin ${req.admin}`
        })
    },
    create : (req, res) => {
        res.render('index', {
            texto : `Bienvenido admin ${req.admin}`
        })
    },
    edit : (req, res) => {
        res.render('index', {
            texto : `Bienvenido admin ${req.admin}`
        })
    },
    crush : (req, res) => {
        res.render('index', {
            texto : `Bienvenido admin ${req.admin}`
        })
    }
}