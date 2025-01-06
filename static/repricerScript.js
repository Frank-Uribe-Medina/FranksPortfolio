document.addEventListener('DOMContentLoaded', () => {
    // Toggle Functionality
    const toggleInput = document.getElementById('market-toggle');
    const label = document.getElementById('market-label');
    const toggleContainer = document.querySelector('.toggle-container');

    // Toggle state when the container is clicked
    toggleContainer.addEventListener('click', (event) => {
        if (event.target !== toggleInput) {
            toggleInput.checked = !toggleInput.checked; // Toggle checkbox state
        }
        updateLabel(); // Update the label dynamically
    });

    // Update the label text based on toggle state
    const updateLabel = () => {
        label.textContent = toggleInput.checked ? 'MEX' : 'US';
    };

    // Initial label setup
    updateLabel();

    // Form Submission Spinner
    const uploadForm = document.getElementById('upload-form');
    const spinner = document.getElementById('spinner');
    const uploadButton = document.getElementById('upload-button');

    if (uploadForm) {
        uploadForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            spinner.style.display = 'block'; // Show spinner
            uploadButton.disabled = true; // Disable upload button
            // Simulate form processing
            setTimeout(() => {
                spinner.style.display = 'none';
                uploadButton.disabled = false;
            }, 3000); // Example delay, replace with actual processing logic
        });
    }
});
