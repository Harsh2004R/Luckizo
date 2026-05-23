const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {

      return res.status(401).json({
        message: "User not authenticated",
        user:req.user
      });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `${req.user.role} cannot access this route only admin allowed`,
      });
    }
    next();
  };
};

export default roleMiddleware;
