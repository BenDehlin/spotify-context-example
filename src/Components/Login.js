import { useContext } from "react"
import { Container } from "react-bootstrap"
import { SpotifyContext } from "../Context/SpotifyContext"

const Login = () => {
  const {AUTH_URL} = useContext(SpotifyContext)
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}

export default Login
