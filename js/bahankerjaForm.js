document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const uraian = document.getElementById('uraian').value;
        const penggunaan = document.getElementById('penggunaan').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${uraian}</td>
            <td>${penggunaan}</td>
        `;
        tableBody.appendChild(newRow);

        form.reset();
    });
});
