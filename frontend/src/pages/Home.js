import React from "react";

import moment from "moment";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import unidecode from "unidecode";

const Home = ({ news, postsLimit, categories }) => {

  const navigate = useNavigate();

  const { Meta } = Card;

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
          }}>En son boş başlıklar</h1>

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
          <h1 style={{ 
            float: "right",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#000",
            fontFamily: "monospace",
            margin: "20px",
           }}>Yapılan en son boşlar</h1>

          {postsLimit &&
            postsLimit.data.map((post, index) => {
              return (
                <Card
                  key={index}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
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
                        navigate(`/users/${post.user._id}`);
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
        <Col span={4}>
              {
                news ? news.data.map((item, index) => {
                  return (
                    <Card
                    key={index}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.avatar} />}
                  >
                    <Meta title={moment(item.createdAt).format("DD MM YYYY hh:mm:ss")} description="news" />
                  </Card>
                  )
                }) : null
              }
        </Col>
      </Row>
    </>
  );
};

export default Home;
