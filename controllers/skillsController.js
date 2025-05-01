const skillsControler = (req, res)=>{
    const obj = {
        title : "Skills Page",
        landingPage:"Main landing Page",
        page_name: "Skills"
    }
    res.render('skills', obj, (err, skills)=>{
        if(err) return res.send(err)
            res.send(skills);
    })
}

module.exports = skillsControler;