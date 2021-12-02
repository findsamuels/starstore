
import { useHistory} from "react-router-dom"

export const useRouter = () => {

    const history = useHistory()

    const routeHandler = (itemPayload) => {

            history.push(`/${itemPayload}`)
        
    }


    return{
        routeHandler

    }
}
