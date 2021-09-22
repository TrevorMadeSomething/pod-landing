import styled from "styled-components";

const media = {
  tablet: "@media(max-width: 1270px)",
};

export const Container = styled.div`
  position: relative;
  width: 1250px;
  height: 640px;
  ${media.tablet} {
    width: 100vw;
    height: 100vh;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: -28px;
  left: 0px;
  z-index: 105;

  ${media.tablet} {
    top: 50px;
    left: 40px;
  }
`;

export const HostPicture = styled.img`
  float: right;
  z-index: -5;
  ${media.tablet} {
    display: none;
  }
`;

export const HostPictureMobile = styled.img`
  display: none;
`;

export const HostPictureTablet = styled.img`
  display: none;
  position: absolute;
  right: 0;

  ${media.tablet} {
    display: block;
  }
`;

export const Dots = styled.img`
  position: absolute;
  bottom: -52px;
  right: 0px;

  ${media.tablet} {
    bottom: auto;
    left: 15px;
    z-index: 55;
    top: 920px;
    right: auto;
  }
`;

export const SmallCard = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 723px;
  height: 509px;
  background-color: #121725;
  padding-top: 81px;

  ${media.tablet} {
    bottom: auto;
    top: 258px;
    left: 40px;
    z-index: 55;
    right: auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
`;

export const LittleIcon = styled.img`
  margin-right: 40px;
`;

export const Title = styled.h1`
  font-family: "Chivo", sans-serif;
  font-size: 52px;
  line-height: 62px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 24px;
`;

export const GreenTitle = styled.h1`
  font-family: "Chivo", sans-serif;
  font-size: 52px;
  line-height: 62px;
  text-transform: uppercase;
  color: #54e6af;
`;

export const Body = styled.p`
  max-width: 445px;
  font-family: "Chivo", sans-serif;
  font-size: 18px;
  line-height: 28px;
  text-transform: none;
  color: #c2cbe5;
  margin-bottom: 40px;
`;

export const RequestEmailBtn = styled.button`
  position: absolute;
  left: 260px;
  top: 358px;
  border: none;
  border-radius: 55px;
  width: 162px;
  height: 46px;
  background-color: #54e6af;
  font-weight: bold;
  font-size: 14px;
  color: #121725;

  :active {
    transform: scale(0.9);
  }
  :hover {
    background-color: #b3ffe2;
  }
`;

export const ErrorMessage = styled.span`
  color: #fb3e3e;
  padding-left: 25px;
`;

export const EmailInputField = styled.input`
  width: 427px;
  height: 56px;
  border: none;
  border-radius: 45px;
  background-color: #2c344b;
  color: #9599a5;
  position: relative;
  padding-left: 32px;
  padding-top: 0px;
  margin-bottom: 5px;

  ::placeholder {
    color: #9599a5;
    position: absolute;
    font-size: 14px;
    left: 32px;
    top: 18px;
  }

  :focus {
    outline: none;
    box-shadow: none;
  }
`;
