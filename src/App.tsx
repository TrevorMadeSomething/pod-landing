import {
  Container,
  Logo,
  HostPicture,
  Dots,
  SmallCard,
  GreenTitle,
  Title,
  Body,
  ErrorMessage,
} from "./components/styles/MainStyles.style";
import GlobalStyle from "./components/styles/GlobalStyle";
import IconRow from "./components/IconRow";
import EmailInput from "./components/EmailInput";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("Email Address");
  const [noError, setNoError] = useState(true);

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Logo src="/assets/desktop/logo.svg" />
        <HostPicture src="/assets/desktop/image-host.jpg" />
        <Dots src="/assets/desktop/bg-pattern-dots.svg" />
        <SmallCard>
          <GreenTitle>Publish your podcasts</GreenTitle>
          <Title>everywhere.</Title>
          <Body>
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </Body>
          <EmailInput
            email={email}
            setEmail={setEmail}
            noError={noError}
            setNoError={setNoError}
          />
          {noError ? (
            ""
          ) : (
            <ErrorMessage>Oops! Please check your email</ErrorMessage>
          )}
          <IconRow />
        </SmallCard>
      </Container>
    </div>
  );
}
