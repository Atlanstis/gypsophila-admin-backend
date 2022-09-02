module.exports = () => {
  return (err, req, res, next) => {
    console.log(err);
    res.status(200).json({
      code: 500,
      message: err.message,
    });
  };
};
