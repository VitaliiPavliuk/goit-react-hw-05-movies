import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkSt = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all 0.3s;
  color: black;

  &.active {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;
