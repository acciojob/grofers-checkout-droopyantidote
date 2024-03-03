const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all prices from the table
    const prices = document.querySelectorAll(".price");

    let totalPrice = 0;

    // Calculate the total price
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });

    // Create a new row for the total price
    const table = document.querySelector("table");
    const totalRow = table.insertRow(-1); // Insert at the end of the table

    const cell1 = totalRow.insertCell(0);
    const cell2 = totalRow.insertCell(1);

    cell1.textContent = "Total Price";
    cell2.textContent = totalPrice + " Rs";
};

getSumBtn.addEventListener("click", getSum);
