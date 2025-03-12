document.addEventListener("DOMContentLoaded", () => {
    // スムーズスクロール
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // フェードインアニメーション
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => observer.observe(section));

    // ハンバーガーメニュー
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector("nav ul");
    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});