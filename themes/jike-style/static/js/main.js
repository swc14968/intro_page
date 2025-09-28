// 简单的标签切换功能
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// 点赞功能
document.querySelectorAll('.post-action').forEach(action => {
    action.addEventListener('click', function() {
        if(this.querySelector('.fa-heart')) {
            const icon = this.querySelector('.fa-heart');
            const count = this.querySelector('span');
            
            if(icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff2442';
                count.textContent = parseInt(count.textContent) + 1;
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
                count.textContent = parseInt(count.textContent) - 1;
            }
        }
    });
});