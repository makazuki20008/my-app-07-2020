var redux = require('redux');

var defaultState = {
    mang: ["nhoi","nau","suongsuong"],
    isAdding: false
}

var reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'is_adding': return { ...state, isAdding: !state.isAdding };
        case 'add_item': return { ...state, mang: [...state.mang, action.item ] };
        case 'remove_item': return { ...state, mang: state.mang.filter((e,i)=>i!==action.index)}
        default:
            return state;
    }
    return state;
}

var store = redux.createStore(reducer);

store.dispatch({ type: 'is_adding' })
store.dispatch({ type: 'add_item', item: 'nhan' })
store.dispatch({ type: 'remove_item', index: 2  })
console.log(store.getState())

