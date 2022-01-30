import styled from 'styled-components';

export const ButtonStyle = styled.button`
  flex: 1;
  padding: 15px 20px;
  border-radius: 6px;

  background: ${props => props.add ? "var(--green)" : "var(--red)"};
  color: var(--primary);
  font-size: 16px;

  cursor: pointer;
`;

