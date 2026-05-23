import jwt from "jsonwebtoken";

const protectMiddleware = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: `access token is missing from headers...`,
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: `Token is either curropt or fake ... `,
      });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: `Error is comming from Protect Middleare ----- ${error || error.message}`,
    });
  }
};

export default protectMiddleware;
