import { useEffect, useState } from "react";

export default function HookExample() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  useEffect(() => {
    if (name.length >= 7) {
      alert("Hook Component Updated");
    }
  }, [name]);

  useEffect(() => {
    alert("Hook Component Mounted");
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h3>Please enter you name</h3>
        <input
          type="text"
          placeholder="name"
          value={name}
          name="name"
          onChange={handleChange}
          required
        />
      </div>

      <h3>{name && <div>Hi {name}, it's very nice to meet you</div>}</h3>
    </div>
  );
}
