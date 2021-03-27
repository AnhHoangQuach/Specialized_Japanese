const jwt = require("jsonwebtoken");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
        return res.send({status: 403, message: "No token provided!" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.send({status: 401, message: "Unauthorized!" });
        }
        next();
    });
};

module.exports = authJwt;