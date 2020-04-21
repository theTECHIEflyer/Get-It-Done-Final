 module.exports = async function(req,res) {
    const userId = req.session.userId
    const allTasks = await Task.find({user: userId})

    res.view('pages/home',
    {allTasks}
    )
}