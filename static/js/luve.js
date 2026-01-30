<script>
    var swiper = new Swiper(".myVideoSwiper", {
        slidesPerView: 1, // 每次显示 1 个视频
    spaceBetween: 30, // 视频之间的间距
    centeredSlides: true, // 居中显示
    loop: true, // 开启无限循环

    // 自动播放轮播 (注意：这是指切换 Slide 的自动，不是视频本身的播放)
    // 如果希望用户看完视频再滑走，可以把 autoplay 关掉，或者设得长一点
    autoplay: {
        delay: 5000, // 5秒切换一次
    disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    // 响应式断点：在大屏幕上可以显示更多内容
    breakpoints: {
        768: {
        slidesPerView: 1.5, // 平板/桌面端可以稍微露出旁边一点，提示还有内容
    spaceBetween: 40,
      }
    }
  });
</script>