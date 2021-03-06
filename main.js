const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const queryString = require("query-string");

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === "PATCH") {
    req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Back up

// Custom Output
router.render = (req, res) => {
  const headers = res.getHeaders();

  const totalCountHeader = headers["x-total-count"];
  if (req.method === "GET" && totalCountHeader) {
    const paramsString = req._parsedOriginalUrl.query;
    const paramsObject = queryString.parse(paramsString);
    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(paramsObject._page) || 1,
        _limit: Number.parseInt(paramsObject._limit) || 10,
        _totalRows: totalCountHeader,
      },
    };

    return res.jsonp(result);
  }

  return res.jsonp(res.locals.data);
};

// Set port
const PORT = process.env.PORT || 8000;

// Use default router
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}/`);
});
