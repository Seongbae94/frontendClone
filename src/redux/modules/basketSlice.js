import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RYAN: [
    {
      id: 1,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221013180914740_8809814928300_AW_00.jpg",
      price: 27000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
    {
      id: 2,
      title: "입는 망토담요_춘식이",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221027155039611_8809814928508_AW_00.jpg",
      price: 39000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
    {
      id: 3,
      title: "EveryYay 무릎담요_춘식이",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20220919135947925_8809814927396_AW_00.jpg",
      price: 19000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
    {
      id: 4,
      title: "춘식이 팝콘메이커",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20220926162315633_8809814921318_8809814921318_AW_00.jpg",
      price: 39000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  APEACH: [
    {
      id: 5,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221214134551159_8809814929451_AW_00.jpg",
      price: 99000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
    {
      id: 6,
      title: "아크릴 마그넷 세트 어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221117123333712_8809810211925_8809810211925_AW_00.jpg",
      price: 5800,
      num: 1,
      toggle: false,
      onBasket: false,
    },
    {
      id: 7,
      title: "차량용 다용도걸이 피규어_리틀어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221109154440680_8809814928720_8809814928720_AW_00.jpg",
      price: 9000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
    {
      id: 8,
      title: "어피치 무드등 탁상시계",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221031154134696_8809790653340_AW_00.jpg",
      price: 49800,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  "MUZI & CON": [
    {
      id: 9,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221214134551159_8809814929451_AW_00.jpg",
      price: 99000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  "FRODO & NEO": [
    {
      id: 11,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221214134551159_8809814929451_AW_00.jpg",
      price: 99000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  TUBE: [
    {
      id: 12,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221214134551159_8809814929451_AW_00.jpg",
      price: 99000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  "JAY - G": [
    {
      id: 13,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221214134551159_8809814929451_AW_00.jpg",
      price: 99000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  CHOONSIK: [
    {
      id: 14,
      title: "[온라인 전용] 메가바디필로우_토끼어피치",
      imageUrl:
        "https://img1.kakaocdn.net/thumb/R180x0@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221214134551159_8809814929451_AW_00.jpg",
      price: 99000,
      num: 1,
      toggle: false,
      onBasket: false,
    },
  ],
  totalPrice: 0,
  count: 0,
  carts: [],
  toggle: false,
  isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값
  error: null, // 서버와의 통신이 실패한 경우
};

export const basketSlice = createSlice({
  name: "basketInfo",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const filtered = state[`${action.payload.name}`].filter(
        (product) => product.id === action.payload.id
      );
      state.carts.push(...filtered);
    },

    removeFromCart: (state, action) => {
      const filtered = state.carts.filter((cart) => cart.id !== action.payload);

      console.log(filtered);

      return {
        ...state,
        carts: [...filtered],
      };
    },

    addProductCount: (state, action) => {
      state.carts = state.carts.map((cart) =>
        action.payload === cart.id
          ? { ...cart, num: cart.num + 1 }
          : { ...cart }
      );
    },

    subProductCount: (state, action) => {
      state.carts = state.carts.map((cart) =>
        action.payload === cart.id
          ? { ...cart, num: cart.num - 1 }
          : { ...cart }
      );
    },

    addAllSum: (state) => {
      const totalPrices = state.carts.map((cart) => cart.num * cart.price);

      return {
        ...state,
        totalPrice: totalPrices.reduce((a, b) => a + b),
        count: state?.carts?.length,
      };
    },

    subAllSum: (state) => {
      state.totalPrice = 0;
      state.count = 0;
    },

    addPriceByCount: (state, action) => {
      const filtered = state.carts.filter((cart) => cart.id === action.payload);
      return {
        ...state,
        totalPrice: state.totalPrice + filtered[0].price,
      };
    },

    addEachCheckedTotal: (state, action) => {
      const filtered = state.carts.filter((cart) => cart.id === action.payload);
      return {
        ...state,
        totalPrice: state.totalPrice + filtered[0].price * filtered[0].num,
        count: state.count + 1,
      };
    },
    subPriceByCount: (state, action) => {
      const filtered = state.carts.filter((cart) => cart.id === action.payload);
      return {
        ...state,
        totalPrice: state.totalPrice - filtered[0].price,
      };
    },
    subEachCheckedTotal: (state, action) => {
      const filtered = state.carts.filter((cart) => cart.id === action.payload);
      return {
        ...state,
        totalPrice: state.totalPrice - filtered[0].price * filtered[0].num,
        count: state.count - 1,
      };
    },

    toggleCheck: (state) => (state = { ...state, toggle: !state.toggle }),
    toggleEach: (state, action) => {
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart.id === action.payload
            ? { ...cart, toggle: !cart.toggle }
            : { ...cart }
        ),
      };
    },
    autoToggleAll: (state) => {
      const toggleAll = state.carts.filter((cart) => cart.toggle === true);
      return {
        ...state,
        toggle: toggleAll?.length === state.carts?.length ? true : false,
      };
    },
    autoToggleAllTrue: (state) => {
      return {
        ...state,
        carts: state.carts.map((cart) => ({ ...cart, toggle: true })),
      };
    },
    autoToggleAllFalse: (state) => {
      return {
        ...state,
        carts: state.carts.map((cart) => ({
          ...cart,
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
  addToCart,
  removeFromCart,
} = basketSlice.actions;

export default basketSlice;
