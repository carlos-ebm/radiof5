import React from "react";
import { Layout, Tabs, Card } from "antd";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../../components/Admin/RegisterForm";

import "./UserAdd.scss";

export default function UserAdd() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="user-add">
      <Content className="user-add__content">
        
            <Card className="user-add__card">
              <RegisterForm />
            </Card>
        
      </Content>
    </Layout>
  );
}