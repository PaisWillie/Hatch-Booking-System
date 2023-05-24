const parseHourLabel = (numHours: number, short?: boolean) => {
  const hour = Math.floor(numHours);
  const hourLabel = short ? 'h' : hour === 1 ? ' hour' : ' hours';
  const minuteLabel = short ? 'm' : ' minutes';
  if (numHours % 1 !== 0) {
    if (hour === 0) return `30${minuteLabel}`;
    else return `${hour}${hourLabel} 30${minuteLabel}`;
  }
  return `${hour}${hourLabel}`;
};

export { parseHourLabel };
