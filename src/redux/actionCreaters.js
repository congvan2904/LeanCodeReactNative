export function toggleIsAdding() {
    return {
        type: 'ISADDING'
    }
}
export function addWords(en, vn) {
    return {
        type: 'ADD',
        en,
        vn
    }
}
export function toggleMemorized(id) {
    return {
        type: 'MEMORIZED',
        id
    }
}
export function toggleShow(id) {
    return {
        type: 'SHOW',
        id
    }
}
export function filterShowAll() {
    return {
        type: 'FILTER_SHOWALL'
    }
}
export function filterMemorized() {
    return {
        type: 'FILTER_MEMORIEZ'
    }
}
export function filterNeedPractice() {
    return {
        type: 'FILTER_NEED_PRACTICE'
    }
}