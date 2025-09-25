let selectedCar = "";
let selectedPrice = 0;

// Step 1: When user clicks "Book Now"
function selectCar(carName, price) {
  selectedCar = carName;
  selectedPrice = price;
  document.getElementById("booking-info").innerHTML =
    `You have selected <b>${carName}</b> for <b>$${price}/day</b>. Please enter rental dates below.`;
  document.getElementById("booking-form").style.display = "block";
}

// Step 2: Calculate total cost
function calculateCost() {
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);

  if (isNaN(startDate) || isNaN(endDate)) {
    alert("Please select both start and end dates.");
    return;
  }

  if (endDate < startDate) {
    alert("End date must be after start date.");
    return;
  }

  // Calculate number of days
  const diffTime = Math.abs(endDate - startDate);
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  const total = days * selectedPrice;
  document.getElementById("total-cost").innerHTML =
    `Total Cost for ${days} days = <b>$${total}</b>`;
}

// Step 3: Confirm booking
function confirmBooking() {
  if (!selectedCar) {
    alert("Please select a car first!");
    return;
  }
  const costText = document.getElementById("total-cost").innerText;
  if (!costText) {
    alert("Please calculate cost before confirming.");
    return;
  }
  alert(`✅ Booking confirmed for ${selectedCar}!\n${costText}`);
}

// Contact form handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
