// var canvas = document.getElementById("canvas");
//         var context = canvas.getContext("2d");

//         // Cara
// context.beginPath();
// context.lineWidth = 10;
// context.strokeStyle = "rgb(0, 0, 0)";
// context.arc(200, 233, 150, 0, 2 * Math.PI, true);
// context.stroke();

// // Color de la cara
// context.beginPath();
// context.fillStyle = "rgba(80, 100, 80, 0.4)";
// context.arc(200, 233, 150, 0, 2 * Math.PI, true);
// context.fill();

// // ojo derecho
// context.lineWidth = 20;
// context.beginPath();
// context.moveTo(230, 130);
// context.bezierCurveTo(230, 130, 230, 130, 240, 200);
// context.stroke();

// // ojo izquierdo
// context.beginPath();
// context.moveTo(170, 130);
// context.bezierCurveTo(170, 130, 170, 130, 160, 200);
// context.stroke();

// // labio superior
// context.beginPath();
// context.moveTo(100, 230);
// context.bezierCurveTo(100, 230, 200, 380, 300, 230);
// context.stroke();

// // labio inferior
// context.beginPath();
// context.moveTo(100, 235);
// context.bezierCurveTo(105, 270, 200, 480, 300, 232);
// context.stroke();
var a = document.getElementById("canvas");
        var ctx = a.getContext("2d");

        ctx.font = "60px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText("GitHub", 43, 180);