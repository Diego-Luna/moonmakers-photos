require("dotenv").config();

const config = {
  env: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 8080,
};

module.exports = { config };
