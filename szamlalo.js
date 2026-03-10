//Szamkitalalos: x db utan vége amugy megy kisebb vagy nagyobb

const titok = Math.random() * 1000000 | 0;
let tipp;
let db = 0;

while (db < 20) {
    tipp = parseInt(prompt("Találd ki a számot (0-1000000):"));
    
    if (isNaN(tipp)) {
        alert("Ez nem szám!");
        continue;
    }
    
    db++;
    
    if (tipp == titok) {
        alert("Gratulálok, " + db + " lépésből eltaláltad!");
        break;
    } else if (tipp > titok) {
        alert(db + ". tipp nem talált: A megoldás kisebb.");
    } else {
        alert(db + ". tipp nem talált: A megoldás nagyobb.");
    }
    
    if (db == 20) {
        alert("Sajnos ez most nem sikerült! A megoldás: " + titok);
    }
}