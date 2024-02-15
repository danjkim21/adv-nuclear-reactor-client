// Params - dateTime ISO String - eg. "2024-02-14T20:20:53.831Z"
// Returns - String - eg. "Feb 14, 2024, 8:20:53 AM"

const convertIsoToHumanReadable = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};

export default convertIsoToHumanReadable;
