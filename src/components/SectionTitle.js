import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
    text-align: center;
    p {
        font-family: "Times New Roman";
        font-size: 2.3rem;
    }
    h2 {
        font-family: "Times New Roman";
        font-size: 6rem;
        font-weight: bold;
        margin-top: .5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        p {
            font-size: 1.8rem;
        }
        h2 {
            font-size: 3.6rem;
        }
    }
`;

function SectionTitle({
  subheading = "Sub heading",
  heading = "Heading",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

export default SectionTitle;
