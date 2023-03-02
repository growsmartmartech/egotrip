  <script>
      function toggleAccordion(header) {
        header.classList.toggle("active");
        var body = header.nextElementSibling;
        if (body.style.display === "block") {
          body.style.display = "none";
        } else {
          body.style.display = "block";
        }
      }
    </script>
