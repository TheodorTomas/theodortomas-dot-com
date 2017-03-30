import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.1em 1em;
  margin: 0.1em;
  text-decoration: none !important;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  line-height: 20px;

  /* unvisited link */
  &:link {
      color: #777;
  }

  /* visited link */
  &:visited {
      color: #777;
  }

  /* mouse over link */
  &:hover {
      color: white;
  }

  /* selected link */
  &:active {
      color: white;
  }
`;
