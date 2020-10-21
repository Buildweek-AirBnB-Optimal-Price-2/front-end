// Import Dependencies
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { Link } from "react-router-dom";
// Import Components
import ListingCard from "./ListingCard";
import { fetchData } from "../actions/index";
import { connect } from "react-redux";

const Listings = (props) => {
  console.log("props", props);
  const { fetchData } = props;
  // Setup the state that will get the listings
  const [listings, setListings] = useState([]);

  // Set a state to disable buttons when it is deleting
  const [isDeleting, setIsDeleting] = useState(false);

  // Function used to gather the listings whenever component loads
  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    <div id="listings">
      <div className="heading">
        <h3>
          Listings - {props.listings.length}{" "}
          {props.listings.length > 1 ? "listings" : "listing"} found
        </h3>

        <Link to="/AddListing">
          <button>Add New Listing</button>
        </Link>
      </div>

      {props.listings.length > 0 &&
        props.listings.map((listing, index) => {
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

      {props.listings.length <= 0 && (
        <p style={{ textAlign: "center" }}>No Listings Found</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  listings: state,
});

export default connect(mapStateToProps, { fetchData })(Listings);
