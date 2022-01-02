import React, { useState } from "react";

import GroupSearch from "./GroupSearch";
import GuestList from "./GuestList";
import GuestReservedToast from "./GuestReservedToast";

export default function Reservations() {
  const [guests, setGuests] = useState([]);

  const getConfirmedGuests = () =>
    guests.filter((guest) => guest.rsvp_confirmed);

  const getConfirmedNames = () =>
    getConfirmedGuests().map((guest) => guest.name);

  const confirmedReservationsCount = getConfirmedGuests()?.length;

  return (
    <div id="rsvp">
      <div className="py-5" style={{ minHeight: "350px" }}>
        <main>
          <div className="text-center">
            <h1 className="display-4 mb-0">Reserve your seat now</h1>
            <h2 className="my-3">
              We are so excited to share this day with you
            </h2>
          </div>
          <div className="row justify-content-around">
            {
              <GuestList
                guests={guests}
                setGuests={setGuests}
                confirmedReservationsCount={confirmedReservationsCount}
              />
            }
            {<GroupSearch setGuests={setGuests} />}
          </div>
        </main>
      </div>
      {<GuestReservedToast names={getConfirmedNames()} />}
    </div>
  );
}
