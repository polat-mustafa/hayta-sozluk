import React from "react";

import moment from "moment";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import unidecode from "unidecode";
import { Text } from "@chakra-ui/react";

const Home = ({ news, postsLimit, categories }) => {

  const navigate = useNavigate();


  const groupByCategory = categories && categories.data.reduce((a, e) => {
    let estKey = (e['name']); 

    (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
    return a;
  }, {});



  return (
    <>
      <Row
        style={{
          height: "100%",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Col span={4} >
          <h1 style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "orange",
            textAlign: "center",
            marginBottom: "20px",
          }}>Taze başlıklar</h1>

          <ul style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            color: "orange",
            fontSize: "15px",
            fontWeight: "bold",

          }}>
            {
              groupByCategory && Object.keys(groupByCategory).map((category, index) => {
                return (
                  <li key={index}>
                    <a href={`/${unidecode(category)}`}>#{category}</a>
                  </li>
                )
              })
            }
          </ul>
        </Col>
        <Col span={16}>
          <Text style={{ 
            float: "right",
            fontSize: "20px",
            fontWeight: "bold",
            color: localStorage.getItem("chakra-ui-color-mode") === "light" ? "#000000" : "#FFFFFF",
            fontFamily: "monospace",
            margin: "20px",
           }}>Yapılan en son boşlar</Text>

          {postsLimit &&
            postsLimit.data.map((post, index) => {
              return (
                <Card
                  key={index}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    backgroundColor: localStorage.getItem("chakra-ui-color-mode") === "light" ? "#FFFFFF" : '#1A202C',
                    color: localStorage.getItem("chakra-ui-color-mode") === "light" ? "#000000" : '#FFFFFF',
                    border: "none",
                  }}
                >
                  <div>{post.content}</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      onClick={() => {
                        navigate(`/user/${post.user._id}`);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "orange",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      {post.user.username}
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      {moment(post.date).format("DD MM YYYY hh:mm:ss")}
                    </div>
                  </div>
                </Card>
              );
            })}
        </Col>

      </Row>
    </>
  );
};

export default Home;
