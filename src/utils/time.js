import {DateTime} from "luxon";

export const shortDT = (timestamp)=>{
    return DateTime
        .fromISO(timestamp)
        .setLocale('it')
        .toLocaleString(DateTime.DATETIME_SHORT)
}