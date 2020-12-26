import React, { HTMLAttributes } from "react";
import * as S from "./MainHeader.styles";

interface MainHeaderProps extends HTMLAttributes<string> {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <>
      <S.Title>{title}</S.Title>
    </>
  );
};

export default MainHeader;
