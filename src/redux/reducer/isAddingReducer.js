const isAddingReducer = (state = false, action) => {
    if (action.type === 'ISADDING') return !state;
    return state;
}
export default isAddingReducer;
