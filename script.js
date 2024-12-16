const calendarContainer = document.getElementById('calendar');
const imagesSource =[
  'images/dia1.png'
];

for (let i = 1; i <= 24; i++) {
  // Crear la caja principal (li)
  let box = document.createElement('li');
  box.classList.add('calendar-box');

  // Crear el número del día
  let number = document.createElement('p');
  number.textContent = i; // Usar textContent en lugar de innerHTML para mejor rendimiento si no hay HTML.
  number.classList.add('calendar-number')

  
  // Crear el contenedor para el ícono (img en lugar de i)
  const ribbon = document.createElement('img');
  ribbon.src = 'images/moño.png'; // Agregar la imagen
  ribbon.alt = 'moño'; // Texto alternativo para accesibilidad
  ribbon.classList.add('moño'); // Agregar clase (opcional)

  if (i % 5 === 0) {
    ribbon.src = 'images/verde.png'; // Agregar una clase especial para cada quinto elemento
  }

  //asignar regalo según día
  let gift = document.createElement('img');
  gift.src = imagesSource[0];
  gift.classList.add('regalo')

  let dayText = document.createElement('p');
  dayText.textContent = `Día ${i}`;

  let pop = document.createElement('div');
  pop.classList.add('pop-up');
  pop.appendChild(dayText);
  pop.appendChild(gift);
  
  
  // Agregar evento al botón para abrir el pop-up
  box.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague al documento
    const isActive = pop.classList.contains('active');
    document.querySelectorAll('.pop-up').forEach(popup => popup.classList.remove('active'));
    if (!isActive) {
      pop.classList.add('active');
    }
  });

   // Ocultar el pop-up al hacer clic fuera
  document.addEventListener('click', () => {
    pop.classList.remove('active');
  });


  // Agregar los elementos al contenedor
  box.appendChild(number);
  box.appendChild(ribbon);
  box.appendChild(pop);
  
  // Agregar la caja al calendario
  calendarContainer.appendChild(box);

}
