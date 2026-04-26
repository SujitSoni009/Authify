const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginPane = document.getElementById("loginPane");
const signupPane = document.getElementById("signupPane");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

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

    const res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const msg = await res.text();
    document.getElementById("signupMsg").innerText = msg;
});

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const msg = await res.text();

    if (res.ok) {
        localStorage.setItem("user", data.email);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").innerText = msg;
    }
});