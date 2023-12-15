$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to check and animate progress bars when in the viewport
    function animateBarsIfVisible() {
      $(".progress-bar").each(function() {
        if (isElementInViewport(this)) {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        }
      });
    }
  
    // Initial check on page load
    animateBarsIfVisible();
  
    // Check on scroll
    $(window).scroll(function() {
      animateBarsIfVisible();
    });
  });  