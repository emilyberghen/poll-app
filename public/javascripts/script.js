var url = '/';
var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

primus.on('data', function(data){
    var title = document.getElementById("q");
    if(title){
        title.innerHTML = data.q;
        document.querySelector('.o1').innerHTML = data.o1;
        document.querySelector('.o2').innerHTML = data.o2;
        
        if(data.num1){
            document.querySelector('.num1').innerHTML = data.num1;
        }
        
        if(data.num2){
            document.querySelector('.num2').innerHTML = data.num2;
        }
    }
});
var title = document.getElementById("create");
if(title){
    document.getElementById('sub').addEventListener('click', function(e){
            primus.write({
                q: document.getElementById('question').value,
                o1: document.getElementById('option1').value,
                o2: document.getElementById('option2').value,
                num1: 0,
                num2: 0
            });
            e.preventDefault();
        });
}

var title = document.getElementById("q");
if(title){
    document.querySelector('.o1').addEventListener('click', function(e){
            primus.write({
                q: document.getElementById('q').innerHTML,
                o1: document.querySelector('.o1').innerHTML,
                o2: document.querySelector('.o2').innerHTML,
                num1: parseInt(document.querySelector('.num1').innerHTML)+1,
                num2: parseInt(document.querySelector('.num2').innerHTML)
            });
            e.preventDefault();
        });
}

var title = document.getElementById("q");
if(title){
    document.querySelector('.o2').addEventListener('click', function(e){
            primus.write({
                q: document.getElementById('q').innerHTML,
                o1: document.querySelector('.o1').innerHTML,
                o2: document.querySelector('.o2').innerHTML,
                num1: parseInt(document.querySelector('.num1').innerHTML),
                num2: parseInt(document.querySelector('.num2').innerHTML)+1
            });
            e.preventDefault();
        });
}