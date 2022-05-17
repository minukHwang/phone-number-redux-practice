const initialState = {
    contactList: [],
    keyword: ""
};

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    { name: payload.name, phoneNumber: payload.phoneNumber },
                ],
            };
        case "SEARCH_ITEM":
            return{...state,keyword:payload.searchItem}
        default:
            return{
                ...state
            }
    }
}

export default reducer;
