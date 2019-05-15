



const btn1 = document.getElementById(`addNotif`);

const btnActive = document.querySelector(`.notifications-menu__inputSearch-wrap`);

const closeBTN = document.querySelector(`.notifications-menu__closeButton`);

btn1.onclick = function () {
    btnActive.classList.toggle(`notifications-menu__inputSearch-wrapActive`);
};


closeBTN.onclick = function () {
    btnActive.classList.remove(`notifications-menu__inputSearch-wrapActive`);
};
