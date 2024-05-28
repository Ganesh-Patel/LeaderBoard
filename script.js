let section2 = document.querySelector(".section2");

let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".number");
let button = document.querySelector("button");

let data = [
    {
        firstName: "Ganesh",
        lastName: "Patel",
        country: "India",
        score: 200
    },
    {
        firstName: "Himanshu",
        lastName: "Upadhayay",
        country: "India",
        score: 100
    },
    {
        firstName: "John",
        lastName: "Doe",
        country: "USA",
        score: 150
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        country: "UK",
        score: 120
    },
    {
        firstName: "Maria",
        lastName: "Garcia",
        country: "Spain",
        score: 110
    },
    {
        firstName: "Chen",
        lastName: "Wei",
        country: "China",
        score: 130
    },
    {
        firstName: "Lars",
        lastName: "Muller",
        country: "Germany",
        score: 90
    },
    {
        firstName: "Aiko",
        lastName: "Tanaka",
        country: "Japan",
        score: 80
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        country: "Canada",
        score: 70
    },
    {
        firstName: "Ivan",
        lastName: "Petrov",
        country: "Russia",
        score: 60
    },
    {
        firstName: "Fatima",
        lastName: "Khan",
        country: "Pakistan",
        score: 50
    },
    {
        firstName: "Luiz",
        lastName: "Silva",
        country: "Brazil",
        score: 40
    }
];

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (pcountry.value === "" || fname.value === "" || lname.value === "" || pscore.value === "") {
        alert("Please fill all the fields");
    } else {
        let playerObj = {
            firstName: fname.value,
            lastName: lname.value,
            country: pcountry.value,
            score: parseInt(pscore.value)
        };

        data.push(playerObj);
        updateData();
        fname.value = "";
        lname.value = "";
        pcountry.value = "";
        pscore.value = "";
    }
});

function updateData() {
    data.sort(function (p1, p2) {
        return p2.score - p1.score;
    });
    let showData = "";
    data.forEach(function (item, index) {
        let rank = index + 1;
        let rankDisplay;
        if (rank === 1) {
            rankDisplay = "🏆 1st";
        } else if (rank === 2) {
            rankDisplay = "🥈 2nd";
        } else if (rank === 3) {
            rankDisplay = "🥉 3rd";
        } else {
            rankDisplay = rank + "th";
        }
        showData += `
        <div class="button_group">
            <span class="rank">${rankDisplay}</span>
            <span>${item.firstName}  ${item.lastName}</span>
            <span>${item.country}</span>
            <span>${item.score}</span>
            <button class="del">🗑️</button>
            <button class="but1">+5</button>
            <button class="but2">-5</button>
        </div>
        `;
    });
    section2.innerHTML = showData;
    activateButtons();
}

function activateButtons() {
    document.querySelectorAll(".button_group").forEach(function (el, index) {
        el.addEventListener("click", function (e) {
            if (e.target.classList.contains('but1')) {
                data[index].score += 5;
                updateData();
            } else if (e.target.classList.contains('but2')) {
                data[index].score -= 5;
                updateData();
            } else if (e.target.classList.contains('del')) {
                data.splice(index, 1);
                updateData();
            }
        });
    });
}
let isFirstImage = true;
setInterval(() => {
    if (isFirstImage) {
        document.body.style.backgroundImage = "url('https://www.creditbenchmark.com/wp-content/uploads/2023/05/iStock-1419766496.jpg')";
    } else {
        document.body.style.backgroundImage = "url('https://cdn.dribbble.com/userupload/3066902/file/original-7bd367911dd95e99794eba83317f2532.png?resize=400x0')";
    }
    isFirstImage = !isFirstImage;
}, 6000);
window.addEventListener('load', updateData);
