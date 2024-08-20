// const btnPluses = document.querySelector(".btnPlus-1");
// const btnPluses2 = document.querySelector(".btnPlus-2");
// const btnPluses3 = document.querySelector(".btnPlus-3");
// const btnPluses4 = document.querySelector(".btnPlus-4");
// const firstPart = document.querySelector(".openablePart-1");
// const secondPart = document.querySelector(".openablePart-2");
// const thirdPart = document.querySelector(".openablePart-3");
// const forthPart = document.querySelector(".openablePart-4");
// btnPluses.addEventListener("click",()=>{
//     firstPart.classList.toggle('active');
// });
// btnPluses2.addEventListener("click",()=>{
//     secondPart.classList.toggle('active');
// });
// btnPluses3.addEventListener("click",()=>{
//     thirdPart.classList.toggle('active');
// });
// btnPluses4.addEventListener("click",()=>{
//     forthPart.classList.toggle('active');
// });

const btnPluses = document.querySelectorAll('[class^="btnPlus-"]');
const parts = document.querySelectorAll('[class^="openablePart-"]');

btnPluses.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // Toggle 'active' class on the corresponding part
        parts[index].classList.toggle('active');
        
        // Check if the 'active' class is applied to the corresponding part
        const isActive = parts[index].classList.contains('active');
        
        // Update the button's inner HTML based on whether the part is active
        btn.innerHTML = isActive ? "<img src='./assets/images/icon-minus.svg' alt=''>" : "<img src='./assets/images/icon-plus.svg' alt=''>";
    });
});
