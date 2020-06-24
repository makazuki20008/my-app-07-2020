export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY';
export const UPDATE_CART = 'UPDATE_CART';
UPDATE_FILTER
UPDATE_SORT
FETCH_PRODUCTS
UPDATE_CART

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


export const updateFilters = filters => ({
    type: UPDATE_FILTER,
    payload: filters
  });

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
  