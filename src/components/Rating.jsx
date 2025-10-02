import { useState } from "react";

export default function Rating({ value = 0, onChange }) {
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: "flex", gap: "0.25rem", cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          style={{
            fontSize: "1.5rem",
            color: star <= (hover || value) ? "gold" : "lightgray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}