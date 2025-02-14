// Function to create a new drip element
function createDrip() {
  const heart = document.getElementById("heart");
  const drip = document.createElement("div");
  drip.classList.add("drip");

  // Randomize the horizontal position relative to the container (range from 65% to 75%)
  const randomXPercent = 70 + (Math.random() - 0.5) * 10; // random value between 65% and 75%
  drip.style.left = randomXPercent + "%";

  // Append the drip to the heart's container
  const container = heart.parentElement;
  container.appendChild(drip);

  // Remove the drip after its animation is complete (5 seconds)
  setTimeout(() => {
    drip.remove();
  }, 5000);
}

// Create a new drip every 1000ms to simulate continuous melting
setInterval(createDrip, 1000);
