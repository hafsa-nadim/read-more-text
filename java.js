const readMoreLink = document.getElementById("readMoreLink");
    const extraContent = document.getElementById("extraContent");

    readMoreLink.onclick = () => {
      if (extraContent.style.display === "none") {
        extraContent.style.display = "inline"; // Show the extra content
        readMoreLink.textContent = "Read Less"; // Change link text
      } else {
        extraContent.style.display = "none"; // Hide the extra content
        readMoreLink.textContent = "Read More"; // Reset link text
      }
    };