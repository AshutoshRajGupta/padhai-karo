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
            { name: "DSA", url: "./assets/dsa.pdf" },
            { name: "CPP-OOPS", url: "./assets/ooos-cpp.pdf" },
            { name: "SQL", url: "./assets/sql.pdf" },
            { name: "PYTHON", url: "./assets/mernstack.pdf" },
            { name: "DBMS", url: "./assets/dbms.pdf" },
            { name: "OPERATING SYSTEM", url: "./assets/os.pdf" },
            { name: "COMPUTER NETWORK", url: "./assets/cn.pdf" },
            { name: "REACT 1", url: "./assets/React_merged.pdf" },
            { name: "REACT 2", url: "./assets/reactjs.pdf" },
            { name: "MERN STACK", url: "./assets/mernstack.pdf" },
            {
              name: "FLUTTER CLEAN ARCHITECTURE",
              url: "./assets/flutter-clean.pdf",
            },
            { name: "WEB", url: "./assets/web.pdf" },
            { name: "MYSQL-REACT", url: "./assets/mysql-react.pdf" },

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
