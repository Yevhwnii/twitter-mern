
import axios from 'axios'
import { TweetsState } from "../../store/ducks/tweets/contracts/state"


export const TweetsApi = {
    fetchTweets: async () : Promise<TweetsState['items']> => {
        const response =  await axios.get('https://trycode.pw/c/2OBQ1.json')
        return response.data
        
        
    }
}