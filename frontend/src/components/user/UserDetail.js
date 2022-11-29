import React from "react";

import { Card } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserById } from "../../features/users/index";
import { Button } from "@chakra-ui/react";


const UserDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    const isLogin = localStorage.getItem("user");

    const logOut = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };



  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        margin: "0 auto",
        color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",
        backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "#1A202C" : "white",
    }}>
      <Card
        style={{
          width: 300,
          color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",
          backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "#1A202C" : "white",
          border: "none",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              borderRadius: "50%",
              margin: "0 auto",
              marginTop: "20px",

            }}
          />
        }
      >
        <div 
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",
            backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "#1A202C" : "white",
        }}>
          <p> {user?.username}</p>
          <p style={{color: "gray"}}> {user?.email}</p>
        </div>
      </Card>
      <div>
        <div style={{
            padding: "10px",
            marginBottom: "10px",
            color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",
            backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "#1A202C" : "white",
            fontFamily: "monospace",
            fontSize: "20px",

        }}>
        <h1 style={{color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",}}>Yayınlanan gönderiler</h1>
        <div>Yayınlanan gönderi sayısı: {user.posts && user.posts.length}</div>
        </div>

        <div>
            {
                user.posts && user.posts.map((post, index) => {
                    return <div key={index} style={{
                        borderBottom: "1px solid gray",
                        borderRadius: "5px",
                        padding: "10px",

                    }}>{post.content}</div>
                })
            }
        </div>
      </div>

      {isLogin && (
        <Button style={{
          marginTop: "20px",
          marginLeft: "20px",
          color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",
          backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "#1A202C" : "white",
          border: "none",
      }} onClick={() => window.history.back()}>Geri Dön</Button>
      )}

      {
          isLogin && (
            <Button style={{
                marginTop: "20px",
                marginLeft: "20px",
                color: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "white" : "black",
                backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "dark" ? "#1A202C" : "white",
                border: "none",
            }} onClick={() => logOut()}>Çıkış Yap</Button>
          )
      }

    </div>
  );
};

export default UserDetail;
