document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskFrame = document.getElementById("task-frame");
    const taskTitle = document.getElementById("task-title");

    const fonts = [
        "'Arial', sans-serif",
        "'Times New Roman', serif",
        "'Courier New', monospace",
        "'Georgia', serif",
        "'Verdana', sans-serif",
        "'Trebuchet MS', sans-serif"
    ];

    const colors = [
        "linear-gradient(to right, #ff7e5f, #feb47b)", // Peach Gradient
        "linear-gradient(to right, #6a11cb, #2575fc)", // Purple Blue Gradient
        "linear-gradient(to right, #ff9966, #ff5e62)", // Orange Gradient
        "linear-gradient(to right, #00c6ff, #0072ff)", // Cyan Gradient
        "linear-gradient(to right, #ff0844, #ffb199)", // Red Gradient
        "linear-gradient(to right, #6a3093, #a044ff)"  // Purple Gradient
    ];

    // Fetch tasks.json file
    fetch("tasks.json")
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                // Create a new list item for each task
                const li = document.createElement("li");
                li.textContent = task.name;

                // Add click event listener to change iframe and task title
                li.addEventListener("click", () => {
                    // Remove 'active' class from all tasks and add it to the clicked task
                    document.querySelectorAll(".sidebar ul li").forEach(item => item.classList.remove("active"));
                    li.classList.add("active");

                    // Update the task title
                    taskTitle.innerText = task.name;

                    // Update the iframe's src to show the selected task
                    taskFrame.src = task.path;

                    // Randomly change background color and font style
                    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
                    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                    taskTitle.style.fontFamily = randomFont;
                    taskTitle.style.color = "white"; // You can also randomize the font color if you'd like
                });

                // Add the task item to the task list
                taskList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error loading tasks.json:", error);
            alert("Error loading task list!");
        });
});
