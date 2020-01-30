import React from "react";

export default function BulletStatement({bullets}) {
    const listBullets = bullets.map((bullet) =>
      <li key={bullet}>
        {bullet}
      </li>
    );
    return (
      <ul>{listBullets}</ul>
    );
  }

 