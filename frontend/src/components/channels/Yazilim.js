import React from "react";
import { Row, Col, Card } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import unidecode from "unidecode";

const Yazilim = ({ users, posts, categories, news }) => {
  const { Meta } = Card;
  const navigate = useNavigate();

  const filterCategories = (name) => {
    const filtered =
      categories &&
      categories.data.filter((category) => category.name === name);
    return filtered;
  };

  const filterUsersById = (id) => {
    const filtered = users.data.filter((user) => user._id === id);
    return filtered.length > 0 ? filtered[0].username : null;
  };

  const groupByCategory =
    categories &&
    categories.data.reduce((a, e) => {
      let estKey = e["name"];

      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});

  const filtered = filterCategories("yazılım");

  return (
    <div>
      <>
        <Row
          style={{
            height: "100%",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Col span={4}>
            <h1
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "orange",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              En son boş başlıklar
            </h1>

            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                color: "orange",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {groupByCategory &&
                Object.keys(groupByCategory).map((category, index) => {
                  return (
                    <li key={index}>
                      <a href={`/${unidecode(category)}`}>#{category}</a>
                    </li>
                  );
                })}
            </ul>
          </Col>
          <Col span={16}>
            {filtered &&
              filtered.map((post, index) => {
                return (
                  <Card
                    key={index}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div>{post.posts[0].content}</div>
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
                          navigate(`/user/${post.posts[0].user}`);
                        }}
                        style={{
                          cursor: "pointer",
                          color: "orange",
                          fontWeight: "bold",
                        }}
                      >
                        {filterUsersById(post.posts[0].user) &&
                          filterUsersById(post.posts[0].user)}
                      </div>
                      <div>
                        {moment(post.date).format("DD MM YYYY hh:mm:ss")}
                      </div>
                    </div>
                  </Card>
                );
              })}
          </Col>
          <Col span={4}>
            {" "}
            {news
              ? news.data.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.avatar} />}
                    >
                      <Meta
                        title={moment(item.createdAt).format(
                          "DD MM YYYY hh:mm:ss"
                        )}
                        description="news"
                      />
                    </Card>
                  );
                })
              : null}
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Yazilim;
