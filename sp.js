const slideList = document.querySelector("#slide-wrapper");

for (const slideElement of slideList.children) {
    slideElement.addEventListener("mouseenter", (e) => {
        const children = e.target.children;

        children[0].classList.add("on");

        children[1].style["color"] = "white";

        children[2].style["color"] = "white";
        children[2].style["top"] = "500px";

        children[2].children[2].style["display"] = "flex";
    });

    slideElement.addEventListener("mouseleave", (e) => {
        const children = e.target.children;

        children[0].classList.remove("on");

        children[1].style["color"] = "black";

        children[2].style["color"] = "black";
        children[2].style["top"] = "600px";

        children[2].children[2].style["display"] = "none";
    });
}
