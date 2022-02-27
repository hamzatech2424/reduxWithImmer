import { LOGGED_IN_USER } from './types'

const initialState = {
    loggedInUserData : {UserData:null}
}

export default AuthReducer = (state = initialState, action) => {


    switch (action.type) {

        case LOGGED_IN_USER:

            return {
                ...state,
                loggedInUserData:{UserData:action.payload}
            }
            break;


        default: return state
    }


}