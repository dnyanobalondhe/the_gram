if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/.env" });
}

const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const connectDB = require("./config/connection");
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoute");
const storyRoute = require("./routes/storyRoute");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  limit: "500mb",
  extended: true,
  parameterLimit: 10000000,
}));
app.use(expressFileUpload({ limits: { fileSize: "500mb" } }));
app.use(express.json());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/story", storyRoute);

// Serve Static Files (React App)
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all route to serve React's index.html
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Port Binding for Render
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
