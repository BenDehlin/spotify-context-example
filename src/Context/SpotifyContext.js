import { createContext, useEffect, useState } from "react"
// import { useLocation } from "react-router-dom"
import axios from "axios"

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=d6a4a2f8c1ae415c8677652130dd60c1&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
const code = new URLSearchParams(window.location.search).get("code")

export const SpotifyContext = createContext()

export const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")
  const [expiresIn, setExpiresIn] = useState("")
  const [play, setPlay] = useState(false)
  const [trackUri, setTrackUri] = useState(
    "spotify:track:7zpMz3am0n83WmDxVqp9GQ"
  )
  //   const { pathname } = useLocation()

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const timeout = setInterval(() => {
      axios
        .post("/refresh", {
          refreshToken,
        })
        .then(({ data }) => {
          setAccessToken(data.accessToken)
          setExpiresIn(data.expiresIn)
          window.history.pushState({}, null, "/")
        })
        .catch((err) => (window.location = "/"))
    }, (expiresIn - 60) * 1000)
    return () => clearInterval(timeout)
  }, [refreshToken, expiresIn])

  return (
    <SpotifyContext.Provider
      value={{
        AUTH_URL,
        code,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        expiresIn,
        setExpiresIn,
        play,
        setPlay,
        trackUri,
        setTrackUri,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  )
}
