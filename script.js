// JavaScript for greeting and theme toggle

function greeting() {
    const now = new Date();
    const hour = now.getHours();
    let message = "";
  
    if (hour < 12) {
      message = "Good Morning!";
    } else if (hour < 18) {
      message = "Good Afternoon!";
    } else {
      message = "Good Evening!";
    }
  
    document.getElementById('greeting-message').innerHTML = `<h2>${message}</h2>`;
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  


  // Toggle project details
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  


  // Form validation function
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Regex patterns
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/; // 10 digits
  
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("All fields are required!");
      return false;
    }
  
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!phone.match(phonePattern)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    alert("Message sent successfully!");
    return true; // Allow form submission
  }

  

  // Survey form validation
function validateSurvey() {
  const fullname = document.getElementById("fullname").value.trim();
  const sourceRadios = document.getElementsByName("source");
  let sourceSelected = false;
  
  for (let radio of sourceRadios) {
    if (radio.checked) {
      sourceSelected = true;
      break;
    }
  }

  if (fullname === "") {
    alert("Full name is required!");
    return false;
  }

  if (!sourceSelected) {
    alert("Please select how you heard about me.");
    return false;
  }

  alert("Survey submitted successfully!");
  return true;
}
