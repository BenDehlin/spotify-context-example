import Login from "./Login"
import SpotifyDash from "./SpotifyDash"

const code = new URLSearchParams(window.location.search).get("code")

function SpotifyWidget() {
  return code ? <SpotifyDash code={code} /> : <Login />
}

export default SpotifyWidget
