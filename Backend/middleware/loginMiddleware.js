// import jwt from "jsonwebtoken";

// export const authenticate = (req, res, next) => {
//   if (req.method === "OPTIONS") {
//     return next();
//   }

//   const authHeader = req.headers.authorization;
//   if (!authHeader?.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Access token missing or invalid" });
//   }

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(403).json({ message: "Invalid or expired token" });
//   }
// };
