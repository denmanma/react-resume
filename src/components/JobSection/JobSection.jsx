import React from "react";
import DateRange from "../DateRange/DateRange";
import JobSummary from "../JobSummary/JobSummary";
import BulletStatement from "../BulletStatement/BulletStatement";
export default function JobSection({
  dateRange,
  jobSummary,
  bulletStatements
}) {
  return (
    <div>
      <DateRange from={dateRange.from} to={dateRange.to} />
      <JobSummary
        title={jobSummary.title}
        company={jobSummary.company}
        location={jobSummary.location}
        description={jobSummary.description}
      />
      <BulletStatement
        bullets={bulletStatements.bullets}
      />
    </div>
  );
}
