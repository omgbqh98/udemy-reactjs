
import { INCREMENT, DECREMENT } from '../action/counterAction';
import { FETCH_USER_LOGIN_SUCCES } from '../action/userAction';
const INITIAL_STATE = {
    account: {
        access_token: "",
        refresh_token: "",
        usename: "",
        image: "",
        role: ""
    },
    isLogin: false

};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCES:
            return {
                ...state, account: {
                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token,
                    usename: action.payload?.DT?.usename,
                    image: action.payload?.DT?.image,
                    role: action.payload?.DT?.role
                },
                isLogin: true
            };
        default: return state;
    }
};

export default userReducer;