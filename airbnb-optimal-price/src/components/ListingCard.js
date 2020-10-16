// Import Dependencies
import React from 'react';
import styled from 'styled-components';

// Styled Components
const Card = styled.div`
padding: 20px 0;
border-bottom: 1px solid #ebebeb;
display: flex;
max-width: 800px;
justify-content: space-between;
`;

const CardImg = styled.img`
width: 40%;
border-radius: 10px;
margin-right: 25px;
`;

const CardHeading = styled.p`
font-style: italic;
color: #929292;
`;

const CardTitle = styled.h3`
font-weight: normal;
font-size: 20px;
`;

const TitleSeparator = styled.hr`
width: 50px;
margin: 15px 0;
height: 1px;
background-color: #ebebeb;
border: none;
`;

const CardAmenities = styled.p`
font-style: italic;
color: #49beb7;
`;

const CardPrice = styled.p`
position: absolute;
bottom: 0;
right: 0;
`;


export default function ListingCard(props) {

  return (
    <Card>
      <CardImg src={props.listing.featuredImg} alt={props.listing.title} />
      
      <div style={{position: "relative", width: "58%"}}>
        <CardHeading>{props.listing.type} in {props.listing.location}</CardHeading>
        <CardTitle>{props.listing.title}</CardTitle>

        <TitleSeparator />

        <CardAmenities>
          {props.listing.amenities.map((amenity) => {
            return `${amenity} . `;
          })}
        </CardAmenities>
        
        {props.listing.salePrice !== 0 && 
          <CardPrice>
            <del style={{color: "#ccc"}}>${props.listing.price}</del> <span style={{fontWeight: "bold"}}>${props.listing.salePrice}</span> / night
          </CardPrice>
        }

        {props.listing.salePrice === 0 && 
          <CardPrice>
            <span style={{fontWeight: "bold"}}>${props.listing.price}</span> / night
          </CardPrice>
        }
      </div>
    </Card>
  )
}
