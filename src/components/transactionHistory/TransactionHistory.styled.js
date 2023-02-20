import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  & tr:not(:last-child) {
    border-bottom: 1px solid rgba(90, 86, 86, 0.5);
  }

  & tr th {
    width: calc(100% / 3);
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    background-color: rgb(138, 218, 223);
    color: white;
  }

  & tr th:not(:last-child) {
    border-right: 1px solid rgb(199, 194, 194);
  }

  & tr:nth-child(2n) {
    background-color: white;
  }

  & tr:nth-child(2n -1) {
    background-color: rgb(239, 236, 236);
  }

  & tr td {
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    font-size: 15px;
    color: grey;
  }

  & tr td:nth-child(1) {
    padding-left: 20px;
  }

  & tr td:not(:first-child) {
    text-align: center;
  }

  & tr td:not(:last-child) {
    border-right: 1px solid rgb(199, 194, 194);
  }
`;
