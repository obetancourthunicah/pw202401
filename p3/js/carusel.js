document.addEventListener("DOMContentLoaded", ()=>{
    caruselInit();
});

function caruselInit(){
    let caruselContainer = document.querySelector(".carusel");
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
                let img = iteratingItem.querySelector('img');
                img.setAttribute('src', img.dataset['srcset']);

                let sources = iteratingItem.querySelectorAll('source');
                sources.forEach((src)=>{
                    src.setAttribute("srcset", src.dataset['srcset']);
                });
                img.addEventListener('load', ()=>{
                    itemsLoaded++;
                    if (itemsLoaded === caruselItems.length) {
                        createIndexNavigator();
                        timer();
                    }
                });
            }
        }
    );

    function createIndexNavigator() {
        let navigatorContainer = document.createElement("section");
        navigatorContainer.classList.add(['navigator']);
        caruselItems.forEach((e, i)=>{
            let navigatorDot = document.createElement("div");
            navigatorDot.classList.add(['dot']);
            navigatorDot.setAttribute('data-navindex', (i).toString(10));
            navigatorDot.addEventListener("click", onDotNavigateClick);
            navigatorContainer.appendChild(navigatorDot);
        });
        caruselContainer.appendChild(navigatorContainer);
    }

    function onDotNavigateClick(e){
        let currentDotIndex = Number(e.target.dataset['navindex']);
        clearTimeout(iterationId);
        moveToItem(currentDotIndex);
        timer();
    }

    let iterationId;
    function timer(){
        iterationId = setTimeout(
            ()=>{
                nextItem = currentItem + direction;
                if (nextItem < 0) {
                    nextItem = 1;
                    direction = 1;
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