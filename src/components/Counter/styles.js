import styled from 'styled-components';

export const Container = styled.div`
  --padding: 16px;

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 400px;
  padding: var(--padding);

  background: var(--primary);
  border-radius: 8px;
  box-shadow: 0 10px 50px 0 var(--border);

  display: flex;
  flex-direction: column;

`;

export const WrapperButton = styled.div`
  margin-top: var(--padding);

  display: flex;
  gap: 16px;
`;