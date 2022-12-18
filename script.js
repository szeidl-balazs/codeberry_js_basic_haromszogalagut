function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    let triangleBase = 100;
    let position = 120;

    for (x = 0; x < 30; x++) {

            context.moveTo(position, position);

            context.lineTo(position + triangleBase, position);
            context.lineTo(position + triangleBase / 2, position - triangleBase);
            context.lineTo(position, position);

            position += 5;

            context.strokeStyle = 'silver';
            context.stroke();
                   
    }

    


}

window.addEventListener("load", pageLoaded);