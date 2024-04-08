let userinput = document.querySelector("#date");
let result = document.querySelector("#result");

userinput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userinput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        // Get the days in the previous month
        let daysInLastMonth = new Date(y2, m2 - 1, 0).getDate();
        d3 = daysInLastMonth + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 12 + m3;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days old`;
}

userinput.addEventListener('change', calculateAge);
