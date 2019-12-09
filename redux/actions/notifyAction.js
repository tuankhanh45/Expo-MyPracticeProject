export function UPDATE_TIME_REFRESH(number) {
    return {
        type: 'update_time_refresh',
        number,
    }
}

// NotifyType : message | sound | vibrate
export function UPDATE_NOTIFY_SETTINGS(NotifyType) {
    return {
        type: 'fetch_home_data',
        NotifyType,
    }
}