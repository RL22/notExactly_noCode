<script>
// Query all elements with the 'truncate-text' attribute
const elements = document.querySelectorAll('[truncate-text]');

elements.forEach((element) => {
  // Get the character limit as an integer, defaulting to 0 if not set
  const charLimit = parseInt(element.getAttribute('truncate-text'), 10) || 0;

  if (element.textContent.length > charLimit) {
    // Find the nearest space before the character limit
    let nearestSpace = element.textContent.lastIndexOf(' ', charLimit);
    nearestSpace = nearestSpace > 0 ? nearestSpace : charLimit;

    // Truncate the text content at the nearest space
    element.textContent = element.textContent.substring(0, nearestSpace) + '...';
  }
});
</script>
