import React, {useEffect} from 'react'
import { Row, Col, Card } from "antd";
import moment from 'moment';
import {useNavigate} from 'react-router-dom';


const Yazilim = ({ users, posts, categories }) => {

  const navigate = useNavigate();

  const filterCategories = (name) => {
    const filtered = categories && categories.data.filter((category) => category.name === name);
    return filtered;
  };

  const filterUsersById = (id) => {
    const filtered = users.data.filter((user) => user._id === id);
    return filtered.length > 0 ? filtered[0].username : null;
  };

  const filtered = filterCategories("yazılım");

  return (
    <div>
            <>
      <Row style={{
        height: "100%",
        width: "100%",
        marginTop: "20px"

      }}>
        <Col span={4} style={{backgroundColor: "red"}}>col-8</Col>
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
                      {filterUsersById(post.posts[0].user) && filterUsersById(post.posts[0].user)}
                    </div>
                    <div>{moment(post.date).format("DD MM YYYY hh:mm:ss")}</div>
                  </div>
                </Card>
              );
            })}
        </Col>
        <Col span={4} style={{backgroundColor: "blue"}}>col-8</Col>
      </Row>
    </>
    </div>
  )
}

export default Yazilim