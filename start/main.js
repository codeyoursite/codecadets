const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const age = document.getElementById("floatingPassword").value;
    let data = new URLSearchParams();
    data.append("age", age);
    if ((age <= 7) && (age > 4)) {
        const url = `../young`;
        window.location.href = url;
    } else if (age > 7 && age < 18) {
        const url = `../second/index.html?${data.toString()}`;
        window.location.href = url;
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid age between 5 and 18."
        });
    }
});
