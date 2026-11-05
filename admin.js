let bookings = JSON.parse(
    localStorage.getItem("bookings") || "[]"
);

document.getElementById("count").innerText =
    bookings.length;

let revenue = 0;

let table = document.getElementById("bookings");

bookings.forEach(b => {

    revenue += b.total;

    let row = document.createElement("tr");

    [b.farmer, b.phone, b.location,
     b.equipment, b.days, b.total].forEach(value => {

        let cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    table.appendChild(row);
});

document.getElementById("revenue").innerText =
    revenue;