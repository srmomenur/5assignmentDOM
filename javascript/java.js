const heartCountDesktop = document.getElementById("heart-count-desktop");
const heartCountMobile = document.getElementById("heart-count-mobile");

let coinDisplaysDesktop = document.getElementById("coins-desktop");
let coinDisplaysMobile = document.getElementById("coins-mobile");

const copyCountDesktop = document.getElementById("copy-count-desktop");
const copyCountMobile = document.getElementById("copy-count-mobile");

const cardContainer = document.querySelector(".card-container");
const callHistoryList = document.getElementById("call-history");

const heartButtons = document.querySelectorAll(".heart-btn");

let clearButton = document.getElementById("clear-btn");

const copyButtons = document.querySelectorAll(".copy-btn");

let heartCount = 0;
let coins = 100;
let copyCount = 0;

for (const heartBtn of heartButtons) {
    heartBtn.addEventListener("click", function () {
        heartCount++;

        heartCountDesktop.innerText = heartCount;
        heartCountMobile.innerText = heartCount;

        let icon = this.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "text-red-500");

        setTimeout(() => {
            icon.classList.remove("fa-solid", "text-red-500");
            icon.classList.add("fa-regular");
        }, 300);
    })
}

function updateCoins(amount) {
    coins = coins - amount;

    coinDisplaysDesktop.innerText = coins;
    coinDisplaysMobile.innerText = coins;
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function addToHistory(serviceName, serviceNumber) {
    const historyList = document.createElement("li");
    historyList.className = "flex justify-between items-center bg-[#FAFAFA] p-4 rounded-lg";
        historyList.innerHTML = `
            <div>
                <h3 class="font-semibold text-lg">${serviceName}</h3>
                <p class="text-lg text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <span class="text-[#111111] text-lg">${getCurrentTime()}</span>
        `;
    callHistoryList.appendChild(historyList);
}

function copyToClipboard(serviceNumber) {
    navigator.clipboard.writeText(serviceNumber);
    copyCount++;

    copyCountDesktop.innerText = copyCount;
    copyCountMobile.innerText = copyCount;

    alert(`Number ${serviceNumber} copied to clipboard!`);
}

cardContainer.addEventListener("click", function (event) {
    const callBtn = event.target.closest(".call-btn");
    if (callBtn) {
        const card = callBtn.closest(".card-body");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;

        if (coins < 20) {
            alert(`You don't have enough coins to make this call.`);
            return;
        }

        updateCoins(20);
        
        alert(`Calling ${serviceName} at ${serviceNumber}`);
        addToHistory(serviceName, serviceNumber);
        return;
    } 

    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
        const card = copyBtn.closest(".card-body");
        const serviceNumber = card.querySelector(".service-number").innerText;
        if (!serviceNumber) {
            alert("No number found to copy.");
            return;
        }
        copyToClipboard(serviceNumber);
    }
});

clearButton.addEventListener("click", function () {
    callHistoryList.innerHTML = "";
})