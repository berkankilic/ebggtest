import { useEffect, useState } from "react";

export default function Section1() {
  const [user, setUSer] = useState(null);

  return (
    <>
      <div>{user ? <h2>Giriş yapılmış</h2> : <h2> giriş yapılmamış </h2>}</div>
      test2
    </>
  );
}
