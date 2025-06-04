document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = [
    { id: "name", message: "This field is required", validator: val => val.trim() !== "" },
    { id: "email", message: "A valid email address is required", validator: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
    { id: "website", message: "A valid url is required", validator: val => {
      try { new URL(val); return true; } catch { return false; }
    }},
    { id: "message", message: "This field is required", validator: val => val.trim() !== "" }
  ];

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.id + "Error");

    input.classList.remove("error-border");
    error.style.visibility = "hidden";

    if (!field.validator(input.value)) {
      input.classList.add("error-border");
      error.style.visibility = "visible";
      isValid = false;
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
