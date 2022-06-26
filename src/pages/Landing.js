import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const BounceDiv = styled.div`
  animation: 2.25s ${keyframes`${bounce}}`} infinite;
`;

const Landing = () => {
  return (
    <div className="landing-page-content">
      <section class="banner-text">
        <BounceDiv>
          <h1>Well, hello there.</h1>
        </BounceDiv>
        <p> & Welcome To My Personal Portfolio</p>
      </section>
    </div>
  );
};

export default Landing;
