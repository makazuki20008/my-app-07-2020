// thêm thư viện redux
// tạo default state
// tạo reducer gồm các case ( action type, index ) { switch 'action_type' case: return {...state, isAdding: !isAdding} }
// tạo store từ reducer
// dispatch({ action_type: 'is_adding' }) để thay đổi dữ liệu của store
// console.log(getState(store)) để xem dữ liệu

var redux = require('redux');

var defaultstate = {
        mang: ["Nhoi","Nau","SuongSuong"],
        isAdding: false
    };
    
var reducer = (state = defaultstate, action) => {
    
    // 1. Bài làm
    // switch (action.type) {
    //     case 'is_adding': return { ...state,  isAdding: !isAdding}; 
    //         break;
    //     case 'add_item': return { ...state, mang }; 
    //         break;
    //     case 'remove_item': return { ...state.filter((e,i)=>i!=action.item) }; 
    //         break;
    //     default:
    //         break;
    // }

    // 2. Sửa bài
    switch (action.type) {       // toàn bộ object, 1 phần tử trong object { all_object_data } { ...part_object_data, chil_object_data  }
        case 'is_adding': return { ...state,  isAdding: !state.isAdding}; 
        case 'add_item': return { ...state, mang: [...state.mang, action.item] }; 
        case 'remove_item': return { ...state, mang: state.mang.filter((e,i) => i != action.index) };
        default:
            return state;
    }

    // 3. Đáp án
    // switch(action.type){
    //     case 'TOGGLE_IS_ADDING': 
    //         return {...state, isAdding: !state.isAdding}
    //     case 'ADD_ITEM':
    //         return {...state, mang: [...state.mang, action.item]}
    //     case 'REMOVE_ITEM':
    //         return {...state, mang: state.mang.filter((e, i) => i != action.index)}
    //     default:
    //         return state;
    // }

    return state;

}

var store = redux.createStore(reducer);

// nội dung trong dispatch là một object
// object đó là action
store.dispatch({ type: 'is_adding' });
console.log(store.getState());

// object 
//     đối tượng 1
//     đối tượng 2

// gửi object => gửi nhiều dữ kiện => nơi nhận xử lý những dữ kiện này => rồi đưa ra kết quả (thay đổi dữ liệu đầu vào, thay đổi dữ liệu hiện có, thực hiện thao tác)







//
//  store     ->  state ( data mà store đang giữ )
//
//  reducer là nhận action từ thực hiện dispatch 
//      thay đổi state
//
//  action là một thực hiện dispatch
//
//