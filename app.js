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