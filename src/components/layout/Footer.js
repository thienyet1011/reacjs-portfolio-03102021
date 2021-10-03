import React from "react";
import styled from "styled-components";
import PText from "../PText";
import FooterColumn from "./FooterColumn";

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 1;
        .para {
            margin-top: 1rem;
        }
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer_col1__title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para {
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para {
            max-width: 100%;
        }
        .copyright {
            .container {
                div {
                    margin-top: 0;
                }
            }
        }
    }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">
                Anyan Khan
          </h1>
          <PText>
                A freelance web designer and developer from
                Chittagong, Bangladesh.
                I always make websites that have unique
                designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterColumn heading="Important Links"
            links={[
              {
                type: "Link",
                title: "Home",
                path: "/",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]} />
        </div>
        <div className="footer__col3">
          <FooterColumn heading="Contact Info"
            links={[
              {
                title: "+880123",
                path: "tel:+880123",
              },
              {
                title: "webcifar@gmail.com",
                path: "mailto:webcifar@gmail.com",
              },
              {
                title: "GEC Circle, Chittagong",
                path: "http://google.com/maps",
              },
            ]} />
        </div>
        <div className="footer__col4">
          <FooterColumn heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com",
              },
              {
                title: "Instagram",
                path: "http://instagram.com",
              },
              {
                title: "Twitter",
                path: "http://twitter.com",
              },
            ]} />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
                2021 - Anyan Khan | Designed By web cifar
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
