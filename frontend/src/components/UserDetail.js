import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserById } from "../features/users/index";
const { Meta } = Card;

const UserDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    console.log("user", user);
    console.log("id", id);

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        marginTop: "50px"

    }}>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={user.username}
          description={user.email}
        />
      </Card>
      <div>
        <h1>Yayınlanan gönderiler</h1>
        <div>Yayınlanan gönderi sayısı: {user.posts && user.posts.length}</div>
        <div>
            {
                user.posts && user.posts.map((post, index) => {
                    return <div key={index}>{post.content}</div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
