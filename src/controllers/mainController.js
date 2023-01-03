

module.exports = {
    main : (req, res) => {
        res.render('index', {
            texto : 'Home Page'
        })
    },
    about : (req, res) => {
        res.send('Bienvenido a la vista about!')
    },
    register : (req, res) => {
        res.send('Bienvenido a la vista register!')
    },
    processRegister : (req, res) => {
        res.render('index')
    },
    login : (req, res) => {
        res.render('login', {
            texto : `Login`
        })
    },
    processLogin : (req, res) => {
        res.render('index')
    }
}