const contactController = (req, res)=>{
    const obj = {
        title : "contact Page",
        landingPage:"Main Contact Page",
        page_name: "Contact"
    }
    res.render('contact', obj, (err, contact)=>{
        if(err) return res.send(err)
            res.send(contact);
    })
}

module.exports = contactController;