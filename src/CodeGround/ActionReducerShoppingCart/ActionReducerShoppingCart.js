import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = product => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});

const loadCart = products => ({
    type: LOAD_CART,
    payload: products
});

//           action
//     -------------------
//     |                  |
//     |   abcdxyz        |
//     |      =           |
//     | ({               |
//     |    type: ...,    |
//     |    payload: ...  |
//     |   })               |
//     -------------------


//             reducer

export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY';
export const UPDATE_CART = 'UPDATE_CART';



import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload)
      };
    case CHANGE_PRODUCT_QUANTITY:
      return {
        ...state,
        productToChange: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
}



import { UPDATE_FILTER } from './actionTypes';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});



export const UPDATE_FILTER = 'UPDATE_FILTER';



import { UPDATE_FILTER } from './actionTypes';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}



import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

// export const productsAPI =
//   'https://react-shopping-cart-67954.firebaseio.com/products.json';
export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
    .get('https://react-shopping-cart-67954.firebaseio.com/products.json')
    .then(res => {
      let { products } = res.data;

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';



import { FETCH_PRODUCTS } from './actionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}



import { UPDATE_SORT } from './actionTypes';

export const updateSort = sort => ({
  type: UPDATE_SORT,
  payload: sort
});


export const UPDATE_SORT = 'UPDATE_SORT';


import { UPDATE_SORT } from './actionTypes';

const initialState = {
  type: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}



import { UPDATE_CART } from './actionTypes';

export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.installments > greater ? p.installments : greater;
    return greater;
  }, 0);

  let cartTotal = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'USD',
    currencyFormat: '$'
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};

export const UPDATE_CART = 'UPDATE_CART';



import { UPDATE_CART } from './actionTypes';

const initialState = {
  data: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: 'USD',
    currencyFormat: '$'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}



import { combineReducers } from 'redux';
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer,
  filters: filtersReducer,
  sort: sortReducer
});



import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};



/*
Ta có store là nơi chứa dữ liệu.
Khi thao tác ở một nơi nào đó. Dispach() để truyền lệnh cho store. Store thay đổi.
Giao diện sẽ nhận giá trị từ store.
*/

import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = product => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});

const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});
