import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <Link to="/">Logout</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About Page</Link>
    </header>
  )
}

export default Header
