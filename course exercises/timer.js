console.log('works!');

function timer(){
    let time = 0;
    document.body.textContent = `minelo 0 sekund`;
    function add(){
        time++;
        document.body.textContent = `aktualny czas na stronie ${time}`;
    }
   return add;
}
const count = timer();
setInterval(count, 1000);
