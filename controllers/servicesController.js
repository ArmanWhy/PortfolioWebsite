const servicesController = (req, res)=>{
    const obj = {
        title : "services Page",
        landingPage:"Main landing Page",
        page_name: "Services"
    }
    res.render('services', obj, (err, services)=>{
        if(err) return res.send(err)
            res.send(services);
    })
}

module.exports = servicesController;