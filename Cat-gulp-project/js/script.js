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

let data = [{
    "image_img": "/img/cat-1.jpg",
    "image_title": "Эконом",
    "card_size": "",
    "card__area": "0,63",
    "card__equipment1": "/img/icons/icons.svg#empty",
    "card__equipment2": "",
    "card__equipment3": "",
    "card__equipment4": "",
    "card__price": "100"
}, {
    "image_img": "/img/cat-2.jpg",
    "image_title": "Эконом плюс",
    "card_size": "90х100х180",
    "card__area": "0,90",
    "card__equipment1": "/img/icons/icons.svg#sunbed",
    "card__equipment2": "/img/icons/icons.svg#scratching_post",
    "card__equipment3": "",
    "card__equipment4": "",
    "card__price": "200"
}, {
    "image_img": "/img/cat-3.jpg",
    "image_title": "Комфорт",
    "card_size": "100х125х180",
    "card__area": "1,13",
    "card__equipment1": "/img/icons/icons.svg#sunbed",
    "card__equipment2": "/img/icons/icons.svg#scratching_post",
    "card__equipment3": "/img/icons/icons.svg#game_complex",
    "card__equipment4": "",
    "card__price": "250"
}, {
    "image_img": "/img/cat-4.jpg",
    "image_title": "Сьют",
    "card_size": "125х125х180",
    "card__area": "1,56",
    "card__equipment1": "/img/icons/icons.svg#sunbed",
    "card__equipment2": "/img/icons/icons.svg#scratching_post",
    "card__equipment3": "/img/icons/icons.svg#game_complex",
    "card__equipment4": "",
    "card__price": "350",
    "filter__size": "size-1.56"
}, {
    "image_img": "/img/cat-5.jpg",
    "image_title": "Люкс",
    "card_size": "160х160х180",
    "card__area": "2,56",
    "card__equipment1": "/img/icons/icons.svg#sunbed",
    "card__equipment2": "/img/icons/icons.svg#scratching_post",
    "card__equipment3": "/img/icons/icons.svg#game_complex",
    "card__equipment4": "/img/icons/icons.svg#house",
    "card__price": "500"
}, {
    "image_img": "/img/cat-6.jpg",
    "image_title": "Супер-Люкс",
    "card_size": "180х160х180",
    "card__area": "2,88",
    "card__equipment1": "/img/icons/icons.svg#sunbed",
    "card__equipment2": "/img/icons/icons.svg#scratching_post",
    "card__equipment3": "/img/icons/icons.svg#game_complex",
    "card__equipment4": "/img/icons/icons.svg#house",
    "card__price": "600"
}]

function setItemsInContent() {
    let cards = data
    let card = document.querySelector('.card')
    let parent = document.querySelector('.main__card-block');
    for (let i = 0; i < cards.length; i++) {

        card.querySelector('.img-cat').setAttribute('src', cards[i].image_img)
        card.querySelector('.card__title').innerHTML = cards[i].image_title
        card.querySelector('.size').innerHTML = cards[i].card_size
        card.querySelector('.area').innerHTML = cards[i].card__area
        card.querySelector('.price').innerHTML = cards[i].card__price
        card.querySelector('.equipment-1').setAttribute('src', cards[i].card__equipment1)
        card.querySelector('.equipment-2').setAttribute('src', cards[i].card__equipment2)
        card.querySelector('.equipment-3').setAttribute('src', cards[i].card__equipment3)
        card.querySelector('.equipment-4').setAttribute('src', cards[i].card__equipment4)

        if (i < cards.length - 1) {
            card = card.cloneNode(true);
            parent.appendChild(card);
        }

    }
    document.querySelectorAll('.equipment-2').forEach(function (item) {
        if (item.getAttribute('src') === "") {
            item.remove()
        }
    })
    document.querySelectorAll('.equipment-3').forEach(function (item) {
        if (item.getAttribute('src') === "") {
            item.remove()
        }
    })
    document.querySelectorAll('.equipment-4').forEach(function (item) {
        if (item.getAttribute('src') === "") {
            item.remove()
        }
    })
    document.querySelectorAll('.size').forEach(function (item) {
        if (item.innerHTML === "") {
            item.parentNode.parentNode.removeChild(item.parentNode)
        }
    })
}

document.querySelectorAll('.select__option').forEach(function (item) {
    item.onclick = function () {
        let cardNodeList = document.querySelectorAll('.card');
        let parent = document.querySelector('#cards');
        let itemsArray = [];

        for (let i = 0; i < cardNodeList.length; i++) {
            itemsArray.push(parent.removeChild(cardNodeList[i]));
        }
        if (item.classList.contains('sort-size-up')) {
            itemsArray.sort(function (a, b) {
                let size_a = parseFloat(a.querySelector('.area').textContent.replace(/,/, '.'));
                let size_b = parseFloat(b.querySelector('.area').textContent.replace(/,/, '.'));
                return size_a - size_b;
            }).forEach(function (node) {
                parent.appendChild(node)
            });
        }
        if (item.classList.contains('sort-size-down')) {
            itemsArray.sort(function (a, b) {
                let size_a = parseFloat(a.querySelector('.area').textContent.replace(/,/, '.'));
                let size_b = parseFloat(b.querySelector('.area').textContent.replace(/,/, '.'));
                return size_b - size_a;
            }).forEach(function (node) {
                parent.appendChild(node)
            });
        }
        if (item.classList.contains('sort-price-up')) {
            itemsArray.sort(function (a, b) {
                let size_a = parseInt(a.querySelector('.price').textContent);
                let size_b = parseInt(b.querySelector('.price').textContent);
                return size_a - size_b;
            }).forEach(function (node) {
                parent.appendChild(node)
            });
        }
        if (item.classList.contains('sort-price-down')) {
            itemsArray.sort(function (a, b) {
                let size_a = parseInt(a.querySelector('.price').textContent);
                let size_b = parseInt(b.querySelector('.price').textContent);
                return size_b - size_a;
            }).forEach(function (node) {
                parent.appendChild(node)
            });
        }
    }
})

document.querySelectorAll('input[type="checkbox"], input[type="text"]').forEach(function (item) {
    item.onchange = function () {
        document.querySelector('.btn-throw').classList.remove('deactivate')
    }
})

document.querySelector('.deactivate').onclick = function () {
    document.querySelectorAll('input[type="checkbox"], input[type="text"]').forEach(function (item) {
        item.value = ''
        item.checked = false
    })
}

document.addEventListener("DOMContentLoaded", setItemsInContent);

