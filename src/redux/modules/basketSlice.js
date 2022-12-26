import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dummyInfo: [
    {
      id: 1,
      title: "러기지택(캐리어)_라이언",
      price: 13000,
      num: 1,
      toggle: false,
    },
    {
      id: 2,
      title: "러기지택(캐리어)_라이언킹",
      price: 16000,
      num: 2,
      toggle: false,
    },
    {
      id: 3,
      title: "러기지택(캐리어)_라이언킹킹",
      price: 20000,
      num: 1,
      toggle: false,
    },
  ],
  totalPrice: 0,
  singlePrice: 0,
  toggle: false,
  isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값
  error: null, // 서버와의 통신이 실패한 경우
};

export const basketSlice = createSlice({
  name: "dummyInfo",
  initialState,
  reducers: {
    addProductCount: (state, action) => {
      state.dummyInfo = state.dummyInfo.map((dummy) =>
        action.payload === dummy.id
          ? { ...dummy, num: dummy.num + 1 }
          : { ...dummy }
      );
    },

    subProductCount: (state, action) => {
      state.dummyInfo = state.dummyInfo.map((dummy) =>
        action.payload === dummy.id
          ? { ...dummy, num: dummy.num - 1 }
          : { ...dummy }
      );
    },

    addAllSum: (state) => {
      const totalPrices = state.dummyInfo.map(
        (dummy) => dummy.num * dummy.price
      );

      console.log(totalPrices);

      return {
        ...state,
        totalPrice: totalPrices.reduce((a, b) => a + b),
      };
    },

    subAllSum: (state) => {
      state.totalPrice = 0;
    },

    addPriceByCount: (state, action) => {
      const filtered = state.dummyInfo.filter(
        (dummy) => dummy.id === action.payload
      );
      return {
        ...state,
        totalPrice: state.totalPrice + filtered[0].price,
      };
    },

    addEachCheckedTotal: (state, action) => {
      const filtered = state.dummyInfo.filter(
        (dummy) => dummy.id === action.payload
      );
      return {
        ...state,
        totalPrice: state.totalPrice + filtered[0].price * filtered[0].num,
      };
    },
    subPriceByCount: (state, action) => {
      const filtered = state.dummyInfo.filter(
        (dummy) => dummy.id === action.payload
      );
      return {
        ...state,
        totalPrice: state.totalPrice - filtered[0].price,
      };
    },
    subEachCheckedTotal: (state, action) => {
      const filtered = state.dummyInfo.filter(
        (dummy) => dummy.id === action.payload
      );
      return {
        ...state,
        totalPrice: state.totalPrice - filtered[0].price * filtered[0].num,
      };
    },

    toggleCheck: (state) => (state = { ...state, toggle: !state.toggle }),
    toggleEach: (state, action) => {
      return {
        ...state,
        dummyInfo: state.dummyInfo.map((dummy) =>
          dummy.id === action.payload
            ? { ...dummy, toggle: !dummy.toggle }
            : { ...dummy }
        ),
      };
    },
    autoToggleAll: (state) => {
      const toggleAll = state.dummyInfo.filter(
        (dummy) => dummy.toggle === true
      );
      return {
        ...state,
        toggle: toggleAll.length === state.dummyInfo.length ? true : false,
      };
    },
    autoToggleAllTrue: (state) => {
      return {
        ...state,
        dummyInfo: state.dummyInfo.map((dummy) => ({ ...dummy, toggle: true })),
      };
    },
    autoToggleAllFalse: (state) => {
      return {
        ...state,
        dummyInfo: state.dummyInfo.map((dummy) => ({
          ...dummy,
          toggle: false,
        })),
      };
    },

    initUpdateStatus: (state) => {
      state.updateSuccess = false;
      state.error = null;
    },
    initDeleteStatus: (state) => {
      state.deleteSuccess = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    // [__getComments.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [SumPrice__getComments.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.comments = action.payload;
    // },
    // [__getComments.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {
  getBasketInfo,
  addProductCount,
  subProductCount,
  toggleCheck,
  addPriceByCount,
  subPriceByCount,
  addEachCheckedTotal,
  subEachCheckedTotal,
  addAllSum,
  subAllSum,
  autoToggleAll,
  toggleEach,
  autoToggleAllTrue,
  autoToggleAllFalse,
} = basketSlice.actions;

export default basketSlice;
