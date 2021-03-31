import {useAuth} from '../Hooks/useAuth'

const Dashboard = ({code}) => {
    useAuth(code)
    return(
        <div></div>
    )
}

export default Dashboard