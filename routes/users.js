var userRouter = (app) => {
    console.log('user router running');
    app.get('/users', function(req, res, next) {
        res.status(200).json({data: "Hi Stephen"})
    });
}

module.exports = userRouter;