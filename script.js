const progressBarEl = document.querySelector(".progress_bar_front");
const stepsEl = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let check = 1;
prevBtn.disabled = true;

nextBtn.addEventListener("click", ()=>{
    check++;
    if(check > stepsEl.length) {
        check = stepsEl.length;
    }
    updateSteps();
});

prevBtn.addEventListener("click", ()=>{
    check--;
    if(check < 1) {
        check = 1;
    }
    updateSteps();
});

function updateSteps() {
    stepsEl.forEach((stepEl, index) => {
        if(index < check) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-check"></i>
                                <small>${index === 0 ? "Start" : index === stepsEl.length - 1 ? "Final" : "Step " +  index}</small>`;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }
    });

    const checkNumber = document.querySelectorAll(".checked");
    progressBarEl.style.width = ((checkNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

    if (check == 1) {
        prevBtn.disabled = true;
    } else if (check == stepsEl.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}