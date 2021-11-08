import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

type HeaderLinkProps = {
  isselected: Boolean;
};

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0 36px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderLink = styled(Link)`
  margin-right: 36px;
  color: #17191c;
  text-decoration: none;
  font-size: 14px;
  font-weight: medium;
  &:hover {
    font-weight: bold;
  }
  padding: 16px;
  border-bottom: ${(props: HeaderLinkProps) =>
    props.isselected ? "2px solid #17191C" : ""};
  font-weight: ${(props: HeaderLinkProps) =>
    props.isselected ? "bold" : "medium"};
`;

const Header: FC = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <HeaderLink isselected={location.pathname === "/"} to="/">
        ホーム
      </HeaderLink>
      <HeaderLink isselected={location.pathname === "/pokemon"} to="/pokemon">
        pokemon
      </HeaderLink>
      <HeaderLink isselected={location.pathname === "/skills"} to="/skills">
        スキル
      </HeaderLink>
      <HeaderLink isselected={location.pathname === "/works"} to="/works">
        実績
      </HeaderLink>
    </Wrapper>
  );
};

export default Header;
