const optionMenu = document.querySelector(".select-dalt"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       btn_dalt = optionMenu.querySelector(".btn-dalt");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        btn_dalt.innerText = selectedOption;

        optionMenu.classList.toggle("active");
    })
})