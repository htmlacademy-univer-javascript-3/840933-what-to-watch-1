export const timeToStringRepresentation = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return hours > 0 ? `${hours} h ${minutes} m` : `${minutes} m`;
};
