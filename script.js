let video, canvas, ctx;

document.addEventListener("DOMContentLoaded", function() {
    video = document.getElementById("videoElement");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    let originalButton = document.getElementById("originalButton");
    let negativeButton = document.getElementById("negativeButton");
    let bwButton = document.getElementById("bwButton");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.log("Something went wrong with accessing the camera:", error);
            });
    }

    originalButton.addEventListener("click", function() {
        clearCanvas();
        video.style.filter = "none";
    });

    negativeButton.addEventListener("click", function() {
        clearCanvas();
        video.style.filter = "invert(100%)";
    });

    bwButton.addEventListener("click", function() {
        clearCanvas();
        video.style.filter = "grayscale(100%)";
    });
});

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
