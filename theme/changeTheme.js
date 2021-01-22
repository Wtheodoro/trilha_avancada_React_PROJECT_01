
const cssStyle = document.querySelector('#style')
const switchTheme = document.querySelector(".switch-theme")

let controller = false

switchTheme.addEventListener("click", () => {
    if (controller == false) {
        cssStyle.setAttribute('href', "./styles/darkStyles.css")
        controller = true
    } else {
        cssStyle.setAttribute('href', "./styles/styles.css")
        controller = false
    }
})