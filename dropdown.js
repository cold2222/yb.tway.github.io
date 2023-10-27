var dropdownTimeout;

function showDropdown() {
  clearTimeout(dropdownTimeout);
  var dropdown = document.getElementsByClassName("dropdown-content")[0];
  dropdown.style.display = "block";
  dropdown.style.maxHeight = dropdown.scrollHeight + "px";
}

function hideDropdown() {
  clearTimeout(dropdownTimeout);
  var dropdown = document.getElementsByClassName("dropdown-content")[0];
  dropdownTimeout = setTimeout(function () {
    dropdown.style.maxHeight = "0";
    setTimeout(function () {
      dropdown.style.display = "none";
    }, 700);
  }, 200);
}
