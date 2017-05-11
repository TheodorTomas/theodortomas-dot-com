/**
 * Styles a contact icon button.
 */

import styled from 'styled-components';

const StyledIcon = styled.i`
 text-decoration: none !important;
 display: flex;
 justify-content: flex-end;
 text-decoration: none !important;
 color: #777;
 font-size: 18px;

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

export default StyledIcon;
