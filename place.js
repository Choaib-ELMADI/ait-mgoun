const suggestArr = document.querySelectorAll('.suggest');
const input = document.querySelector('.searchInput');
const btnSearch = document.querySelector('.btnSearch');
const search = document.getElementById('search');


if (input.value === '') {
    btnSearch.href = 'index.html';
}
suggestArr.forEach(function(s) {
    s.addEventListener('click', function() {
        const text = this.innerHTML;
        input.value = text;
        btnSearch.href = text.toLowerCase() + ".html";
    })
})

input.addEventListener('input', function() {
    btnSearch.href = this.value.toLowerCase() + ".html";
})


input.addEventListener('focus', function() {
    search.style.borderBottomLeftRadius = '0';
    search.style.borderBottomRightRadius = '0';
})
input.addEventListener('blur', function() {
    if (window.innerWidth < 950) {
        search.style.borderBottomLeftRadius = '10px';
        search.style.borderBottomRightRadius = '10px';
    }
    else {
        search.style.borderBottomLeftRadius = '16px';
        search.style.borderBottomRightRadius = '16px';
    }
})