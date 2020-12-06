export default (state={ 
    loading: true, 
    users: [],
    current_user: {}
}, action) => {
    switch(action.type){
        case "LOADING":
            return {...state, loading: true}
        case "LOAD_USERS":
            return {...state, users: action.users, loading: false}
        case "LOAD_USER":
            return {...state, current_user: action.user, loading: false}
        case 'CREATE_USER':
            return {
                ...state, 
                current_user: action.user,
                loading: false
            }
        default: 
            return state;
    }
}