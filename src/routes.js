import {Switch, Route} from 'react-router-dom'
import SpotifyWidget from './Components/SpotifyWidget'
import Home from './Components/Home'
import About from './Components/About'

export default (
    <Switch>
        <Route exact path='/' component={SpotifyWidget} />
        <Route path ='/home' component={Home} />
        <Route path ='/about' component={About} />
    </Switch>
)