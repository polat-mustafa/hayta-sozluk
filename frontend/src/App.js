import "./App.css";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import Bosisler from "./components/channels/Bosisler";
import Yazilim from "./components/channels/Yazilim";
import Gundem from "./components/channels/Gundem";

import { ChakraProvider } from "@chakra-ui/react";

// redux
import { Provider } from "react-redux";
import { store } from "./features/index";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";

import { getAllUsers, getAllPosts, getAllCategories } from "./api/index";
import Channels from "./components/channels/Channels";
function App() {
  const {
    data: users
  } = useQuery(["users"], getAllUsers, {
    refetchOnWindowFocus: false, // don't refetch on window focus
  });
  const {
    data: posts
  } = useQuery(["posts"], getAllPosts, {
    refetchOnWindowFocus: false, // don't refetch on window focus
  });

  const {
    data: categories
  } = useQuery(["categories"], getAllCategories, {
    refetchOnWindowFocus: false, // don't refetch on window focus
  });

  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/user/:id"
                element={
                  <UserDetail
                    users={users}
                    posts={posts}
                    categories={categories}
                  />
                }
              />
              <Route
                path="/bosisler"
                element={
                  <Bosisler
                    users={users}
                    posts={posts}
                    categories={categories}
                  />
                }
              />
              <Route
                path="/yazilim"
                element={
                  <Yazilim
                    users={users}
                    posts={posts}
                    categories={categories}
                  />
                }
              />
              <Route
                path="/gundem"
                element={
                  <Gundem users={users} posts={posts} categories={categories} />
                }
              />
              <Route
                path="/kanal"
                element={
                  <Channels
                    users={users}
                    posts={posts}
                    categories={categories}
                  />
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
