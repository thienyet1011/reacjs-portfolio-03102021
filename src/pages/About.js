import React from "react";

import AboutImg from "../assets/images/about-page-img.png";

import PText from "../components/PText";
import Button from "../components/Button";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Ayan Khan</span>
            </p>
            <h2 className="about__heading">
              A freelance Web developer
            </h2>
            <div className="about__info">
              <PText>
                I am from Chitagong, Bangladesh. A place of
                beauty and nature.
                Since my childhood, i love art and design. I
                also love to create things that can be useful to
                others.
                <br /> <br />
                I started coding since I was in high school.
                Coding is also an art for me. I love it and now
                I have the opportunity to design along with the
                coding. I find it really interesting and I enjoyed
                the process a lot.
                <b r/> <br />
                My vision is to make the world a better place.
                Now almost everything is becoming better than
                ever. It is time for us to create more good stuff
                that helps the world to become a better place.
              </PText>
            </div>

            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Ayan Khan image" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">
              Education
            </h1>
            <AboutInfoItem title="School"
              items={["Nasirbad Govt. High School, Chittagong"]} />
            <AboutInfoItem title="College"
              items={["BAF shaheen college chittagong"]} />
            <AboutInfoItem title="Varsity"
              items={["University Of Chittagong"]} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">
              My Skills
            </h1>
            <AboutInfoItem title="FrontEnd"
              items={["HTML", "CSS", "Javascript", "React"]} />
            <AboutInfoItem title="BackEnd"
              items={["Node", "Express", "PHP"]} />
            <AboutInfoItem title="Design"
              items={["Photoshop", "After Effects", "Figma"]} />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">
              Experiences
            </h1>
            <AboutInfoItem title="2010-2012"
              items={["Junior developer at web Cifar"]} />
            <AboutInfoItem title="2012-2016"
              items={["Front-end developer at web Cifar"]} />
            <AboutInfoItem title="2016-Now"
              items={["Freelance web Developer"]} />
          </div>
        </div>
      </div>

      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About;
