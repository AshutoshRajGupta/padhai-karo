document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value;
  if (query) {
    alert("You searched for: " + query);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const projects = document.querySelectorAll(".bento-item");
  const pdfList = document.getElementById("pdf-list");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Toggle active class for styling
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Clear existing PDF list
      pdfList.innerHTML = "";

      // Loop through each project and check if it matches the selected category
      projects.forEach((project) => {
        const category = project.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          // Display PDFs for this project
          const projectTitle = project.querySelector("h3").textContent;

          // Replace with static PDF links
          const pdfLinks = [
            { name: "PDF 1", url: "./assets/pdf1.pdf" },
            { name: "PDF 2", url: "./assets/pdf2.pdf" },
            { name: "PDF 3", url: "./assets/pdf1.pdf" },
            // Add more as needed
          ];

          pdfLinks.forEach((pdf) => {
            // Create a new PDF item and append to the pdfList
            const pdfItem = document.createElement("div");
            pdfItem.classList.add("pdf-item");
            pdfItem.innerHTML = `
                <a href="${pdf.url}" target="_blank">${pdf.name} - ${projectTitle}</a>
              `;
            pdfList.appendChild(pdfItem);
          });
        }
      });
    });
  });
});
