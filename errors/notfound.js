const notFound = (req, res, next) => {
  res.json("routes not found");
};

module.exports = notFound;
