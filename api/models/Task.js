module.exports = {
    attributes: {
        task: {
            type: 'string',
            required: true
        },
        body: {
            type: 'string',
            required: false
        },
        user: {
            model: 'user'
        }
    }
}