import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Sidebar.styles";

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      name: "Colors",
      path: "/colors",
    },
    {
      name: "Typography",
      path: "/typography",
    },
    {
      name: "Spaces",
      path: "/spaces",
    },
    {
      name: "Buttons",
      path: "/buttons",
    },
    {
      name: "Inputs",
      path: "/inputs",
    },
    {
      name: "Grid",
      path: "/grid",
    },
  ];
  return (
    <S.Wrapper>
      <S.Title>
        <Link to="/">
          <span>Dev</span>challenges.io
        </Link>
      </S.Title>

      <S.Menu>
        {menuItems.map((item) => (
          <li key="item">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
};

export default Sidebar;
