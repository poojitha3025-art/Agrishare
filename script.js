function showMessage() {
    document.getElementById("equipment").scrollIntoView();
}

function book(name) {

    let farmer = prompt("Enter Farmer Name:");
    if (!farmer) return;

    let phone = prompt("Enter Mobile Number:");
    if (!phone || !/^\d{10}$/.test(phone)) {
        alert("Enter a Valid 10-Digit mobile number");
        return;
    }

    let location = prompt("Enter the Location:");
    if (!location) return;

    let days = Number(prompt("Enter rental Days :"));

    if (days <= 0 || !Number.isInteger(days)) {
        alert("Enter valid days");
        return;
    }

    let prices = {
        "Tractor": 1000,
        "Harvester": 2000,
        "Seed Drill": 800
    };

    let total = prices[name] * days;

    let booking = {
        farmer: farmer,
        phone: phone,
        location: location,
        equipment: name,
        days: days,
        total: total
    };

    let bookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
    );

    bookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    alert("Booking Successful! Total: Rs." + total);
}