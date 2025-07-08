const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      console.error("Error in async handler:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
  };
};

export default asyncHandler;

// const asyncHandlers = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     req.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
