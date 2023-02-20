import styled from 'styled-components';

const setBgColor = props => {
  switch (props.statusEvent) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    default:
      return 'black';
  }
};

export const FriendsItemStyled = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 20px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  margin-right: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  margin-right: 25px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: rgb(90, 86, 86);
`;
