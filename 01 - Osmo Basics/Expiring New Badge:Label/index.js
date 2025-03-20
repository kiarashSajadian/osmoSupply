document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that have a data-expiring-date attribute
  const elements = document.querySelectorAll("[data-expiring-date]");

  // Get today's date at midnight (no timezone handling as requested)
  const today = new Date();

  // Normalize today to start of the day for consistent day-difference checks
  today.setHours(0, 0, 0, 0);

  elements.forEach((el) => {
    const dateStr = el.getAttribute("data-expiring-date"); // format D/M/YYYY
    const [day, month, year] = dateStr.split("/").map(Number);

    // Construct date object from attribute (month is zero-based in JS)
    const publishedDate = new Date(year, month - 1, day);
    publishedDate.setHours(0, 0, 0, 0);

    // Calculate the difference in days
    const diffInMs = today - publishedDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    // Set display: block; if the published date is within the last 7 days (0 to 6 days ago)
    if (diffInDays >= 0 && diffInDays < 7) {
      el.style.display = "block";
    }
  });
});
