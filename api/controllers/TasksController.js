module.exports = {
    tasks: async function(req,res) {
        try {
            const tasks = await Task.find()
            res.send(tasks)
        } catch (err) {
            res.serverError(err.toString())
        }
    },
    
    create: async function(req,res) {
        const task = req.body.task
        const body = req.body.body
        const userId = req.session.userId
        console.log(userId)
        Task.create({task:task, body:body, user:userId}).exec(function(err) {
            if (err) {
                return res.serverError(err.toString())
            }
            return res.redirect('/home')
        })
    },

    findById: async function(req,res) {
        const taskId = req.param('taskId')
        const allTasks = await Task.find()
        const filteredTasks = allTasks.filter(p => {return p.id == taskId})
        if (filteredTasks.length > 0) {
            res.send(filteredTasks)
        } else {
            res.send('Failed to find Task with id of: ' + taskId)
        }
    },

    delete: async function(req, res) {
        const taskId = req.param('taskId')

        await Task.destroy({id: taskId})

        res.send('Deleting')
    },
}