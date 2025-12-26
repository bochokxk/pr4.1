document.addEventListener("DOMContentLoaded", () => {
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");

  // 3. Дві змінні-рядки: назва бургера та шлях до картинки
  const burgerName = "Стандарт";
  const burgerImgSrc = "./image/burger.png";

  // 4. Вивести дані у шаблоні HTML через інтерполяцію
  const renderBurgerOption = () => {
    questionTitle.textContent = "Якого кольору бургер бажаєте?";
    formAnswers.innerHTML = `
              <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/burger.png" alt="burger">
                  <span>Стандарт</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/burgerBlack.png" alt="burger">
                  <span>Чорний</span>
                </label>
              </div>
            </form>
    `;
  };

  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    renderBurgerOption();
  });

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });
});
