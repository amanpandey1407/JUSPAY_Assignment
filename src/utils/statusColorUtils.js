export const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "#673AB7";
    case "Complete":
      return "#4CAF50";
    case "Pending":
      return "#03A9F4";
    case "Approved":
      return "#FFC107";
    case "Rejected":
      return "#9E9E9E";
    default:
      return "#9E9E9E";
  }
};
