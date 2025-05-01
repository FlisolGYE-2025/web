(function ($) {
    ('use strict');
    // Detect mobile device (Do not remove!!!)
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;
    if (isMobile) {
        $('body').addClass('is-mobile');
    }
    var tl = gsap.timeline();
    var $pageAppear = $('.appear');
    if ($pageAppear.length) {
        tl.from(
            $pageAppear,
            {
                duration: 2,
                y: 40,
                autoAlpha: 0,
                stagger: 0.3,
                ease: Expo.easeOut,
                clearProps: 'all',
            },
            1.5,
        );
    }
    //PARALLAX ITEM
    $('.parallax-item').wrap('<div class="parallax-item-wrap"></div>');
    const itemWraps = document.querySelectorAll('.parallax-item-wrap');
    const calcValue = (value, inputMax, inputMin, outputMax, outputMin) => {
        const percent = (value - inputMin) / (inputMax - inputMin);
        const output = percent * (outputMax - outputMin) + outputMin;
        return output;
    };
    itemWraps.forEach(function (itemWrap) {
        const item = itemWrap.querySelector('.parallax-item');
        itemWrap.addEventListener('mousemove', function (e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const rect = itemWrap.getBoundingClientRect();
            const offsetX = rect.left + rect.width / 2;
            const offsetY = rect.top + rect.height / 2;
            const deltaX = mouseX - offsetX;
            const deltaY = mouseY - offsetY;
            const percentX = deltaX / (itemWrap.clientWidth / 2);
            const percentY = deltaY / (itemWrap.clientHeight / 2);
            TweenMax.to(item, 0.5, {
                x: calcValue(percentX, 1, -1, 20, -20),
                y: calcValue(percentY, 1, -1, 20, -20),
                rotationX: calcValue(percentY, 1, -1, 5, -5),
                rotationY: calcValue(percentX, 1, -1, -5, 5),
                ease: Power1.easeOut,
            });
        });
        itemWrap.addEventListener('mouseleave', function (e) {
            TweenMax.to(item, 0.5, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                ease: Power1.easeOut,
            });
        });
    });
    //GSAP scrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    let animationRotate = document.querySelectorAll('.animation-rotate');
    animationRotate.forEach((animationRotate) => {
        gsap.to(animationRotate, {
            duration: 2,
            rotation: 360,
            ease: 'linear',
            repeat: -1,
        });
    });
    let scrollRotate = document.querySelectorAll('.scroll-rotate');
    scrollRotate.forEach((scrollRotate) => {
        gsap.to(scrollRotate, {
            scrollTrigger: {
                trigger: scrollRotate,
                scrub: 2,
            },
            rotation: 720,
        });
    });
    let scrollMoveRight = document.querySelectorAll('.scroll-move-right');
    scrollMoveRight.forEach((scrollMoveRight) => {
        gsap.to(scrollMoveRight, {
            x: 500,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveRight,
                start: 'top 30%',
                scrub: 2,
            },
        });
    });
    let scrollMoveLeft = document.querySelectorAll('.scroll-move-left');
    scrollMoveLeft.forEach((scrollMoveLeft) => {
        gsap.to(scrollMoveLeft, {
            x: -500,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveLeft,
                start: 'top 30%',
                scrub: 2,
            },
        });
    });
    let scrollMoveRight2 = document.querySelectorAll('.scroll-move-right2');
    scrollMoveRight2.forEach((scrollMoveRight2) => {
        gsap.to(scrollMoveRight2, {
            x: 800,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveRight2,
                start: 'top 80%',
                scrub: 2,
            },
        });
    });
    let scrollMoveLeft2 = document.querySelectorAll('.scroll-move-left2');
    scrollMoveLeft2.forEach((scrollMoveLeft2) => {
        gsap.to(scrollMoveLeft2, {
            x: -400,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveLeft2,
                start: 'top 100%',
                scrub: 2,
            },
        });
    });
    let scrollMoveUp = document.querySelectorAll('.scroll-move-up');
    scrollMoveUp.forEach((scrollMoveUp) => {
        gsap.to(scrollMoveUp, {
            y: -400,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveUp,
                start: 'top 20%',
                scrub: 2,
            },
        });
    });
    let growUp = document.querySelectorAll('.grow-up');
    growUp.forEach((growUp) => {
        gsap.fromTo(
            growUp,
            {
                autoAlpha: 0.5,
                scale: 0.7,
            },
            {
                autoAlpha: 1,
                duration: 2,
                scale: 1,
                scrollTrigger: {
                    trigger: growUp,
                    start: 'top 90%',
                },
                stagger: 0.2,
            },
        );
    });
    let scrollZoomIn = document.querySelectorAll('.scroll-zoom-in');
    scrollZoomIn.forEach((scrollZoomIn) => {
        gsap.to(scrollZoomIn, {
            scrollTrigger: {
                trigger: scrollZoomIn,
                start: 'top 10%',
                scrub: 2,
            },
            scale: 1.2,
        });
    });
    let scrollZoomIn2 = document.querySelectorAll('.scroll-zoom-in-2');
    scrollZoomIn2.forEach((scrollZoomIn2) => {
        gsap.to(scrollZoomIn2, {
            scrollTrigger: {
                trigger: scrollZoomIn2,
                start: 'top 90%',
                scrub: 2,
            },
            scale: 1,
        });
    });
    let scrollZoomOut = document.querySelectorAll('.scroll-zoom-out');
    scrollZoomOut.forEach((scrollZoomOut) => {
        gsap.to(scrollZoomOut, {
            scrollTrigger: {
                trigger: scrollZoomOut,
                start: 'top 5%',
                scrub: 2,
            },
            scale: 0.5,
        });
    });
    $('.scoll-reduce-border-radius').each(function () {
        $(this).wrap('<div class="scoll-reduce-border-wraper"></div>');
    });
    let reduceBorderRadius = document.querySelectorAll('.scoll-reduce-border-wraper');
    reduceBorderRadius.forEach((reduceBorderRadius) => {
        gsap.to(reduceBorderRadius, {
            scrollTrigger: {
                trigger: reduceBorderRadius,
                start: 'top 98%',
                end: 'top 50%',
                duration: 0,
                scrub: 2,
            },
            borderRadius: '0',
        });
    });
    let revealContainers = document.querySelectorAll('.reveal-img');
    revealContainers.forEach((revealContainers) => {
        let image = revealContainers.querySelector('img');
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: revealContainers,
                toggleActions: 'restart none none reset',
            },
        });
        tl4.set(revealContainers, { autoAlpha: 1 });
        tl4.from(revealContainers, 1.5, {
            xPercent: -100,
            ease: Power2.out,
        });
        tl4.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out,
        });
    });
    //TEXT-UP
    if ($(window).width() > 500) {
        $('.text-up').each(function () {
            $(this).wrap('<div class="reveal-text-cover"><div class="reveal-text"></div></div>');
        });
    }
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach((revealText) => {
        gsap.set(revealText, { y: 120, opacity: 0 });
        gsap.to(revealText, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: revealText,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
            },
        });
    });
    //FADEIN-UP
    const fadeInUp = document.querySelectorAll('.fadeInUp');
    fadeInUp.forEach((fadeInUp) => {
        gsap.fromTo(
            fadeInUp,
            {
                opacity: 0,
                scale: 0.8,
                y: 150,
            },
            {
                opacity: 1,
                duration: 1.5,
                scale: 1,
                y: 0,
            },
        );
    });
    let scrollMoveUp2 = document.querySelectorAll('.scroll-move-up-2');
    scrollMoveUp2.forEach((scrollMoveUp2) => {
        gsap.to(scrollMoveUp2, {
            y: -100,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveUp2,
                start: 'top 70%',
                scrub: 2,
            },
        });
    });
    let scrollMoveUp3 = document.querySelectorAll('.scroll-move-up-3');
    scrollMoveUp3.forEach((scrollMoveUp3) => {
        gsap.to(scrollMoveUp3, {
            y: -80,
            duration: 2,
            scrollTrigger: {
                trigger: scrollMoveUp3,
                start: 'top 70%',
                scrub: 2,
            },
        });
    });
    //FILLTER BUTTON
    let btnTags = document.querySelectorAll('.btn-tags.btn-filter');
    btnTags.forEach((btnTags) => {
        gsap.from(btnTags, {
            duration: 2,
            scale: 0.8,
            opacity: 0,
            delay: 0,
            stagger: 0.2,
            ease: 'elastic',
            force3D: true,
            scrollTrigger: {
                trigger: btnTags,
                start: 'top 80%',
            },
        });
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    // Image parallax
    // ===============
    var imageParallax = document.querySelectorAll('.parallax-image');
    if (imageParallax.length > 0) {
        $('.parallax-image').each(function () {
            // Add wrap <div>.
            $(this).wrap('<div class="parallax-image-wrap"><div class="parallax-image-inner"></div></div>');
            // Add overflow hidden.
            $('.parallax-image-wrap').css({ overflow: 'hidden' });
            var $animImageParallax = $(this);
            var $aipWrap = $animImageParallax.parents('.parallax-image-wrap');
            var $aipInner = $aipWrap.find('.parallax-image-inner');
            let tl_ImageParallax = gsap.timeline({
                scrollTrigger: {
                    trigger: $aipWrap,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    onEnter: () => animImgParallaxRefresh(),
                },
            });
            tl_ImageParallax.to($animImageParallax, { yPercent: 30, ease: 'none' });
            function animImgParallaxRefresh() {
                tl_ImageParallax.scrollTrigger.refresh();
            }
            // Zoom in
            let tl_aipZoomIn = gsap.timeline({
                scrollTrigger: {
                    trigger: $aipWrap,
                    start: 'top 99%',
                },
            });
            tl_aipZoomIn.from($aipInner, { duration: 1.5, autoAlpha: 0, scale: 1.2, ease: Power2.easeOut, clearProps: 'all' });
        });
    }
    // SHOW IMAGE WHEN HOVER DIV
    const imageHoverShow = gsap.utils.toArray('.image-show-item');
    imageHoverShow.forEach((target) => {
        const image = target.querySelector('.project__img');
        const tlImageShow = gsap.timeline();
        tlImageShow
            .fromTo(
                image,
                {
                    autoAlpha: 0,
                    duration: 1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                },
                {
                    autoAlpha: 1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                },
                '>-0.5',
            )
            .pause();
        target.anim = tlImageShow.play().reversed(true);
        target.addEventListener('mouseenter', animateImg);
        target.addEventListener('mouseleave', animateImg);
        target.addEventListener('mousemove', (e) => {
            let xpos = e.offsetX;
            let ypos = e.offsetY;
            const tlImageShow = gsap.timeline();
            tlImageShow.to(image, { x: xpos, y: ypos });
        });
    });
    function animateImg() {
        this.anim.reversed(!this.anim.reversed());
    }
    ScrollTrigger.refresh();
    //growup-image
    var imageZoomIn = $('.img-zoom-in');
    if (imageZoomIn.length > 0) {
        gsap.from(imageZoomIn, 2, {
            scale: 0,
            ease: 'power3.inOut',
            delay: 0,
        });
    }
    //image mark
    var imageMark = $('.image-mark');
    if (imageMark.length > 0) {
        gsap.from(imageMark, 2, {
            width: '100%',
            ease: 'power3.inOut',
            delay: 0.5,
        });
    }
    //image mark
    if (!isMobile) {
        let imageMarkScroll = document.querySelectorAll('.image-mark-scroll');
        imageMarkScroll.forEach((imageMarkScroll) => {
            gsap.to(imageMarkScroll, {
                width: 0,
                ease: 'power3.inOut',
                duration: 1,
                scrollTrigger: {
                    trigger: imageMarkScroll,
                    start: 'top 90%',
                },
            });
        });
    } else {
        $('.image-mark-scroll').remove();
    }
    $('.text-opacity').each(function () {
        var words = $(this).text().split(' ');
        var total = words.length;
        $(this).empty();
        for (index = 0; index < total; index++) {
            $(this).append($('<span /> ').text(words[index] + ' '));
        }
    });
    var TextOpacity = gsap.utils.toArray('.text-opacity');
    TextOpacity.forEach(function (TextOpacity) {
        var spanOpacity = TextOpacity.querySelectorAll('span');
        gsap.to(spanOpacity, {
            scrollTrigger: {
                trigger: TextOpacity,
                start: 'top 85%',
                end: () => `+=${TextOpacity.offsetHeight}`,
                scrub: 1,
            },
            duration: 1,
            opacity: 1,
            stagger: 0.5,
            ease: Linear.easeNone,
        });
    });
    //Horizontal Scroll
    if (!isMobile) {
        let horizontalItem = document.querySelectorAll('.horizontal-item');
        let sectionsRail = document.querySelectorAll('.horizontal-rail');
        sectionsRail.forEach((sectionsRail) => {
            gsap.to(sectionsRail, {
                xPercent: -100 * (horizontalItem.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.horizontal-wrap',
                    pin: '.horizontal-wrap',
                    scrub: true,
                    start: 'top top',
                    end: () => `+=${sectionsRail.offsetWidth}`,
                },
            });
        });
    }
    //END
})(jQuery);
