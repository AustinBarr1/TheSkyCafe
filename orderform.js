document.addEventListener('DOMContentLoaded', () => {
    const orderTable = document.querySelector('#orderTable');

    // Retrieve OrderInfo from localStorage
    const orderInfo = JSON.parse(localStorage.getItem('OrderInfo'));

    if (orderInfo) {
        // Clear previous table data
        orderTable.innerHTML = '';

        // Create table headers
        const headers = ['Name', 'Classroom Number', 'Phone Extension', 'Lunch Period', 'Entree', 'Side', 'Drink', 'Dessert'];
        const headerRow = document.createElement('tr');
        
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        orderTable.appendChild(headerRow);

        // Create table row for order data
        const orderRow = document.createElement('tr');
        orderInfo.forEach(info => {
            const td = document.createElement('td');
            td.textContent = info;
            orderRow.appendChild(td);
        });

        orderTable.appendChild(orderRow);
    } else {
        const row = document.createElement('tr');
        const td = document.createElement('td');
        td.setAttribute('colspan', '8');
        td.textContent = 'No orders found';
        row.appendChild(td);
        orderTable.appendChild(row);
    }
});