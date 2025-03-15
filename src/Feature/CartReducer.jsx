

function CartReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, { ...action.product, quantity: 1 }];

    case "remove":
      return state.filter((item) => item.id !== action.id);

    case "increase":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
          : item
      );

    case "decrease":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
}

export default CartReducer;
