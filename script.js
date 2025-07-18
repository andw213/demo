document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(function(q) {
 q.addEventListener('click', function() {
            document.querySelectorAll('.faq-item').forEach(function(item){
                if(item.contains(q)){        item.classList.toggle('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });
    document.querySelectorAll('.main-hero-faq-question').forEach(function(q){
        q.addEventListener('click', function(){
            document.querySelectorAll('.main-hero-faq-item').forEach(function(item){
                if(item.contains(q)){
                    item.classList.toggle('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });
    const thumbs = document.querySelectorAll('.thumbs img');
    const mainImg = document.querySelector('.main-img');
    thumbs.forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImg.src = this.src;
        });
    });
});
