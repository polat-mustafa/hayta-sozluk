import React, {useEffect} from 'react'
import { Row, Col, Card } from "antd";
import moment from 'moment';
import {useNavigate} from 'react-router-dom';

import { fetchAllCategories } from '../../features/categories';
import { fetchAllUsers } from '../../features/users';
import { useDispatch, useSelector } from 'react-redux';

const Bosisler = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(fetchAllCategories());
        dispatch(fetchAllUsers());
    }, [dispatch]);

    const filterCategories = (name) => {
      const filtered = categories.filter((category) => category.name === name);
      return filtered;
    };

    const filterUsersById = (id) => {
      const filtered = users.filter((user) => user._id === id);
      return filtered.length > 0 ? filtered[0].username : null;
    };


    const filtered = filterCategories("bosisler");

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

export default Bosisler