<script>
// Query all elements with the 'truncate-text' attribute
const elements = document.querySelectorAll('[truncate-text]');

elements.forEach((element) => {
 // Get the character limit as an integer, defaulting to 0 if not set
 const charLimit = parseInt(element.getAttribute('truncate-text'), 10) || 0;

 // Truncate the text content of the element if it exceeds the character limit
 if (element.textContent.length > charLimit) {
  element.textContent = element.textContent.substring(0, charLimit) + '...';
 }
});
</script>
