// const { title } = require("process");

const aboutController = (req, res)=>{
    const obj = {
        title : "About Page",
        landingPage:"Main About Page",
        page_name: "About"
    }
    res.render('about', obj, (err, about)=>{
        if(err) return res.send(err)
            res.send(about);
    })
}

module.exports = aboutController;