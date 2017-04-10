import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  text-decoration: none !important;
  font-weight: 700;
  text-transform: uppercase;

  color: #777;

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
