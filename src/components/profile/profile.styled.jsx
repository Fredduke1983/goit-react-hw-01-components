import styled from '@emotion/styled';

export const MainStyle = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: center;
  width: 100%;
`;

export const ProfileStyle = styled.div`
  display: grid;

  width: 330px;
  height: 430px;
  margin: 50px auto;
  border-radius: 5%;
  box-shadow: 1px 1px 5px grey;
`;

export const Description = styled.div`
  justify-content: center;

  background-color: rgba(225, 247, 239, 0.7);
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;

  padding: 20px 0;
`;

export const Stats = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    border: 1px solid #80808096;
  }

  li:first-child {
    border-bottom-left-radius: 15px;
  }
  li:last-child {
    border-bottom-right-radius: 15px;
  }
`;

export const ImageAvatar = styled.img`
  width: 150px;
  margin-bottom: 20px;

  box-shadow: 1px 1px 5px grey;
  border: 1px solid grey;
  border-radius: 50%;

  background: aliceblue;
`;

export const Name = styled.h2`
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  margin-bottom: 5px;
`;
export const Location = styled.p`
  color: grey;
`;

export const Label = styled.span`
  font-weight: 600;
`;
export const Quantity = styled.span`
  color: grey;
`;
