import { Routes, Route } from "react-router-dom";
import Layout from "./components/commons/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import { useContext, useEffect } from "react";
import { AppContext } from "./utils/context/AppContext";
import { AppActions } from "./utils/context/actions";

const App: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: AppActions.SET_BULK,
          payload: {
            products: data,
            isLoading: false,
          },
        });
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        dispatch({
          type: AppActions.SET_BULK,
          payload: {
            isLoading: false,
          },
        });
      });
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* fallback route */}
      </Routes>
    </Layout>
  );
};

export default App;
