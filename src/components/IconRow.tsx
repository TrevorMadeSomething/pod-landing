import { IconContainer, LittleIcon } from "./styles/MainStyles.style";

import React from "react";

const IconRow = () => {
  return (
    <IconContainer>
      <LittleIcon src="/assets/desktop/spotify.svg" />
      <LittleIcon src="/assets/desktop/apple-podcast.svg" />
      <LittleIcon src="/assets/desktop/google-podcasts.svg" />
      <LittleIcon src="/assets/desktop/pocket-casts.svg" />
    </IconContainer>
  );
};

export default IconRow;
