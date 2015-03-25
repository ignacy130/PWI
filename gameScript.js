    var arena;
    var sourceTextDiv;
    var resultDiv;
    var hidden="";
    var percentSymbol;
    
    function initialize(){
        arena = document.getElementById("arena");
        sourceTextDiv = document.getElementById("sourceText");
        resultDiv = document.getElementById("result");
        percentSymbol = document.getElementById("percentSymbol");
        arena.onfocus = startGame;
    }
    
    function stringNumValue(text){
        var value = 0;
        var l = text.length;
        for(i = 0; i < l; i++)
        {
            var letter = text[i];
            var number = parseInt(letter.charCodeAt(0));
            value += number;
        }
        return value;
    }
    
    var startGame = function(){
        setTimeout(startEating, 2*1000);
    }
    
    var startEating = function(){
        
        setInterval(eat, 500);
    }
    
    var eat = function(){
        var arenaVal = stringNumValue(arena.value);
        if(arenaVal!=0)
        {
            var percent = arenaVal / stringNumValue(hidden);
                resultDiv.innerHTML = Math.round((percent*100));
            percentSymbol.innerHTML = "%";
        }
        else
        {
            resultDiv.innerHTML = "Hey, you still got chances!";
            percentSymbol.innerHTML = "";
        }
        var actualTextLength = sourceTextDiv.innerHTML.length;
        hidden+= sourceTextDiv.innerHTML.substring(0,1);
        var shortened = sourceTextDiv.innerHTML.substring(1, actualTextLength);
        sourceTextDiv.innerHTML = shortened;
    }
