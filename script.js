const draggables = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

lists.forEach(list => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        list.appendChild(dragging);
    });
});
