// Import Dependencies
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { Link } from "react-router-dom";
// Import Components
import ListingCard from "./ListingCard";
import { ListingsContext } from "../utilities/ListingsContext";

export default function Listings() {
  // Setup the state that will get the listings
  const [listings, setListings] = useState([]);

  // Set a state to disable buttons when it is deleting
  const [isDeleting, setIsDeleting] = useState(false);

  // Function used to gather the listings whenever component loads
  useEffect(() => {
    // setListings(dummyData);

    axios
      .get("https://5f3fba8744212d0016fed1c4.mockapi.io/listings")
      .then((res) => {
        setListings(res.data);
        console.log("res.data from Listings:", res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  // Function for deleting a listing
  const deleteListing = (id) => {
    // Create a new array where the listing that matches the ID is removed
    const newListingArray = listings.filter((listing) => listing.id !== id);

    setIsDeleting(true);

    // Do a small animation for the deleted listing
    gsap.to(`#listing-${id}`, { scale: 0.8, opacity: 0.8, duration: 0.5 });
    gsap.to(`#listing-${id}`, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });

    // Set the new listing array to the listings once the animation finishes
    setTimeout(() => {
      setListings(newListingArray);
      setIsDeleting(false);
    }, 1000);

    // Delete listing from backend
    axios
      .delete(`https://5f3fba8744212d0016fed1c4.mockapi.io/listings/${id}`)
      .then((res) => {
        console.log("Listing.sjs: deleteListing: res: ", res);
      })
      .catch((err) => console.log(`Unable to delete item # ${id}`, err));
  };

  return (
    <ListingsContext.Provider value={listings}>
      <div id="listings">
        <div className="heading">
          <h3>
            Listings - {listings.length}{" "}
            {listings.length > 1 ? "listings" : "listing"} found
          </h3>

          <Link to="/AddListing">
            <button>Add New Listing</button>
          </Link>
        </div>

        {listings.length > 0 &&
          listings.map((listing, index) => {
            const delayTimer = index;

            return (
              <ListingCard
                listing={listing}
                key={listing.id}
                deleteListing={deleteListing}
                delay={delayTimer}
                isDeleting={isDeleting}
              />
            );
          })}

        {listings.length <= 0 && (
          <p style={{ textAlign: "center" }}>No Listings Found</p>
        )}
      </div>
    </ListingsContext.Provider>
  );
}

// Dummy temp data
// const dummyData = [
//   {
//     id: 0,
//     title: "Spacious Water View Comfy Pike Place Flat Sleeps 5",
//     type: "Entire apartment",
//     location: "Pike Place Market",
//     guests: 5,
//     bedrooms: 1,
//     beds: 2,
//     baths: 1,
//     amenities: ["Wifi", "Kitchen", "Washer"],
//     price: 167,
//     salePrice: 143,
//     featuredImg:
//       "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80",
//   },
//   {
//     id: 1,
//     title: "My TALL, 5-level super-funky artist's loft",
//     type: "Entire loft",
//     location: "Minor",
//     guests: 6,
//     bedrooms: 3,
//     beds: 6,
//     baths: 2.5,
//     amenities: ["Wifi", "Kitchen", "Free Parking", "Washer"],
//     price: 179,
//     salePrice: 0,
//     featuredImg:
//       "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     id: 2,
//     title: "Private 2 bdrm Apartment",
//     type: "Entire apartment",
//     location: "Lake Forest Park",
//     guests: 5,
//     bedrooms: 2,
//     beds: 2,
//     baths: 1,
//     amenities: ["Wifi", "Kitchen", "Free Parking", "Washer"],
//     price: 109,
//     salePrice: 0,
//     featuredImg:
//       "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//   },
// ];

// https://5f3fba8744212d0016fed1c4.mockapi.io/listings
