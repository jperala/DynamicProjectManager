document.addEventListener("DOMContentLoaded", function () {
    const welcomePage = document.getElementById("welcome_page");
    const viewAllFilesButton = document.getElementById("view_all_files");
    const projectsGrid = document.getElementById("projects_grid");
    const backButton = document.getElementById("back_button");

    // Fetch and display all projects
    viewAllFilesButton.onclick = () => {
        fetch('http://localhost:3000/list-all-html-files') // Use the updated API endpoint
            .then(response => response.json())
            .then(files => {
                // Hide welcome page and show projects grid
                welcomePage.classList.add("hidden");
                projectsGrid.classList.remove("hidden");

                // Populate grid with HTML files
                projectsGrid.innerHTML = ""; // Clear any existing content
                files.forEach(file => {
                    const projectCard = document.createElement("div");
                    projectCard.classList.add("card");
                    projectCard.innerText = file.title; // Display the file name
                    projectCard.onclick = () => window.open(file.url, "_blank"); // Open in a new tab
                    projectsGrid.appendChild(projectCard);
                });
            })
            .catch(error => console.error('Error fetching projects:', error));
    };

    // Back button logic
    backButton.onclick = () => {
        projectsGrid.classList.add("hidden");
        welcomePage.classList.remove("hidden");
    };
});