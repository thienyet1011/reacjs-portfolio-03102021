import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterColumnStyle = styled.div`
    .heading {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    li {
        margin-bottom: 1rem;
    }
    a {
        font-size: 1.8rem;
    }
`;

function FooterColumn({
  heading = "Heading",
  links = [
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
  ],
}) {
  return (
    <FooterColumnStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type == "Link" ? (
                    <Link to={item.path}>{item.title}</Link>
                ) : (
                    <a href={item.path} target="_blank"
                      rel="noreffer noreferrer">
                      {item.title}
                    </a>
                )}
          </li>
        ))}
      </ul>
    </FooterColumnStyle>
  );
}

export default FooterColumn;
