// Dependencies.
const apiRouter = require("express").Router()

// API routes.
const userRoutes = require("./routes/userRoutes")
const covidDataRoutes = require("./routes/covidDataRoutes")

// Set up the routes.
apiRouter.use("/", userRoutes)
apiRouter.use("/", covidDataRoutes)

module.exports = apiRouter
