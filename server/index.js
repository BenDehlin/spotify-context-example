require("dotenv").config()
const express = require("express")
const SpotifyWebApi = require("spotify-web-api-node")
const app = express()
const { REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env

app.use(express.json())

app.post("/refresh", (req, res) => {
  const { refreshToken } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: REACT_APP_CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken,
  })
  spotifyApi
    .refreshAccessToken()
    .then(({ body }) => {
      res.status(200).send({
        accessToken: body.access_token,
        expiresIn: body.expires_in,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

app.post("/login", (req, res) => {
  const { code } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: REACT_APP_CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(({ body }) => {
      console.log({ body })
      res.status(200).send({
        accessToken: body.access_token,
        refreshToken: body.refresh_token,
        expiresIn: body.expires_in,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

app.listen(3333, console.log(`server listening on port 3333`))
