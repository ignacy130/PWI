/*jslint browser: true, devel: true */
var arena;
var sourceTextDiv;
var resultDiv;
var hidden = "";
var percentSymbol;

function stringNumValue(text) {
    "use strict";
    var value = 0,
        i = 0,
        l = text.length,
        letter = 'a',
        number = 0;
    while (i < l) {
        letter = text[i];
        number = parseInt(letter.charCodeAt(0), 10);
        value += number;
        i += 1;
    }
    return value;
}

function compareStrings(source, origin) {
    var sL = source.length,
        oL = origin.length,
        s=0,
        i=2,
        r=-2;
    var correct = 0;
    for (s = 0; s < sL; s++) {
        for (i = 2; i < sL; i++) {
            for (r = -2; r < 2; r++) {
                var tc=source[s];
                var it = i+r;
                if (origin[it] === tc)
                {
                    correct++;
                    break;
                }
            }
        }
    }
}

function startGame() {
    "use strict";
    setTimeout(startEating, 2 * 1000);
}

function startEating() {
    "use strict";
    setInterval(eat, 500);
}

function eat() {
    "use strict";
    var arenaVal = stringNumValue(arena.value),
        percent = 0,
        actualTextLength = 0,
        shortened = "";
    if (arenaVal !== 0) {
        percent = compareStrings(arena.value, hidden)/hidden.length; // arenaVal / stringNumValue(hidden);
        resultDiv.innerHTML = Math.round((percent * 100));
        percentSymbol.innerHTML = "%";
    } else {
        resultDiv.innerHTML = "Hey, you still got chances!";
        percentSymbol.innerHTML = "";
    }
    actualTextLength = sourceTextDiv.innerHTML.length;
    hidden += sourceTextDiv.innerHTML.substring(0, 1);
    shortened = sourceTextDiv.innerHTML.substring(1, actualTextLength);
    sourceTextDiv.innerHTML = shortened;
}

function initializeGame() {
    "use strict";
    arena = document.getElementById("arena");
    sourceTextDiv = document.getElementById("sourceText");
    resultDiv = document.getElementById("result");
    percentSymbol = document.getElementById("percentSymbol");
    arena.onfocus = startGame;
}