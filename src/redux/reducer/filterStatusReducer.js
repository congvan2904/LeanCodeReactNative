const filterStatusReducer = (state = 'SHOW_ALL', action) => {
    if (action.type === 'FILTER_SHOWALL') return 'SHOW_ALL';
    if (action.type === 'FILTER_MEMORIEZ') return 'MEMORIEZ';
    if (action.type === 'FILTER_NEED_PRACTICE') return 'NEED_PRACTICE';
    return state;
}
export default filterStatusReducer;