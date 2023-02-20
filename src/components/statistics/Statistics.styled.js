import styled from 'styled-components';

export const StyledStatistics = styled.section`
  margin-bottom: 15px;
  padding-top: 20px;
  background-color: azure;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  & .title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: rgb(90, 86, 86);
    text-transform: uppercase;
  }

  & .stats__list {
    display: flex;
    justify-content: space-between;
  }

  & .stats__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  & .label {
    margin: 10px;
    font-size: 20px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.7);
  }

  & .percentage {
    font-size: 15px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.6);
  }
`;
