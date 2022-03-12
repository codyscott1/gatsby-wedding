import React, { useState } from "react";
import { getGroupByID } from "../services/rsvp";

const GroupSearch = ({ setGuests }) => {
  const [hideSearch, setHideSearch] = useState(false);

  const validIDLength = 5;
  const [guestID, setGuestID] = useState("");
  const isGuestIDValid = guestID.length === validIDLength;

  const inputValidationCSS = () => {
    if (guestID.length < validIDLength) {
      return "";
    } else if (isGuestIDValid) {
      return "is-valid";
    }
    return "is-invalid";
  };

  const handleSubmit = async (event) => {
    setHideSearch(true);
    event.preventDefault();
    const { data } = await getGroupByID(guestID);
    setGuests(data);
  };

  return (
    <>
      {hideSearch ? (
        <button
          type="button"
          className="btn btn-primary static btn-large m-auto order-first"
          onClick={() => setHideSearch(false)}
          style={{ maxWidth: "312px" }}
        >
          Nothing showing up? Try again
        </button>
      ) : (
        <div className="col-10 text-center order-first">
          <h3 className="mb-3">To continue please enter your group ID</h3>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">
              <div className="col-12">
                <input
                  tabIndex={0}
                  aria-label="guest ID input"
                  autoComplete="off"
                  type="text"
                  className={`text-center form-control ${inputValidationCSS()}`}
                  id="groupID"
                  placeholder="EX. 777B3"
                  value={guestID}
                  required=""
                  onChange={(e) => setGuestID(e.target.value)}
                />
                <p className="invalid-feedback">
                  Valid Group ID is required. ex. 777B3
                </p>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="mt-3 w-100 m-auto btn btn-primary static btn-lg mt-0 shadow"
                style={{ maxWidth: "312px" }}
                disabled={!isGuestIDValid}
              >
                Find my group
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default GroupSearch;
