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
            // trả về tất cả state đã có
            // thêm nữa: trả về tất cả mảng đã có ngoại trừ phần tử action.index

            // e là value phần tử trong mảng, i là index key của phần tử trong mảng
            // j, k, l, ...
            // filter((e,i)=>{})
            return {...state, mang: state.mang.filter((e, i) => i != action.index)}
        default:
        return state;
    }
    return state;
}
 
var store = redux.createStore(reducer);
console.log(store.getState());
 
store.dispatch({type: 'TOGGLE_IS_ADDING'});
console.log(store.getState());
 
store.dispatch({
    type: 'ADD_ITEM',
    item: 'Unity'
});
console.log(store.getState());
 
store.dispatch({
    type: 'REMOVE_ITEM',
    index: 1
});
console.log(store.getState());
 
console.log('Hello world');

store.dispatch({
    type: 'ADD_ITEM',
    item: 'AngularJS'
});
console.log(store.getState());

store.dispatch({
    type: 'ADD_ITEM',
    item: 'Laravel'
});
console.log(store.getState());

store.dispatch({
    type: 'ADD_ITEM',
    item: 'Falcon'
});
console.log(store.getState());

store.dispatch({
    type: 'REMOVE_ITEM',
    index: 5
});
console.log(store.getState());