module.exports = {
  hello: function(req, res) {
    if (!req.body.name) {
      res.send('An error occured: Name is a required parameter');
    }
  }
};

