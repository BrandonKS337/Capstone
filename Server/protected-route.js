function isAuthenticated(req, res, next) {
    if (req.session.userId) {
      next();  // user is authenticated, proceed to the next middleware
    } else {
      res.status(401).send('Unauthorized');
    }
  }
  
  app.use('/api/protected-route', isAuthenticated);
  

export default isAuthenticated