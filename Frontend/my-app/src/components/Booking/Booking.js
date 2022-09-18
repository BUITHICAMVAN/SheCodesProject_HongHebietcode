import React from "react";

const Booking = (props) => {
  return (
    <div>
      <section class="title">
        <i class="fa-solid fa-arrow-left"></i>
        <h2>{props.title}</h2>
      </section>
    </div>
  );
}

export default Booking;
