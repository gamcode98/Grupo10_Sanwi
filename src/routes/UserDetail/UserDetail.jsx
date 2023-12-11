import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}`)
    .then(response => response.json())
    .then(data => setUser(data))
    .catch(error => console.error(error))
  },[])

  return (
    <div>
      <h1>User Detail</h1>
    </div>
  );
}