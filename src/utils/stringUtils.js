export const truncateText = (message, maxLength = 25) => {
  if (message.length > maxLength) {
    return `${message.substring(0, maxLength)}...`;
  }
  return message;
};
