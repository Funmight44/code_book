const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data/db.json'));
const middlewares = jsonServer.defaults();

// Bind the authentication routes
app.db = router.db;
app.use(middlewares);
app.use(auth);
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});