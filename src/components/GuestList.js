import { toggleReservation } from "../services/rsvp";
import React from "react";

const GuestList = ({ guests, setGuests, confirmedReservationsCount }) => {
  const toggleGuestReservation = async (guestToToggle) => {
    setGuests(
      guests.map((groupMember) => {
        if (groupMember.name === guestToToggle.name) {
          return Object.assign(guestToToggle, {
            rsvp_confirmed: !guestToToggle.rsvp_confirmed,
          });
        } else return groupMember;
      })
    );
    toggleReservation(guestToToggle.unique_key, guestToToggle.rsvp_confirmed);
  };

  const reservationCSS = (guest) =>
    guest.rsvp_confirmed ? "text-success bg-light confirmed-reservation" : "";

  if (!guests?.length) {
    return <div></div>;
  }
  return (
    <div className="col-10">
      <h3 className="text-center my-3">
        Select reservations to confirm from the list below
      </h3>
      <ul className="mb-3 list-group">
        {guests.map((guest, i) => (
          <span
            className={`list-group-item d-flex justify-content-between lh-sm ${reservationCSS(
              guest
            )}`}
            key={guest.unique_key}
            onClick={() => {
              toggleGuestReservation(guest);
            }}
          >
            <h4 className="my-auto">{guest.name}</h4>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className={`form-check-input ${
                  guest.rsvp_confirmed ? "confirmed-reservation" : ""
                }`}
                checked={guest.rsvp_confirmed}
                readOnly={true}
              />
            </div>
          </span>
        ))}
      </ul>
      <h4 className="mb-3 d-flex justify-content-between align-items-center ps-1 pe-4">
        <span>Confirmed reservations</span>
        <span
          className="badge rounded-pill"
          style={{ backgroundColor: "#80977f", height: "30px", width: "30px" }}
        >
          {confirmedReservationsCount}
        </span>
      </h4>
    </div>
  );
};

export default GuestList;
