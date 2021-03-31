import routes from './routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from './Components/Footer'
import { useContext } from "react"
import { SpotifyContext } from "./Context/SpotifyContext"
import Header from './Components/Header'

function App() {
  const {accessToken} = useContext(SpotifyContext)
  return <div>
    <Header />
    {routes}
    {accessToken && <Footer />}
  </div>
}

export default App
