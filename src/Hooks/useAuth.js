import axios from "axios"
import {  useEffect, useContext } from "react"
import { SpotifyContext } from "../Context/SpotifyContext"
import {useHistory} from 'react-router-dom'

export const useAuth = (code) => {
  const {
    setAccessToken,
    setRefreshToken,
    setExpiresIn,
  } = useContext(SpotifyContext)
  const {push} = useHistory()

  useEffect(() => {
    axios
      .post("/login", {
        code,
      })
      .then(({ data }) => {
        setAccessToken(data.accessToken)
        setRefreshToken(data.refreshToken)
        setExpiresIn(data.expiresIn)
        push('/home')
      })
      .catch((err) => (window.location = "/"))
  }, [])
}
