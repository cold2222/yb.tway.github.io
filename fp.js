const wrap = document.getElementsByClassName("wrap")[0]; // 보일 영역
const container = document.getElementsByClassName("contents-container");
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지
let timer = null;

const navDots = document.querySelector("#dot-nav").children;
navDots[0].style["background-color"] = "#FF3434";

const spFadeList = document.getElementsByClassName("sp-fade");
const tpFadeList = document.getElementsByClassName("tp-fade");
const lpFadeList = document.getElementsByClassName("lp-fade");

history.scrollRestoration = "manual";

for (let i = 0; i < navDots.length; i++) {
    navDots[i].addEventListener("click", (e) => {
        for (const dot of navDots) dot.style["background-color"] = "#E5E5E5";
        e.target.style["background-color"] = "#FF3434";
        page = i;

        if (page === 0) {
            navDots[0].style["background-color"] = "#FF3434";

            spFadeOff();
            tpFadeOff();
            lpFadeOff();
        } else if (page === 1) {
            navDots[1].style["background-color"] = "#FF3434";
            spFadeOn();

            tpFadeOff();
            lpFadeOff();
        } else if (page === 2) {
            navDots[2].style["background-color"] = "#FF3434";
            tpFadeOn();

            spFadeOff();
            lpFadeOff();
        } else if (page === 3) {
            navDots[3].style["background-color"] = "#FF3434";
            lpFadeOn();

            spFadeOff;
            tpFadeOff();
        }

        wrap.style.top = page * -100 + "vh";
    });
}

window.addEventListener(
    "wheel",
    (e) => {
        if (!timer) {
            e.preventDefault();
            if (e.deltaY > 0) {
                page++;
            } else if (e.deltaY < 0) {
                page--;
            }
            if (page < 0) {
                page = 0;
            } else if (page > lastPage) {
                page = lastPage;
            }

            wrap.style.top = page * -100 + "vh";

            for (const dot of navDots)
                dot.style["background-color"] = "#E5E5E5";

            if (page === 0) {
                navDots[0].style["background-color"] = "#FF3434";

                spFadeOff();
                tpFadeOff();
                lpFadeOff();
            } else if (page === 1) {
                navDots[1].style["background-color"] = "#FF3434";
                spFadeOn();

                tpFadeOff();
                lpFadeOff();
            } else if (page === 2) {
                navDots[2].style["background-color"] = "#FF3434";
                tpFadeOn();

                spFadeOff();
                lpFadeOff();
            } else if (page === 3) {
                navDots[3].style["background-color"] = "#FF3434";
                lpFadeOn();

                spFadeOff;
                tpFadeOff();
            }

            timer = setTimeout(() => {
                timer = null;
            }, 1200);
        }
    },
    { passive: false }
); // 디폴트 기능 제거 - 스크롤

const spFadeOn = () => {
    for (const elem of spFadeList) {
        elem.classList.replace("off", "on");
    }
};

const spFadeOff = () => {
    for (const elem of spFadeList) {
        elem.classList.replace("on", "off");
    }
};

const tpFadeOn = () => {
    for (const elem of tpFadeList) {
        elem.classList.replace("off", "on");
    }
};

const tpFadeOff = () => {
    for (const elem of tpFadeList) {
        elem.classList.replace("on", "off");
    }
};

const lpFadeOn = () => {
    for (const elem of lpFadeList) {
        elem.classList.replace("off", "on");
    }
};

const lpFadeOff = () => {
    for (const elem of lpFadeList) {
        elem.classList.replace("on", "off");
    }
};
