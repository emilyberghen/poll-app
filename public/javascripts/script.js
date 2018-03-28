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
    }
});

var title = document.getElementById("create");
if(title){
    document.getElementById('sub').addEventListener('click', function(e){
            primus.write({
                q: document.getElementById('question').value,
                o1: document.getElementById('option1').value,
                o2: document.getElementById('option2').value
            });
            e.preventDefault();
        });
}