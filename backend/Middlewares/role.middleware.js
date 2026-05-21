const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!req.user.role.includes(roles)) {
      return res.status(401).json({
        message: `${req.user.role} can not access this route...`,
      });
    }
    next();
  };
};

export default roleMiddleware;
