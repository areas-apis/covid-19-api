// Dependencies.
const covidDataRouter = require("express").Router()
// const axios = require("axios")

// GET /api/covid-data (getCovidData).
covidDataRouter.get("/covid-data", async (req, res) => {
	try {
		
		res.status(200).json("So far, so good!")
	}	catch (err) {
		res.status(500).json("Oops!")
	}
})

module.exports = covidDataRouter
