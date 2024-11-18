document.querySelectorAll('.image-container').forEach((container, index) => {
    setTimeout(() => {
        const img = document.createElement('img');
        img.src = `img${index + 1}.png`;
        img.alt = `Image ${index + 1}`;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        container.innerHTML = '';
        container.appendChild(img);
    }, index * 500);
});