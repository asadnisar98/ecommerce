import * as actionTypes from '../actions/constants/actionTypes';

const initialState = {
  products: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.All_Products:
      return { ...state, products: action.data };

    case actionTypes.Alphabetically_A_to_Z:
      action.data.allShopifyProduct.edges.sort((a, b) => {
        let product1 = a.node.title;
        let product2 = b.node.title;
        if (product1 < product2) {
          return -1;
        }
        if (product1 > product2) {
          return 1;
        }
        return 0;
      });
      return { ...state, products: action.data };

    case actionTypes.Alphabetically_Z_to_A:
      action.data.allShopifyProduct.edges.sort((a, b) => {
        let product1 = a.node.title;
        let product2 = b.node.title;
        if (product1 > product2) {
          return -1;
        }
        if (product1 < product2) {
          return 1;
        }
        return 0;
      });
      return { ...state, products: action.data };

    case actionTypes.Price_High_To_Low:
      action.data.allShopifyProduct.edges.sort((a, b) => {
        return +b.node.variants[0].price - +a.node.variants[0].price;
      });
      return { ...state, products: action.data };

    case actionTypes.Price_Low_To_High:
      action.data.allShopifyProduct.edges.sort((a, b) => {
        return +a.node.variants[0].price - +b.node.variants[0].price;
      });
      return { ...state, products: action.data };

    default:
      return state;
  }
}
