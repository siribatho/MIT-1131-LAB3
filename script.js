document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('myBtn');
    const message = document.getElementById('message');
    
    btn.addEventListener('click', function() {
        message.innerHTML = "🎉 Hello SIRIBA from Arua! Your Dominion of Sight LAB3 is working perfectly! 🚀";
        message.style.background = "rgba(255,255,255,0.2)";
        message.style.padding = "15px";
        message.style.borderRadius = "10px";
        message.style.marginTop = "20px";
        
        // Change button text
        btn.textContent = "Clicked! ✅";
        btn.style.background = "#4ecdc4";
        
        // Add animation to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = "scale(1.1)";
                card.style.background = "#ffe66d";
            }, index * 200);
        });
    });
    
    // Welcome message in console
    console.log("MIT-1131-LAB3 - Dominion of Sight by Siribatho - Loaded Successfully!");
});
