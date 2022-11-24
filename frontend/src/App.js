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

import { getAllUsers, getAllPosts, getAllCategories, getNews, getFetchLimitPosts } from "./api/index";
import Channels from "./components/channels/Channels";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
function App() {


  const {
    data: users,
  } = useQuery(["users"], getAllUsers, {
    refetchOnWindowFocus: false,
  });

  
  const {
    data: posts
  } = useQuery(["posts"], getAllPosts, {
    refetchOnWindowFocus: false, 
  });

  const {
    data: categories
  } = useQuery(["categories"], getAllCategories, {
    refetchOnWindowFocus: false, 
  });

  const {
    data: news
  } = useQuery(["news"], getNews, {
    refetchOnWindowFocus: false, 
  });
  
  const { 
    data: postsLimit 
  } = useQuery(["postsLimit"], getFetchLimitPosts, {
    refetchOnWindowFocus: false,
  });


  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            <Navbar categories={categories} />
            <Routes>
              <Route path="/" element={<Home news={news} postsLimit={postsLimit} categories={categories}/>} />
              <Route
                path="/user/:id"
                element={
                  <UserDetail
                    users={users}
                    posts={posts}
                    categories={categories}
                    news={news}
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
                    news={news}
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
                    news={news}
                  />
                }
              />
              <Route
                path="/gundem"
                element={
                  <Gundem users={users} posts={posts} categories={categories}  news={news}/>
                }
              />
              <Route
                path="/kanal"
                element={
                  <Channels
                    users={users}
                    posts={posts}
                    categories={categories}
                    news={news}
                  />
                }
              />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
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
