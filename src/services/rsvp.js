import supabase from "./initialize";

export async function getGroupByID(searchCriteria) {
  const criteria = searchCriteria.trim().toLowerCase();
  return await supabase
    .from("guests")
    .select("name, group_id, unique_key, rsvp_confirmed")
    .filter("group_id", "eq", criteria);
}

export async function toggleReservation(uniqueKey, hasReserved) {
  return await supabase
    .from("guests")
    .update({ rsvp_confirmed: hasReserved })
    .filter("unique_key", "eq", uniqueKey);
}
