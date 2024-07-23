import styled from "styled-components";
import disney from "../assets/images/viewers-disney.png";
import pixar from "../assets/images/viewers-pixar.png";
import marvel from "../assets/images/viewers-marvel.png";
import starwars from "../assets/images/viewers-starwars.png";
import national from "../assets/images/viewers-national.png";
import disney1 from "../assets/videos/disney.mp4";
import pixar1 from "../assets/videos/pixar.mp4";
import marvel1 from "../assets/videos/marvel.mp4";
import starwars1 from "../assets/videos/star-wars.mp4";
import national1 from "../assets/videos/national-geographic.mp4";

const Company = () => {
  return (
    <Container>
      <a href="https://www.disneyinternational.com/">
        <Card>
          <img src={disney} alt="logo" />
          <video autoPlay muted loop={true} playsInline={true}>
            <source src={disney1} type="video/mp4" />
          </video>
        </Card>
      </a>
      <a href="https://www.pixar.com/">
        <Card>
          <img src={pixar} alt="" />
          <video autoPlay muted loop={true} playsInline={true}>
            <source src={pixar1} type="video/mp4" />
          </video>
        </Card>
      </a>

      <a href="https://www.marvel.com/">
        <Card>
          <img src={marvel} alt="" />
          <video autoPlay muted loop={true} playsInline={true}>
            <source src={marvel1} type="video/mp4" />
          </video>
        </Card>
      </a>
      <a href="https://www.starwars.com/">
        <Card>
          <img src={starwars} alt="" />
          <video autoPlay muted loop={true} playsInline={true}>
            <source src={starwars1} type="video/mp4" />
          </video>
        </Card>
      </a>
      <a href="https://www.nationalgeographic.com/">
        <Card>
          <img src={national} alt="" />
          <video autoPlay muted loop={true} playsInline={true}>
            <source src={national1} type="video/mp4" />
          </video>
        </Card>
      </a>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 40px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Card = styled.div`
  width: 200px;
  height: 50px;
  padding-top: 56px;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    video {
      opacity: 1;
    }
  }
`;
