const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".openModalButton");
const closeModalButton = document.querySelector(".close__button");
const overlay = document.querySelector(".overlay")

const openModal = () => {
    modal.classList.remove("close")
    document.body.classList.add("overFlowHidden")
}

const closeModal = () => {
    modal.classList.add("close")
    document.body.classList.remove("overFlowHidden")
}

openModalButton.addEventListener("click", ()=> {
    openModal()
})

// closeModalButton.addEventListener("click", () => {
//     closeModal()
// })

// overlay.addEventListener("click", () => {
//     closeModal()
// })

// modal.addEventListener("click", (e) => {
//     const targetClassList = e.target.classList;
//     if(targetClassList.contains("overlay") || targetClassList.contains("close__button")) {
//         closeModal()
//     }
// })

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("overlay") || e.target.classList.contains("close__button")) {
        closeModal()
    }
})
