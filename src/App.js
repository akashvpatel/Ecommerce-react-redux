import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notificaaton";
import { Routes, Route } from 'react-router-dom';
import Courses from './components/Layout/Courses';
import Footer from "./components/Layout/Footer";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
 
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);


  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data...",
        })
      )
      const response = await fetch(
        "https://redux-app-985ab-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Courses />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Layout>
    </Fragment>

  );
}

export default App;
