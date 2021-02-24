const express = require("express");
const app = express();


// Serve our api message
app.get("/api/message", async (req, res, next) => {
  try {
    res.status(201).json({ message: "HELLOOOOO FROM EXPRESS" });
  } catch (err) {
    next(err);
  }
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("public"));
  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("public", "index.html"))
  );
}

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));