document.querySelector('.open-menu').onclick = function () {
    document.querySelector('.checkbox').classList.toggle('checked')
    document.querySelector('.header__menu ul').classList.toggle('open')
}
document.querySelectorAll('.header__list').forEach(function (item) {
    item.onclick = function () {
        document.querySelector('.checkbox').classList.toggle('checked')
        document.querySelector('.header__menu ul').classList.toggle('open')
    }
})
