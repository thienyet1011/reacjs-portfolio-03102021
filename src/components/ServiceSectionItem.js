import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon {
        svg {
            width: 3rem;
        }
    }
    .servicesItem__title {
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para {
        margin-top: 2rem;
    }
`;

function ServiceSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.`,
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}

export default ServiceSectionItem;
