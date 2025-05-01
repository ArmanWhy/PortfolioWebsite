const portfolioController = (req, res)=>{
    const obj = {
        title : "Portfolio Page",
        landingPage:"Main landing Page",
        page_name: "Portfolio"
    }
    res.render('portfolio', obj, (err, portfolio)=>{
        if(err) return  res.send(err)
            res.send(portfolio);
    })
}

module.exports = portfolioController;