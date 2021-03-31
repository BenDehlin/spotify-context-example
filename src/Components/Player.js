import { useState, useEffect, useContext } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import { SpotifyContext } from "../Context/SpotifyContext"

const Player = () => {
  const { accessToken, trackUri, play, setPlay } = useContext(SpotifyContext)
  useEffect(() => {
    if (accessToken) {
      setPlay(true)
    }
  }, [accessToken])
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        console.log(state)
        !state.isPlaying && setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}

export default Player
