import styled from "styled-components";
import bg from "../assets/images/home-background.png";
import Slider from "../Component/HeroSlider";
import Company from "../Component/Company";
import Recommended from "../Component/Recommended";
import NewToDisneyPlus from "../Component/NewToDisneyPlus";
import Originals from "../Component/Originals";
import Trending from "../Component/Trending";

const Home = () => {
  return (
    <Container>
      <Slider />
      <Company />
      <Recommended />
      <NewToDisneyPlus />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 70px;
  overflow-x: hidden;
`;
