// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-center a');

// Add click event listener to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navbarLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to clicked link
    this.classList.add('active');
  });
});
