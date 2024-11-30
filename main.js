document.addEventListener("DOMContentLoaded", () => {
    var twoDaysFromNow = new Date('2025-01-01T00:00:00Z').getTime() / 1000;

    new FlipDown(twoDaysFromNow).start().ifEnded(() => {
      console.log("The countdown has ended");
    });
  
    // Toggle the mobile menu visibility
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
  
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden'); // Show/hide the mobile menu
    });
  
    // Toggle the profile dropdown visibility
    const userMenuButton = document.getElementById('user-menu-button');
    const dropdownMenu = userMenuButton?.nextElementSibling;
  
    if (userMenuButton && dropdownMenu) {
      userMenuButton.addEventListener('click', (event) => {
        const isExpanded = userMenuButton.getAttribute('aria-expanded') === 'true';
        userMenuButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('hidden'); // Show/hide the dropdown menu
  
        // Close the dropdown if clicking outside
        const closeDropdown = (e) => {
          if (!dropdownMenu.contains(e.target) && e.target !== userMenuButton) {
            dropdownMenu.classList.add('hidden');
            userMenuButton.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeDropdown);
          }
        };
        if (!isExpanded) {
          document.addEventListener('click', closeDropdown);
        }
        event.stopPropagation(); // Prevent immediate close
      });
    }
  });