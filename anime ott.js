     // JavaScript to toggle the responsive navigation menu
        const menuIcon = document.querySelector(".menu-icon");
        const navLinks = document.querySelector(".nav-links");

        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuIcon.classList.toggle("active");
        });
      
        function display() {
            document.getElementById("demo").innerHTML = "Hello World";
          }