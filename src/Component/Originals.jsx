import styled from "styled-components";
import json from "../JSON/Data.json";
import { Link } from "react-router-dom";

const Originals = () => {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {json.map(
          (data, index) =>
            data.type === "original" && (
              <Link key={index} to={`/details/${data.id1}`}>
                <Card>
                  <img src={data.cardImg} alt="" />
                </Card>
              </Link>
            )
        )}
      </Content>
    </Container>
  );
};

export default Originals;

const Container = styled.div`
  padding: 30px 40px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Card = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms;
  img {
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
