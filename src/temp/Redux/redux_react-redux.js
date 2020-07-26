// Quy trình vận hành redux:
//      Truyền dữ liệu xuyên form
//
//      Tại UI lấy dữ liệu:
//          Nhận đối số miêu tả hiện thời
//          Đưa lên store
//          Nhận về dữ liệu trùng với miêu tả


// Đối tượng:
//      redux 
//      reducer 
//      store 

// Hành động:
//      require()
//      createStore 
//      dispatch 
//      createStore()
//      getState

// Dữ liệu:
//      reducer(data, )

// Tương tác dữ liệu:
//      reducer(..., chỉ_lệnh) { switch(chỉ_lệnh) các_lệnh: return { data } } 

//---------------------------------------------------------------------------------------
// Thêm: 

// react-redux
// Tham khảo react-shopping-cart //

// Mô phỏng:
//      Dữ liệu có sẵn tại UI
//           gửi lên    
//      Dữ liệu trên store
//           gửi xuống
//      Tại nơi sử dụng dữ liệu

// Cấu trúc:
//
// server/sort/action.js
// server/sort/reducer.js
//
// server/filter/action.js
// server/filter/reducer.js
//
// server/reducer.js
// server/store.js

// Chia nhỏ reducer:
//      Liên kết những chia nhỏ bằng combineReducers({ r1: rd1, r2: rd2, r3: rd3, r4: rd4, r5: rd5 })
//
//      rd1 ở file 1
//      rd2 ở file 2
//      rd3 ở file 3
//
//      import { combineReducers } from 'redux';
//      import shelfReducer from './shelf/reducer';
//      import cartReducer from './cart/reducer';
//      import totalReducer from './total/reducer';
//      import filtersReducer from './filters/reducer';
//      import sortReducer from './sort/reducer';
//
//      export default combineReducers({
//          shelf: shelfReducer,
//          cart: cartReducer,
//          total: totalReducer,
//          filters: filtersReducer,
//          sort: sortReducer
//      });

// Gửi xuống:
//
//      import { connect } from 'react-redux';
//
//      import { function_gửi_lên } from '../../services/shelf/actions';
//
//      const mapStateToProps = state => ({
//          products: state.shelf.products,
//          filters: state.filters.items,
//          sort: state.sort.type
//      });
//  
//      export default connect(
//          mapStateToProps,
//          { function_gửi_lên }
//       )(Shelf);

// Gửi lên:
//      tại UI handle: function([đưa vào đối số]) -> tại store: function([nhận giá trị đưa vào])
//      import { function_client } from './server/action'
//  
//      ...
//      function_client([đối số]) // thay đổi data store
//      ...
//
//      export default connect(data, { function_server })(Component_name)


// Template:
// filter/action.js
// return dispatch({
//     type: FETCH_PRODUCTS,
//     payload: products
//   });
//
// filter/reducer.js
// const initialState = {
//     products: []
//   };
//
//   export default function(state = initialState, action) {
//     switch (action.type) {
//       case FETCH_PRODUCTS:
//         return {
//           ...state,
//           products: action.payload
//         };
//       default:
//         return state;
//     }
//   }
//
// reducer.js
//      import { combineReducers } from 'redux';
//      import shelfReducer from './shelf/reducer';
//      import cartReducer from './cart/reducer';
//      import totalReducer from './total/reducer';
//      import filtersReducer from './filters/reducer';
//      import sortReducer from './sort/reducer';
//
//      export default combineReducers({
//          shelf: shelfReducer,
//          cart: cartReducer,
//          total: totalReducer,
//          filters: filtersReducer,
//          sort: sortReducer
//      });
//
// store.js

//--------------------------------------------------------------------------------------
var redux = require('redux');

var defaultState = {
    mang: ['Android', 'iOS', 'NodeJS'],
    isAdding: false
};

// dữ liệu ở store reducer(data, ...)
var reducer = (state = defaultState, action) => {
    switch(action.type){
        // ...state, isAdding: !state.isAdding
        // trả về
        // tất cả state
        // ở phần tử isAdding thay đổi giá trị false thành true
        case 'TOGGLE_IS_ADDING': 
            return {...state, isAdding: !state.isAdding}            
        
        // ...state, mang: [...state.mang, action.item]
        // trả về toàn bộ state
        // ở phần tử mảng
        //        trả về toàn bộ phần tử mảng 
        //        thêm phần tử item từ action
        case 'ADD_ITEM':
            return {...state, mang: [...state.mang, action.item]}

        // ...state, mang: state.mang.filter((e, i) => i != action.index)
        // trả về toàn bộ state
        // ở phần tử mang
        //        tra về toàn bộ mảng, ngoại trừ phần tử index gửi ở action    
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
console.log('Default state:')
console.log(store.getState());
console.log('')

store.dispatch({type: 'TOGGLE_IS_ADDING'});
console.log('Toggle is adding: Enable')
console.log(store.getState());
console.log('')
 
store.dispatch({
    type: 'ADD_ITEM',
    item: 'Unity'
});
console.log('Add item: Unity')
console.log(store.getState());
console.log('')
 
store.dispatch({
    type: 'REMOVE_ITEM',
    index: 1
});
console.log('Remove item: index 1')
console.log(store.getState());
console.log('')
 
console.log('Hello world');
console.log('')

store.dispatch({
    type: 'ADD_ITEM',
    item: 'AngularJS'
});
console.log('Add item: AngularJS')
console.log(store.getState());
console.log('')

store.dispatch({
    type: 'ADD_ITEM',
    item: 'Laravel'
});
console.log('Add item: Laravel')
console.log(store.getState());
console.log('')

store.dispatch({
    type: 'ADD_ITEM',
    item: 'Falcon'
});
console.log('Add item: Falcon')
console.log(store.getState());
console.log('')

store.dispatch({
    type: 'REMOVE_ITEM',
    index: 5
});
console.log('Remove item: index 5')
console.log(store.getState());
console.log('')

