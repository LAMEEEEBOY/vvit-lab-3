const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioContainer = document.querySelector(".portfolio__container");
const portfolioBtnText = document.getElementById("portfolio__btn__text")

let isPortfolioOpened;

function togglePortfolioVisibility() {
    if (isPortfolioOpened) {
        portfolioBtnText.textContent = 'Открыть пример работы'
        isPortfolioOpened = false
    } else {
        portfolioBtnText.textContent = 'Закрыть пример работы'
        isPortfolioOpened = true
    }

    portfolioContainer.classList.toggle("hide");
}

portfolioBtn.addEventListener("click", togglePortfolioVisibility);
