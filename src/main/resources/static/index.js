const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginPane = document.getElementById("loginPane");
const signupPane = document.getElementById("signupPane");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Get the API base URL based on environment
const API_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:8080'
    : window.location.origin;

function setActivePane(active) {
    const loginTab = loginBtn;
    const signupTab = signupBtn;

    if (active === "login") {
        loginPane.classList.add("active");
        signupPane.classList.remove("active");
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
    } else {
        signupPane.classList.add("active");
        loginPane.classList.remove("active");
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
    }
}

loginBtn.addEventListener("click", () => setActivePane("login"));
signupBtn.addEventListener("click", () => setActivePane("signup"));

setActivePane("login");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("signupEmail").value,
        password: document.getElementById("signupPassword").value
    };

    const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const msg = await res.text();
    document.getElementById("signupMsg").innerText = msg;

    if (msg.includes("successful")) {
        setTimeout(() => {
            localStorage.setItem("user", data.email);
            window.location.href = "dashboard.html";
        }, 1500);
    }
});

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const msg = await res.text();

    if (msg.includes("successful")) {
        localStorage.setItem("user", data.email);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").innerText = msg;
    }
});