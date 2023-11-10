import { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchSingleUser() {
      try {
        const res = await fetch(
          ` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await res.json();
        console.log(json);
        setContact(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingleUser();
  }, [selectedContactId]);
  return (
    <div>
      <h1>{contact?.name}</h1>
      <p>{contact?.email}</p>
      <p>{contact?.address?.city}</p>
      <p>{contact?.phone}</p>
      <button>Close</button>
    </div>
  );
}
