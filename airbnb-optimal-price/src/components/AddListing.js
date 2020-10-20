import React, { useState } from "react";
import axios from "axios";
import { initialListing } from "./InitialListing";

const AddListing = () => {
  const [listing, setListing] = useState(initialListing);
  console.log(initialListing);
  const addListing = (e) => {
    e.preventDefault();
    console.log("hitting addListing");
    axios
      .post("https://5f3fba8744212d0016fed1c4.mockapi.io/listings", listing)
      .then((res) => {
        console.log("AddListing.js: post: res: ", res);
      })
      .catch((err) => console.error("err from AddListing", err));
  };
  const handleChange = (e) => {
    setListing({
      ...listing,
      [e.target.name]: e.target.value,
    });
  };
  const handleAmenitiesChange = (e) => {
    const changedAmenities = e.target.value.split(",");
    setListing({
      ...listing,
      amenities: changedAmenities,
    });
  };

  return (
    <div className="form-container">
      <h3>Add A Listing</h3>

      <form onSubmit={addListing}>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Title"
          value={listing.title}
        />
        <input
          type="text"
          name="type"
          id="type"
          onChange={handleChange}
          placeholder="Type e.g., 'whole house', 'downstairs'"
          value={listing.type}
        />
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          placeholder="Location"
          value={listing.location}
        />
        <input
          type="number"
          name="guests"
          id="guests"
          onChange={handleChange}
          placeholder="# of Guests Allowed"
          value={listing.guests}
        />
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          onChange={handleChange}
          placeholder="# of Bedrooms"
          value={listing.bedrooms}
        />
        <input
          type="number"
          name="beds"
          id="beds"
          onChange={handleChange}
          placeholder="# of Beds"
          value={listing.beds}
        />
        <input
          type="number"
          name="baths"
          id="baths"
          onChange={handleChange}
          placeholder="# of Bathrooms"
          value={listing.bath}
        />
        <input
          type="text"
          name="amenities"
          id="amenities"
          onChange={handleAmenitiesChange}
          placeholder="Comma separated e.g., 'wifi, kitchen, pool"
          value={listing.amenities}
        />
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          placeholder="Price"
          value={listing.price}
        />
        <input
          type="number"
          name="salePrice"
          id="salePrice"
          onChange={handleChange}
          placeholder="Sale Price"
          value={listing.salePrice}
        />
        <input
          type="text"
          name="featuredImg"
          id="featuredImg"
          onChange={handleChange}
          placeholder="Image URL"
          value={listing.featuredImg}
        />

        <div>
          <button className="btn" type="submit">
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
