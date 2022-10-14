const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const text4 = document.getElementById("text4")


document.addEventListener("click", (e)=>{

    if (e.target.nodeName === "H6") {

        
        if (e.target.dataset.type === "section7-h1") {

            text1.classList.toggle("section7-p1")
        }

        if (e.target.dataset.type === "section7-h2") {

            text2.classList.toggle("section7-p1")
        }

        if (e.target.dataset.type === "section7-h3") {

            text3.classList.toggle("section7-p1")
        }

        if (e.target.dataset.type === "section7-h4") {

            text4.classList.toggle("section7-p1")
        }
    }
})