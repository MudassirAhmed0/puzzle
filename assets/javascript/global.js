const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const body = document.querySelector("body");
function toggleSideBar() {
  sidebar.classList.toggle("toggleActive");
  body.classList.toggle("active");
  if (sidebar.classList.contains("toggleActive")) {
    sidebarOverlay.style.display = "block";
  } else {
    sidebarOverlay.style.display = "none";
  }
}
