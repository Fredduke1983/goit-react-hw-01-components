import styled from '@emotion/styled';

const MainStyle = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: center;
  width: 100%;
`;

const ProfileStyle = styled.div`
  display: grid;

  width: 330px;
  height: 430px;
  margin: 50px auto;
  border-radius: 5%;
  box-shadow: 1px 1px 5px grey;
`;

const Description = styled.div`
  justify-content: center;

  background-color: rgba(225, 247, 239, 0.7);
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;

  padding: 20px 0;
`;

const Stats = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    border: 1px solid #80808096;
  }

  li:first-of-type {
    border-bottom-left-radius: 15px;
  }
  li:last-of-type {
    border-bottom-right-radius: 15px;
  }
`;

const ImageAvatar = styled.img`
  width: 150px;
  margin-bottom: 20px;

  box-shadow: 1px 1px 5px grey;
  border: 1px solid grey;
  border-radius: 50%;

  background: aliceblue;
`;

const Name = styled.h2`
  margin-bottom: 10px;
`;
const Tag = styled.p`
  margin-bottom: 5px;
`;
const Location = styled.p`
  color: grey;
`;

const Label = styled.span`
  font-weight: 600;
`;
const Quantity = styled.span`
  color: grey;
`;

export {
  MainStyle,
  ProfileStyle,
  Description,
  Stats,
  ImageAvatar,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
};
