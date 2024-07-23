import styled from "styled-components";
import image1 from "../assets/images/cta-logo-one.svg";
import image2 from "../assets/images/cta-logo-two.png";
import image3 from "../assets/images/login-background.jpg";
import Swal from "sweetalert2";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <img src={image1} alt="" />
        <button
          onClick={() => {
            Swal.fire("Details Coming Soon!");
          }}
        >
          Get All Here
        </button>
        <p>
          Get Premier Access to Raya and the last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          the Disney Bundle will increase by $1.
        </p>
        <img src={image2} alt="" />
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-image: url(${image3});
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    width: 90%;
  }

  button {
    width: 100%;
    padding: 17px 0px;
    border: none;
    outline: none;
    font-family: Poppins;
    font-weight: 700;
    font-size: 18px;
    background-color: #0063e5;
    color: #fff;
    border-radius: 4px;
    transition: all 350ms;

    &:hover {
      cursor: pointer;
      background-color: #0483ee;
    }
  }

  p {
    text-align: center;
    font: 11px;
  }

  img {
    width: 600px;
    margin: 10px;
    @media (max-width: 650px) {
      width: 90%;
    }
  }
`;
