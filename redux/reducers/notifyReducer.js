import { UPDATE_NOTIFY_SETTINGS, UPDATE_TIME_REFRESH } from "../actions/notifyAction";

const initialState = {
    refreshTime: 10,
    notifyMessage: true,
    notifySound: true,
    notifyVibrate: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_TIME_REFRESH().type:
            return { ...state, refreshTime: action.number }
        case UPDATE_NOTIFY_SETTINGS().type:
            if (action.NotifyType == 0) return { ...state, notifyMessage: !state.notifyMessage }
            else if (action.NotifyType == 1) return { ...state, notifySound: !state.notifySound }
            else return { ...state, notifyVibrate: !state.notifyVibrate }
        default:
            return state;
    }
}