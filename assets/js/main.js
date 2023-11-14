/*js nút mở-đóng login-button*/

let loginOpenButton = document.querySelector('.login-button'); // nút để mở
let loginCloseButton = document.querySelector('.login-menu-close'); //nút để đớng

//Nhấn mở login
loginOpenButton?.addEventListener('click', function (event) {
    event.preventDefault();

    //logic
    document
        .querySelector('.login-layout')
        .classList.add(
            'menu-open',
        ); /* khi nhấn login-menu sẽ được thêm class hiển thị */
});

loginCloseButton?.addEventListener('click', function (event) {
    event.preventDefault();

    //logic
    document
        .querySelector('.login-layout')
        .classList.remove(
            'menu-open',
        ); /* khi nhấn login-menu sẽ được thêm class hiển thị */
});

/* js để đóng mở nút search-input*/

let searchOpenButton = document.querySelector('.search-button'); // nút để mở
let searchCloseButton = document.querySelector('.search-input__close-btn'); //nút để đớng

//Nhấn mở search
searchOpenButton.addEventListener('click', function (event) {
    event.preventDefault();

    //logic
    document
        .querySelector('.search-input')
        .classList.add(
            '--open',
        ); /* khi nhấn search-input sẽ được thêm class hiển thị */
});

searchCloseButton.addEventListener('click', function (event) {
    event.preventDefault();

    //logic
    document
        .querySelector('.search-input')
        .classList.remove(
            '--open',
        ); /* khi nhấn search-menu sẽ được thêm class hiển thị */
});

/*js cho nút submit trang  createaccount.html*/
function submitForm() {
    const fullnameInput = document.getElementById('fullname-input');
    const fullname = fullnameInput.value;
    const formattedFullname = capitalizeEachWord(fullname);
    sessionStorage.setItem('fullname', formattedFullname);
    window.location.href = 'account.html';
}

function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    });
}

/* js cho trang account.html*/
const fullname = sessionStorage.getItem('fullname');
document.getElementById('fullname').textContent = fullname;

/* Khi nhấn đăng nhập */
let loginSubmit = document.querySelector('.btns-login button');
loginSubmit?.addEventListener('click', () => {
    let loginButton = document.querySelector('.login-button');
    let loginMenu = document.querySelector('.login-layout');
    loginButton.remove();
    loginMenu.remove();
});
