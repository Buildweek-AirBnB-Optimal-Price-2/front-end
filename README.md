# Project Pitch

- Using historical booking data from AirBnB, AirBnB Optimal Price will allow a user to predict the trends for optimal pricing for their properties based on variables such as location, time of year and other considerations. The user will be able to manage multiple properties at different locations and be able to make adjustments to their expectations for booking, as well as what they should be charging.

[Product Vision Document](https://docs.google.com/document/d/1eFPrP1q7_d_iV3ccoQJZMibJsHPDrvcUDZOMQSGd9Hw/edit#)

[Grading Rubric](https://www.notion.so/Build-Week-Rubrics-c0783f6d9b7e435f9ce47e8cd2d0ee3b)

# front-end - MVP

- A `user` can register and login to their account.
- A `user` can add their AirBnB `listings` to their profile.
- A `user` can edit `properties` about each `listing` (ex: room type, minimum number of nights, location.) **Make cure to collaborate with the DS students on the best data to send to them.** When `properties` are saved, the data is sent to the DS API and the returned optimal `price` is dynamically saved for the current `property`.
- A `user` can edit properties for their listings and get an updated optimal price.
- A `user` can delete listings.

# Stretch

- A `user` can add pictures to their listings using an API like Cloudinary.
- A `user` can set their database to check the optimal price at certain intervals (weekly, monthly) and they are alerted when there is a change via email or text.
