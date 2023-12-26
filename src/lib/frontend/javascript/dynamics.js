// IT SHOULD NOT BE FUNCTIONAL YET !!!

function changePage(page) {
  // Include the current gender filter in the URL
  window.location.href = `?page=${page}&gender=${currentGenderFilter || ""}`;
}

function filterByGender(gender) {
  // Update the currentGenderFilter variable
  currentGenderFilter = gender;
  // Redirect to the first page with the selected gender filter
  window.location.href = `?page=1&gender=${currentGenderFilter || ""}`;
}

// Initialize the currentGenderFilter variable only if it's not null or undefined
let currentGenderFilter =
  '<%= currentGenderFilter !== null && typeof currentGenderFilter !== "undefined" ? currentGenderFilter : "" %>';
