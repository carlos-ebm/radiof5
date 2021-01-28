import React from "react";
import { Button, Menu } from "antd";
import {Link} from "react-router-dom"
import {
  PoweroffOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/img/png/LogoProvisorio.png";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
      <Menu className="menu-top" theme="dark" mode="horizontal" /*defaultSelectedKeys={['1']} onClick={toPage}*/>
        <Menu.Item className="menu-top__item" key="1">Perfil <Link to="/admin/profile"/></Menu.Item>
        <Menu.Item className="menu-top__item" key="2">Publicaciones</Menu.Item>
        <Menu.Item className="menu-top__item" key="3">Programas</Menu.Item>
        <Menu.Item className="menu-top__item" key="4">Usuarios <Link to="/admin/user-add"/></Menu.Item>
        <Menu.Item className="menu-top__item" key="5">Publicidad</Menu.Item>
        <Menu.Item className="menu-top__item" key="6">Estadisticas</Menu.Item>
      </Menu>
  );
}