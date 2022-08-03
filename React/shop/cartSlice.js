import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 2, name: '피나콜라다', count: 1 },
    { id: 0, name: '코스모폴리탄', count: 2 },
  ],
  reducers: {
    increase(state, action) {
      let index = state.findIndex((item) => item.id == action.payload);
      state[index].count++;
    },
    decrease(state, action) {
      let index = state.findIndex((item) => item.id == action.payload);
      state[index].count > 1 && state[index].count--;
    },
    sort(state) {
      state.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },
    addCart(state, action) {
      let index = state.findIndex((item) => item.id == action.payload.id);
      index >= 0
        ? (state[index].count += Number(action.payload.count))
        : state.push(action.payload);
    },
    deleteCart(state, action) {
      let index = state.findIndex((item) => item.id == action.payload);
      state.splice(index, 1);
    },
  },
});

export let { increase, decrease, sort, addCart, deleteCart } = cart.actions;

export default cart;
