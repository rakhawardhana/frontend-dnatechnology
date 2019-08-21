const init = {
    id: '',
    username: ''
}

export default (data = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...data,
                id: action.payload.id,
                username: action.payload.username
            }
            
    
        default:
            return data
    }
}


