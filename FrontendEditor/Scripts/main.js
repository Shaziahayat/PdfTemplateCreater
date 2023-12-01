console.log('main.js loaded');
    function toggleTextBoxes(checkboxId, textBoxXId, textBoxYId) {
        var checkbox = document.getElementById(checkboxId);
        var textBoxX = document.getElementById(textBoxXId);
        var textBoxY = document.getElementById(textBoxYId);

        if (checkbox.checked) {
            textBoxX.style.display = 'block';
            textBoxY.style.display = 'block';
        } else {
            textBoxX.style.display = 'none';
            textBoxY.style.display = 'none';
        }
    }

// Function to apply toggleTextBoxes to a set of checkboxes and textboxes
function applyToggle(containerId, checkboxId, textBoxXId, textBoxYId) {
    var container = document.getElementById(containerId);
    var checkbox = container.querySelector('#' + checkboxId);
    var textBoxX = container.querySelector('#' + textBoxXId);
    var textBoxY = container.querySelector('#' + textBoxYId);

    // Add event listener to each checkbox
    checkbox.addEventListener('change', function () {
        toggleTextBoxes(checkboxId, textBoxXId, textBoxYId);
    });

    // Initial call to set visibility based on checkbox state
    toggleTextBoxes(checkboxId, textBoxXId, textBoxYId);
}
    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }



