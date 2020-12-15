import * as actionTypes from './constants/actionTypes';

export function allProducts(data) {
  return {
    type: actionTypes.All_Products,
    data: data,
  };
}
export function sortProducts(sortType, data) {
  return {
    type: sortType,
    data: data,
  };
}
