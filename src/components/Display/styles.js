import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  overflow: hidden;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--display);

  > p {
    font-size: 40px;
    font-weight: 700;
    text-align: center;

    color: ${props => props.isNegative ? "var(--red)" : "var(--green)"}
  }
`;
