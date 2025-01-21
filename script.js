// script.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const fileTransferSection = document.getElementById("file-transfer");
  const logoutButton = document.getElementById("logout");
  const fileUploadForm = document.getElementById("file-upload-form");
  const loginFormDiv = document.getElementById("login-form");

  // Handle login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Mock login validation
    if (username === "user" && password === "password") {
      alert("Login successful!");
      loginFormDiv.classList.add("hidden");
      fileTransferSection.classList.remove("hidden");
    } else {
      alert("Invalid username or password.");
    }
  });

  // Handle file upload and transfer
  fileUploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select a file.");
      return;
    }

    // Simulate file upload
    const formData = new FormData();
    formData.append("file", file);

    // Mock file transfer (Replace URL with actual server endpoint)
    fetch("https://example.com/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("File uploaded and transferred successfully!");
        } else {
          throw new Error("File transfer failed.");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  // Handle logout
  logoutButton.addEventListener("click", () => {
    loginFormDiv.classList.remove("hidden");
    fileTransferSection.classList.add("hidden");
    loginForm.reset();
    fileUploadForm.reset();
    alert("Logged out successfully.");
  });
});
