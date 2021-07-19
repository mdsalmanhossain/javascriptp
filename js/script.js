// let counter = document.querySelector('.counter');

// let count = 1;

// setInterval(() => {
//     if ( count <75) {
//     count++
//     counter.innerText = count; 
//     }
    
// }, 1)

let counters = document.querySelectorAll('.counter');

let time = 300;

counters.forEach (counter => {
  let upDateCount = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    let incriment = target/time;

    if (count < target) {
        counter.innerText = Math.ceil(count + incriment);
        setTimeout(upDateCount, 1);
    }else{
        counter.innerText = target;
    }

    };
    upDateCount();
})