(function() {
  // Get the current visitor count from LocalStorage
  function getVisitorCount() {
    const count = localStorage.getItem('visitorCount');
    return count ? parseInt(count, 10) : 0;
  }

  // Set the updated visitor count in LocalStorage
  function setVisitorCount(count) {
    localStorage.setItem('visitorCount', count);
  }

  // Increment the visitor count and update LocalStorage
  function incrementVisitorCount() {
    const currentCount = getVisitorCount();
    const updatedCount = currentCount + 1;
    setVisitorCount(updatedCount);
    return updatedCount;
  }

  // Display the visitor count on the page
  function displayVisitorCount() {
    const countElement = document.getElementById('visitorCount');
    if (!countElement) {
      console.error('No element with ID "visitorCount" found.');
      return;
    }

    const visitorCount = incrementVisitorCount();
    countElement.textContent = `Visitor Count: ${visitorCount}`;
  }

  // Initialize the plugin
  document.addEventListener('DOMContentLoaded', function() {
    displayVisitorCount();
  });
})();