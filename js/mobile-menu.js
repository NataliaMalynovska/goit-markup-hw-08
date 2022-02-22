(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const MobilemenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        MobilemenuRef.classList.toggle("is-open");
    });
})();