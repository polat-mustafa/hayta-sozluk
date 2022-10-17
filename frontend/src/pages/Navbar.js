import React, { useEffect, useState } from "react";

import { Link, Input } from "@chakra-ui/react";


import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocation
} from "../features/locations/index";

const Navbar = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.location);
  console.log("location", locations);
  //const [locationPath, setLocationPath] = useState(location.pathname);

  useEffect(() => {
    //setLocationPath(location.pathname);

    if (location.pathname === "/") {
      dispatch(setLocation("home"));
    } else if (location.pathname === "/kanallar") {
      dispatch(setLocation("channels"));
    } else if (location.pathname === "/bosisler") {
      dispatch(setLocation("bosisler"));
    } else if (location.pathname === "/yazilim") {
      dispatch(setLocation("yazilim"));
    } else if (location.pathname === "/gundem") {
      dispatch(setLocation("gundem"));
    }


  }, [location.pathname, dispatch]);

  //console.log("locationPath", locationPath);

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

      <Input
        placeholder="Search"
        style={{
          width: "300px",
          height: "35px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px 24px 16px 0",
          float: "left",
          borderRadius: "5px",
          underline: "none",
          textDecoration: "none",
          color: "orange",
          fontWeight: "revert-layer",
          fontFamily: "cursive",
          
          
        }}
      />

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
