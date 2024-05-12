import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AddToCartButtonProps {
  foodItem: any;
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ foodItem }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showDoneMessage, setShowDoneMessage] = useState<boolean>(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = () => {
    const newCartItem: CartItem = {
      name: foodItem.name,
      price: foodItem.price,
      quantity,
      totalPrice: foodItem.price * quantity,
    };

    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === foodItem.name
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      updatedCartItems[existingItemIndex].totalPrice =
        updatedCartItems[existingItemIndex].price *
        updatedCartItems[existingItemIndex].quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleOrder = () => {
    console.log("Cart Items:", cartItems);
    setShowDoneMessage(true);
    setTimeout(() => {
      setShowDoneMessage(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="flex items-center max-h-12"
      >
        {cartItems.length > 0 ? (
          <>
            <motion.button
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-gray-300 text-gray-800 font-semibold py-1 px-3 rounded-l"
              onClick={handleDecrement}
            >
              -
            </motion.button>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white text-gray-800 font-semibold py-1 px-4"
            >
              {quantity}
            </motion.span>
            <motion.button
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-gray-300 text-gray-800 font-semibold py-1 px-3 rounded-r"
              onClick={handleIncrement}
            >
              +
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
              onClick={handleOrder}
            >
              Order
            </motion.button>
          </>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </motion.button>
        )}
        {showDoneMessage && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-green-500 text-white px-4 py-2 rounded-md ml-4"
          >
            Order Saved! {cartItems.length} items in the cart.
          </motion.span>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AddToCartButton;
