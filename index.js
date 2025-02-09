document.getElementById("surpriseBtn").addEventListener("click", function () {
    let surpriseText = document.getElementById("surpriseText");
    
    surpriseText.classList.remove("hidden");
    surpriseText.style.opacity = "1";
    surpriseText.style.transform = "translateY(0)";
});
