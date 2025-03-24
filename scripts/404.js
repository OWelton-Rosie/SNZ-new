    // Function to generate a unique error ID
    function generateErrorID() {
        const timestamp = Date.now(); // Current time in milliseconds
        const randomNum = Math.floor(Math.random() * 10000); // Random 4-digit number
        return `ERR_404_${timestamp}_${randomNum}`;
    }

    // Set the generated error ID in the HTML
    document.getElementById("error-id").textContent = generateErrorID();
