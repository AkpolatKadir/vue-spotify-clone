import { intervalToDuration } from "date-fns";

function convertMsToMinutes(milliseconds) {
  if (!milliseconds) return {};

  const date = intervalToDuration({ start: 0, end: +milliseconds });

  return { minutes: date.minutes, seconds: date.seconds };
}

export default convertMsToMinutes;
