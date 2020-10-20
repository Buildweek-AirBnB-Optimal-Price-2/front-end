import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialListing = {
  id: "",
  title: "",
  type: "",
  location: "",
  guests: "",
  bedrooms: "",
  beds: "",
  baths: "",
  amenities: [],
  price: "",
  salePrice: "",
  featuredImg: "",
};

export default function EditListing() {
  const [listing, setListing] = useState(initialListing);
  const { id } = useParams();
  console.log("id", id);
  const { push } = useHistory();
  useEffect(() => {
    axios
      .get(`https://5f3fba8744212d0016fed1c4.mockapi.io/listings/${id}`)
      .then((res) => {
        console.log("EditListing.js: useEffect: get: res: ", res);
        setListing(res.data);
      })
      .catch((err) => console.error(`unable to getById # ${id}: `, err));
  }, [id]);

  const handleChange = (e) => {
    e.persist();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://5f3fba8744212d0016fed1c4.mockapi.io/listings/${id}`,
        listing
      )
      .then((res) => {
        console.log("Response from PUT;", res);
        push("/listings");
      })
      .catch((err) => {
        console.log("Error from PUT:", err);
      });
  };

  return (
    <div className="form-container">
      <h3>Edit Listing</h3>

      <form onSubmit={handleSubmit}>
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
            Edit Listing
          </button>
        </div>
      </form>
    </div>
  );
}
