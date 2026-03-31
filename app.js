const GH_ACCES_TOKEN= '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';


function loadNavigation() {
fetch('./navbar.html')
    .then(res => res.text())
    .then(navbarHtml => {
        document.body.insertAdjacentHTML('afterbegin', navbarHtml);
    })
    .catch(err =>{
            console.error(err);
            alert("Hiba a menürendszer betöltésekor.");
    });
}

loadNavigation();