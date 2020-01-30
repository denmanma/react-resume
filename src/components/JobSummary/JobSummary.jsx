import React from "react";

export default function JobSummary({ title, company, location, description }) {
  return (
    <div>
      <span class="jobtitle-location">
        {title} <br /> -- {company}, {location}
        <br />
      </span>
      <p>{description}</p>
    </div>
  );
}
