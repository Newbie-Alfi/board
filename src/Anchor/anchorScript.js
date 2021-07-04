const anchList = document.querySelectorAll('.anchor[data-goto]')

console.log(anchList.length);
if (anchList.length>0){
    anchList.forEach(anch => {
        anch.addEventListener('click', onAnchclick)
    });
    
    function onAnchclick(e){
        const anch = e.target;

        if(anch.dataset.goto && document.querySelector(anch.dataset.goto)){
            const gotoBlock = document.querySelector(anch.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top +  window.pageYOffset ;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}