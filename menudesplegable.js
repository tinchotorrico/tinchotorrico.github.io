// JavaScript para mostrar/ocultar el submenu al hacer hover en el enlace "Comunidad"
const dropdown = document.querySelector('.dropdown');
const submenu = document.querySelector('.submenu');

dropdown.addEventListener('mouseover', () => {
  submenu.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  submenu.style.display = 'none';
});


const dropdowns = document.querySelector('.dropdowns');
const submenus = document.querySelector('.submenus');

dropdowns.addEventListener('mouseover', () => {
  submenus.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  submenus.style.display = 'none';
});

dropdown.forEach((dropdown, index) => {
    const submenu = submenu[index];
    dropdown.addEventListener('mouseover', () => {
        submenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        submenu.style.display = 'none';
    });

    dropdown.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of the link (page navigation)
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});
