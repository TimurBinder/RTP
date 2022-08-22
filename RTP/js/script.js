document.addEventListener('DOMContentLoaded', () => {
    const sigma = document.querySelector('.sigma');
    const gamma = document.querySelector('.gamma');

    const img = document.querySelector("#gamma__img");
    // Массив для анимации на 15fps
    const imgArr = ["./img/AnimationPND/15fps/Композиция 218.png", "./img/AnimationPND/15fps/Композиция 217.png", "./img/AnimationPND/15fps/Композиция 216.png", 
    "./img/AnimationPND/15fps/Композиция 215.png", "./img/AnimationPND/15fps/Композиция 214.png" ,"./img/AnimationPND/15fps/Композиция 213.png",
     "./img/AnimationPND/15fps/Композиция 212.png", "./img/AnimationPND/15fps/Композиция 211.png", "./img/AnimationPND/15fps/Композиция 210.png", 
    "./img/AnimationPND/15fps/Композиция 209.png", "./img/AnimationPND/15fps/Композиция 208.png", "./img/AnimationPND/15fps/Композиция 207.png", 
    "./img/AnimationPND/15fps/Композиция 206.png", "./img/AnimationPND/15fps/Композиция 205.png", "./img/AnimationPND/15fps/Композиция 204.png", 
    "./img/AnimationPND/15fps/Композиция 203.png", "./img/AnimationPND/15fps/Композиция 202.png","./img/AnimationPND/15fps/Композиция 201.png", 
    "./img/AnimationPND/15fps/Композиция 200.png"];

    // Массив для анимации на 25fps
    // const imgArr = ["./img/AnimationPND/25fps/Композиция 2_124.png", "./img/AnimationPND/25fps/Композиция 2_123.png", "./img/AnimationPND/25fps/Композиция 2_122.png",
    // "./img/AnimationPND/25fps/Композиция 2_121.png", "./img/AnimationPND/25fps/Композиция 2_120.png", "./img/AnimationPND/25fps/Композиция 2_119.png",
    // "./img/AnimationPND/25fps/Композиция 2_118.png", "./img/AnimationPND/25fps/Композиция 2_117.png", "./img/AnimationPND/25fps/Композиция 2_116.png", 
    // "./img/AnimationPND/25fps/Композиция 2_115.png", "./img/AnimationPND/25fps/Композиция 2_114.png", "./img/AnimationPND/25fps/Композиция 2_113.png", 
    // "./img/AnimationPND/25fps/Композиция 2_112.png", "./img/AnimationPND/25fps/Композиция 2_111.png", "./img/AnimationPND/25fps/Композиция 2_110.png", 
    // "./img/AnimationPND/25fps/Композиция 2_109.png", "./img/AnimationPND/25fps/Композиция 2_108.png", "./img/AnimationPND/25fps/Композиция 2_107.png",
    // "./img/AnimationPND/25fps/Композиция 2_106.png", "./img/AnimationPND/25fps/Композиция 2_105.png", "./img/AnimationPND/25fps/Композиция 2_104.png",
    // "./img/AnimationPND/25fps/Композиция 2_103.png", "./img/AnimationPND/25fps/Композиция 2_102.png", "./img/AnimationPND/25fps/Композиция 2_101.png",
    // "./img/AnimationPND/25fps/Композиция 2_100.png"];

    // Массив для анимации на 50fps
    // const imgArr = ["./img/AnimationPND/50fps/Композиция 249.png", "./img/AnimationPND/50fps/Композиция 248.png", "./img/AnimationPND/50fps/Композиция 247.png", 
    // "./img/AnimationPND/50fps/Композиция 246.png", "./img/AnimationPND/50fps/Композиция 245.png", "./img/AnimationPND/50fps/Композиция 244.png", 
    // "./img/AnimationPND/50fps/Композиция 243.png", "./img/AnimationPND/50fps/Композиция 242.png", "./img/AnimationPND/50fps/Композиция 241.png", 
    // "./img/AnimationPND/50fps/Композиция 240.png", "./img/AnimationPND/50fps/Композиция 239.png", "./img/AnimationPND/50fps/Композиция 238.png", 
    // "./img/AnimationPND/50fps/Композиция 237.png", "./img/AnimationPND/50fps/Композиция 236.png", "./img/AnimationPND/50fps/Композиция 235.png", 
    // "./img/AnimationPND/50fps/Композиция 234.png", "./img/AnimationPND/50fps/Композиция 233.png", "./img/AnimationPND/50fps/Композиция 232.png", 
    // "./img/AnimationPND/50fps/Композиция 231.png", "./img/AnimationPND/50fps/Композиция 230.png", "./img/AnimationPND/50fps/Композиция 229.png", 
    // "./img/AnimationPND/50fps/Композиция 228.png", "./img/AnimationPND/50fps/Композиция 227.png", "./img/AnimationPND/50fps/Композиция 226.png", 
    // "./img/AnimationPND/50fps/Композиция 225.png", "./img/AnimationPND/50fps/Композиция 224.png", "./img/AnimationPND/50fps/Композиция 223.png", 
    // "./img/AnimationPND/50fps/Композиция 222.png", "./img/AnimationPND/50fps/Композиция 221.png", "./img/AnimationPND/50fps/Композиция 220.png", 
    // "./img/AnimationPND/50fps/Композиция 219.png", "./img/AnimationPND/50fps/Композиция 218.png", "./img/AnimationPND/50fps/Композиция 217.png", 
    // "./img/AnimationPND/50fps/Композиция 216.png", "./img/AnimationPND/50fps/Композиция 215.png", "./img/AnimationPND/50fps/Композиция 214.png", 
    // "./img/AnimationPND/50fps/Композиция 213.png", "./img/AnimationPND/50fps/Композиция 212.png", "./img/AnimationPND/50fps/Композиция 211.png", 
    // "./img/AnimationPND/50fps/Композиция 210.png", "./img/AnimationPND/50fps/Композиция 209.png", "./img/AnimationPND/50fps/Композиция 208.png", 
    // "./img/AnimationPND/50fps/Композиция 207.png", "./img/AnimationPND/50fps/Композиция 206.png", "./img/AnimationPND/50fps/Композиция 205.png", 
    // "./img/AnimationPND/50fps/Композиция 204.png", "./img/AnimationPND/50fps/Композиция 203.png", "./img/AnimationPND/50fps/Композиция 202.png", 
    // "./img/AnimationPND/50fps/Композиция 201.png", "./img/AnimationPND/50fps/Композиция 200.png"];

    let currentIndex = 0;
    let windowCenterPast = (window.innerHeight / 2) + window.scrollY;
    // Смена слайда
    function slide(direction) {
        currentIndex += direction;
        if (currentIndex >= imgArr.length) {
            currentIndex = imgArr.length - 1;
        } else if (currentIndex < 0) {
            currentIndex = 0;
        }
        img.src = imgArr[currentIndex];
    }

    // Порядок смены слайдов
    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        let scrollGammaTop = sigma.offsetTop + sigma.getBoundingClientRect().height;
        let scrollGammaCenter = gamma.offsetTop + (gamma.getBoundingClientRect().height / 2);
        let scrollPercent = (scrollGammaCenter - scrollGammaTop) / 100;
        console.log(scrollGammaCenter - windowCenter + " " + (windowCenter - scrollGammaTop));

        if (windowCenter >= scrollGammaTop && windowCenter <= scrollGammaCenter) {
            // for (let i = 0; i < 50; i++) {
            //     if ((windowCenter - scrollGammaTop) > (scrollGammaTop * i) && (windowCenter - scrollGammaTop) <= (scrollPercent * (i + 1) * 2)) {
            //         img.src = imgArr[i];
            //         alert("i = " + i);
            //     }
            // };
            if (windowCenter - scrollGammaTop > 0 && windowCenter - scrollGammaTop <= scrollPercent * 1 * 5) {
                img.src = imgArr[0];
            }  if (windowCenter - scrollGammaTop > (scrollPercent * 1 * 5) && windowCenter - scrollGammaTop <= (scrollPercent * 2 * 5)) {
                img.src = imgArr[1];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 2 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 3 * 5) {
                img.src = imgArr[2];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 3 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 4 * 5) {
                img.src = imgArr[3];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 4 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 5 * 5) {
                img.src = imgArr[4];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 5 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 6 * 5) {
                img.src = imgArr[5];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 6 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 7 * 5) {
                img.src = imgArr[6];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 7 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 8 * 5) {
                img.src = imgArr[7];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 8 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 9 * 5) {
                img.src = imgArr[8];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 9 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 10 * 5) {
                img.src = imgArr[9];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 10 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 11 * 5) {
                img.src = imgArr[10];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 11 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 12 * 5) {
                img.src = imgArr[11];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 12 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 13 * 5) {
                img.src = imgArr[12];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 13 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 14 * 5) {
                img.src = imgArr[13];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 14 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 15 * 5) {
                img.src = imgArr[14];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 15 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 16 * 5) {
                img.src = imgArr[15];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 16 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 17 * 5) {
                img.src = imgArr[16];
            }  if (windowCenter - scrollGammaTop > scrollPercent * 17 * 5 && windowCenter - scrollGammaTop <= scrollPercent * 18 * 5) {
                img.src = imgArr[17];
            }   
            // Другой вариант реализации смены слайдов в анимации
            // Через хост работает нормально, а через локальный файл с багами
            // if (windowCenter > windowCenterPast){
            //     slide(1);
            // } else if (windowCenter < windowCenterPast) {
            //     slide(-1);
            // }
        }
        windowCenterPast = windowCenter;
    };

   window.addEventListener('scroll', () => {
        scrollAnimation();
    });

})