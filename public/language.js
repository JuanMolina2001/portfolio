
function setLanguage(currentLanguage) {
    localStorage.setItem('lang', currentLanguage);
    fetch('/data.json')
    .then(response => {
        return response.json();
    }
    )
    .then(data => {
        const obj = data[currentLanguage];
        for (const key in obj) {
            if (Array.isArray(obj[key])) {
                const array = obj[key]
                const keys = Object.keys(array[0])
                keys.forEach(k => {
                    document.getElementById(key).querySelectorAll(`.${k}`)
                        .forEach((element, index) => {
                            element.innerText = array[index][k];
                        }
                        );
                })
            } else {
                document.getElementById(key).innerHTML = obj[key];
            }
        }
    }
    ).finally(() => {
        document.body.style.display = "block";
    })
}
const currentLanguage = (localStorage.getItem('lang') || navigator.language.split('-')[0]) === 'es' ? 'es' : 'en';
document.querySelector('html').setAttribute('lang', currentLanguage);
document.body.style.display = "none";
setLanguage(currentLanguage);
const es = document.getElementById('es');
const en = document.getElementById('en');
es.addEventListener('click', () => {
    setLanguage('es');
});
en.addEventListener('click', () => {
    setLanguage('en');
});