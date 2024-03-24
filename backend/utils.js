// utils.js
function calculateDaysDifference(startDateStr, endDateStr) {
    // Parse the date strings to Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    // Calculate the difference in milliseconds
    const differenceMs = endDate - startDate;
  
    // Convert the difference to days
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }
  
  module.exports = { calculateDaysDifference };
  