import React from "react";

import { Link, Button } from "@chakra-ui/react";
import SearchModal from "../components/Search/SearchModal";


const Navbar = ({ categories }) => {

  const handleMode = () => {
    const storage = localStorage.getItem("chakra-ui-color-mode");
    if (storage === "light") {
      localStorage.setItem("chakra-ui-color-mode", "dark");
    } else {
      localStorage.setItem("chakra-ui-color-mode", "light");
    }
    window.location.reload();
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="logo" />
      <Link
        href="/"
        className="logo"
        style={{
          width: "100px",
          height: "35px",
          margin: "16px 24px 16px 0",
          float: "left",
          borderRadius: "5px",
          cursor: "pointer",
          underline: "none",
          textDecoration: "none",
        }}
      >
        {" "}
        <span
          style={{
            color:
              localStorage.getItem("chakra-ui-color-mode") === "light"
                ? "#000000"
                : "#FFFFFF",
            fontWeight: "bold",
            fontFamily: "cursive",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Hayta{" "}
          <span
            style={{
              color: "orange",
              fontWeight: "bold",
              fontFamily: "cursive",
            }}
          >
            Sözlük
          </span>
        </span>{" "}
      </Link>
      <div
        style={{
          margin: "10px 34px 16px 0",
          width: "100px",
          height: "35px",
          float: "left",
          borderRadius: "5px",
        }}
      >
        <SearchModal categories={categories} />
      </div>

      <Link
        href="/bosisler"
        style={{
          width: "100px",
          height: "35px",
          margin: "20px 34px 16px 0",
          float: "left",
          borderRadius: "5px",
          cursor: "pointer",
          underline: "none",
          textDecoration: "none",
          color: "orange",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
      >
        #bosisler
      </Link>

      <Link
        href="/yazilim"
        style={{
          width: "100px",
          height: "35px",
          margin: "20px 24px 16px 0",
          float: "left",
          borderRadius: "5px",
          cursor: "pointer",
          underline: "none",
          textDecoration: "none",
          color: "orange",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
      >
        #yazilim
      </Link>

      <Link
        href="/gundem"
        style={{
          width: "100px",
          height: "35px",
          margin: "20px 24px 16px 0",
          float: "left",
          borderRadius: "5px",
          cursor: "pointer",
          underline: "none",
          textDecoration: "none",
          color: "orange",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
      >
        #gundem
      </Link>

      <div
        className="menu"
        style={{
          lineHeight: "64px",
          float: "right",
        }}
      >
        <Button
          colorScheme="orange"
          variant="ghost"
          onClick={() => handleMode()}
          style={{ color: "orange" }}
        >
          Dark & Light
        </Button>
        {userData ? (
          <Link
            href={`/user/${userData?._id}`}
            style={{
              marginRight: "20px",
              color: "orange",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "cursive",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Profil
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              style={{
                marginRight: "20px",
                color: "orange",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "cursive",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              style={{
                marginRight: "20px",
                color: "orange",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "cursive",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
