document.addEventListener("DOMContentLoaded", ()=>{
    caruselInit();
});

function caruselInit(){
    let caruselTrak = document.querySelector(".caruseltrack");
    let caruselItems = document.querySelectorAll(".caruselItem");
    let itemsLoaded = 1;
    const tickThreshold = 3000;
    let direction = 1;
    let currentItem = 0;
    caruselItems.forEach(
        (iteratingItem, index)=>{
            console.log("Iterando Por",iteratingItem);
            if (index !== 0) {
                let sources = iteratingItem.querySelectorAll('source');
                let img = iteratingItem.querySelector('img');
                sources.forEach((src)=>{
                    src.setAttribute("src", src.dataset['srcset']);
                });
                img.setAttribute('src', img.dataset['srcset']);
                img.addEventListener('load', ()=>{
                    itemsLoaded++;
                    if (itemsLoaded === caruselItems.length) {
                        // Vamos a iniciar el temporizador
                        timer();
                    }
                });
            }
        }
    );
    let iterationId;
    function timer(){
        iterationId = setTimeout(
            ()=>{
                nextItem = currentItem + direction;
                if (nextItem < 0) {
                    nextItem = 1;
                    direction = 1
                }
                if (nextItem >= caruselItems.length) {
                    nextItem = caruselItems.length - 2;
                    direction = -1;
                }
                moveToItem(nextItem);
                timer();
            },
            tickThreshold
        );
    }
    function moveToItem(itemIndex) {
        caruselTrak.style.transform = `translateX(-${100*itemIndex}vw)`;
        currentItem = itemIndex;
    }
}