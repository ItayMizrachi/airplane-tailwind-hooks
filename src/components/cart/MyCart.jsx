import { useCartSelectors } from "../../store/cart-store";

const MyCart = () => {
  const cart = useCartSelectors.use.cart();
  const removeFromCart = useCartSelectors.use.removeFromCart();
  //   const cart = useCartStore((state) => state.cart);
  //   const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h2 className="text-lg font-bold mb-4">My Cart</h2>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center py-2 border-b"
          >
            <div className="flex-1">{item.name}</div>
            <div className="text-gray-700">${item.price}</div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 rounded-lg bg-red-400 ml-2 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
