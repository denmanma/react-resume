import React from 'react'
import moment from 'moment';

export default function DateRange({from,to}) {

    const DATE_FORMAT = "MMM YYYY";
    const startDate = moment(from).format(DATE_FORMAT);

    //If no endDate is assigned, default to "PRESENT"
    const endDate = to ? moment(to).format(DATE_FORMAT) : "PRESENT";        

    return (
        <span class="dateformat">
            {startDate} - {endDate}
        </span>
    )
}