// ==== Body ===
const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const { default: AdminJS } = require('adminjs')
const options = require('./admin/admin.options')

// ==== Dev Imports ==
const cors = require('cors')
const path = require('path')

// ==== Routes Imports ===
const { vacancyRouter, buildAdminRouter } = require('./routes')

const admin = new AdminJS(options)
const adminRouter = buildAdminRouter(admin)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	// ==== Settings ===
	const PORT = process.env.PORT || 3000
	const API_URI = process.env.API_URI

	server.use(admin.options.rootPath, adminRouter)
	server.use('/api/vacancy', vacancyRouter)

	// ==== Middlewares ===
	server.use(cors())
	server.use(express.json({ extended: true }))
	server.use('/server/uploads', express.static(path.join(__dirname, 'uploads')))

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	// ==== DB Connetc ===
	mongoose.connect(API_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	server.listen(PORT, err => {
		if (err) throw err
		console.log(`> ready - ${PORT}`)
	})
})
