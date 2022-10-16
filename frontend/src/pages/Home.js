import React, { useEffect, useState } from "react";

import { fetchAllPosts } from "../features/posts/index";
import { fetchAllCategories } from "../features/categories";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);

  const [sorted, setSorted] = useState(null);

  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      setSorted(sortByDate(posts));
    }
  }, [posts, status]);

  const sortByDate = (posts) => {
    const filteredHaveDate = posts.filter((post) => post.date);
    const sorted = filteredHaveDate.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return sorted;
  };

  console.log("sorted", sorted);

  return (
    <>
      <Row
        style={{
          height: "100%",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Col span={4} style={{ backgroundColor: "red" }}>
          col-8
        </Col>
        <Col span={16}>
          {sorted &&
            sorted.map((post, index) => {
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
        <Col span={4} style={{ backgroundColor: "blue" }}>
          col-8
        </Col>
      </Row>
    </>
  );
};

export default Home;
