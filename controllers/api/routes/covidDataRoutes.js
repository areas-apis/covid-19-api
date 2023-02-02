// Dependencies.
const covidDataRouter = require("express").Router()
const axios = require("axios")

// GET /api/covid-data (getCovidData).
covidDataRouter.get("/covid-data", async (req, res) => {
	try {
		const requestUrl = "https://api.github.com/repos/CSSEGISandData/COVID-19"
		const token = process.env.GH_TOKEN
		const response = await axios.get(requestUrl, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
		res.status(200).json(response.data)
	}	catch (err) {
		console.error(err)
		res.status(500).json(err)
	}
})

module.exports = covidDataRouter
