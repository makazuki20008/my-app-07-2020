// Tóm tắt kiến thức về redux

// Thư viện:
// redux

// Đối tượng:
//      reducer
//      store


// Hành động:
//      createStore
//      dispatch
//      getState 

var redux = require('redux');

var defaultState = {
    mang: ['Android', 'iOS', 'NodeJS'],
    isAdding: false
};

var reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'TOGGLE_IS_ADDING': 
            return {...state, isAdding: !state.isAdding}
        case 'ADD_ITEM':
            return {...state, mang: [...state.mang, action.item]}
        case 'REMOVE_ITEM':
            return {...state, mang: state.mang.filter((e, i) => i != action.index)}
        default:
            return state;
    }
    return state;
}

var store = redux.createStore(reducer);
store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({type: 'REMOVE_ITEM', index: 5});
console.log(store.getState());