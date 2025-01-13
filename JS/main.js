// Function to toggle the navigation menu on mobile
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// I have commented-out this script because it was probably an unnecessary and conflicting initialization for Lightbox.
// And since Lightbox is already working (likely from its own script file and setup), removing the redundant initialization has cleared the error that was appearing to me in the browser as it was undefined :).

// Function for the Gallery navigation (Ensure jQuery is loaded before Lightbox)
// document.addEventListener("DOMContentLoaded", function () {
//   if (typeof lightbox !== 'undefined') {
//       lightbox.option({
//           resizeDuration: 200,
//           wrapAround: true,
//           fadeDuration: 300,
//           imageFadeDuration: 300,
//       });
//   } else {
//       console.error("Lightbox is not defined. Ensure jQuery and Lightbox2 are correctly loaded.");
//   }
// });

// Function to validate the form (Contact Information)
function validateContactForm() {
  // Code for validation remains unchanged
}

// Dynamic Budget Calculation
document.addEventListener('DOMContentLoaded', function () {
  const productSelect = document.getElementById('product');
  const deadlineInput = document.getElementById('deadline');
  const extrasCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const budgetDisplay = document.getElementById('total-budget');

  if (productSelect && deadlineInput && extrasCheckboxes && budgetDisplay) {
      const calculateBudget = () => {
          let total = parseFloat(productSelect.value);
    
          extrasCheckboxes.forEach((checkbox) => {
              if (checkbox.checked) {
                  total += parseFloat(checkbox.value);
              }
          });
    
          const deadline = parseInt(deadlineInput.value, 10);
          if (!isNaN(deadline)) {
              if (deadline <= 1) {
                  total *= 0.9;
              } else if (deadline <= 3) {
                  total *= 0.95;
              }
          }
    
          budgetDisplay.textContent = total.toFixed(2);
      };
    
      productSelect.addEventListener('change', calculateBudget);
      deadlineInput.addEventListener('input', calculateBudget);
      extrasCheckboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', calculateBudget);
      });
  }
});

// Contact Page Map Integration
document.addEventListener("DOMContentLoaded", function () {
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
      const map = L.map('map').setView([52.37913609668623, 4.90024944457104], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker([52.37913609668623, 4.90024944457104]).addTo(map);
      marker.bindPopup("<b>PixelCraft Studios</b><br>You are Welcome to Visit us").openPopup();
  }

  const directionsButton = document.getElementById("get-directions");
  if (directionsButton) {
      directionsButton.addEventListener("click", () => {
          const latitude = 52.37913609668623;
          const longitude = 4.90024944457104;
          const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          window.open(googleMapsUrl, "_blank");
      });
  }
});


