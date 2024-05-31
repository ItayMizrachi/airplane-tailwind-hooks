import { useEffect } from "react";
import { useCartSelectors } from "../../store/cart-store";
import MyCart from "./MyCart";

const CartStore = () => {
  //   const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
  //     cart: state.cart,
  //     removeFromCart: state.removeFromCart,
  //     clearCart: state.clearCart,
  //   }));

  const dummyCart = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  const cart = useCartSelectors.use.cart();
  const addToCart = useCartSelectors.use.addToCart();
  const clearCart = useCartSelectors.use.clearCart();
  // const cart = useCartStore((state) => state.cart);
  // const addToCart = useCartStore((state) => state.addToCart);
  // const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    console.table(cart);
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Cart Items</h2>
        <ul>
          {dummyCart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-2 border-b"
            >
              <div className="flex-1">{item.name}</div>
              <div className="text-gray-700">${item.price}</div>
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      {cart.length > 0 && (
        <>
          <MyCart />
          <div className="my-5 mx-auto text-center">
            <button
              className="p-2 rounded-lg bg-red-400 text-white"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartStore;
