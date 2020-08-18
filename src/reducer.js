export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQA0cG2Zpso986X79VVSAlB5voUxZrxJJLVWdiMOQuPe9G0Phn2IHWHjmEJ5BgrinhFtb3SijqkHKBT5J7sb7pPDxP_PAUHKYi2S82F87IbiDeiiRkKA0rvTy3e7UtS7U0t1g2KWejLi_dB_kcYMrWv5seDWjZVfrzaO2Ph7wQ-r0kxN"
};

const reducer = (state, action) => {

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;