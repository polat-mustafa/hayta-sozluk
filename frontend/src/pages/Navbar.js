import React from "react";

import { Link, Image } from "@chakra-ui/react";
import SearchModal from "../components/Search/SearchModal";

const Navbar = ({ categories }) => {



  return (
    <>
      <div className="logo" />
      <Link
        href="/"
        className="logo"
        style={{
          width: "100px",
          height: "35px",
          background: "rgba(255, 255, 255, 0.2)",
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
            color: "black",
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
        <div style={{
          background: "rgba(255, 255, 255, 0.2)",
          margin: "10px 34px 16px 0",
          width: "100px",
          height: "35px",
          float: "left",
          borderRadius: "5px",
        }}>
      <SearchModal categories={categories} />
      </div>

      <Link
        href="/bosisler"
        style={{
          width: "100px",
          height: "35px",
          background: "rgba(255, 255, 255, 0.2)",
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
          background: "rgba(255, 255, 255, 0.2)",
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
          background: "rgba(255, 255, 255, 0.2)",
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
      </div>
    </>
  );
};

export default Navbar;
