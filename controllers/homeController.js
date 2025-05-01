// const { title } = require("process");

const homeController = (req, res)=>{
    const obj = {
        title : "Home Page",
        landingPage:"Main landing Page",
        page_name: "Home"
    }
    res.render('home', obj, (err, home)=>{
        if (err) res.send(err)
        res.send(home) ;
    })
}

module.exports = homeController;