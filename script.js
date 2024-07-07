let boxes = document.querySelectorAll('.box1, .box2, .box3');

boxes.forEach(box => {
    let titleDiv = box.querySelector('.title-div');
    let contentDiv = box.querySelector('.content-div');
    
    box.addEventListener("mouseover", function() {
        box.style.width = "25vw";
        titleDiv.style.opacity = '0';
        contentDiv.style.opacity = '1';
    });
    
    box.addEventListener("mouseleave", function() {
        box.style.width = "12vw";
        titleDiv.style.opacity = '1';
        contentDiv.style.opacity = '0';
    });
});
