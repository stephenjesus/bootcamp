var indexRouter = (app) => {
    console.log('index router running');
    app.get('/', function(req, res, next) {
        res.status(200).json({data: "some data here index"})
    });
}

module.exports = indexRouter;