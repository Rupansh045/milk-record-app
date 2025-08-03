// script.js

// Form submit hone par ye code chalega
document.getElementById("milkForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Form reload na ho

  // Input values le lo
  const name = document.getElementById("name").value;
  const milk = parseFloat(document.getElementById("milk").value);
  const fat = parseFloat(document.getElementById("fat").value);
  const rate = parseFloat(document.getElementById("rate").value);

  // Total calculate karo
  const total = ((milk * fat * rate) / 10).toFixed(2);

  // Entry object banao
  const entry = {
    date: new Date().toLocaleDateString(),
    name,
    milk,
    fat,
    rate,
    total
  };

  // LocalStorage me save karo
  const existing = JSON.parse(localStorage.getItem("milkEntries")) || [];
  existing.push(entry);
  localStorage.setItem("milkEntries", JSON.stringify(existing));

  alert("✅ Entry Saved Successfully! Total: ₹" + total);

  // Form reset karo
  document.getElementById("milkForm").reset();
});
