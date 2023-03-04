const login = document.querySelector(".login-section"),
register= document.querySelector(".register"),
loginLink = document.querySelector(".login-link");
register.addEventListener("click",() =>{
    login.classList.add("active")
})
loginLink.addEventListener("click", () => {
    login.classList.remove("active");
});
