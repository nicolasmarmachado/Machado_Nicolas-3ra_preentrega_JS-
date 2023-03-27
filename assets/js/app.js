const cards=document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('click', function() {
    const rubros = card.getAttribute('data-rubro');
    console.log(rubros);
    busquedaRubro=rubro.filter((item)=>item.rubro==rubros);
    const stringRubros = JSON.stringify(busquedaRubro)
    localStorage.setItem('rubros', stringRubros)
    console.log(busquedaRubro)
    console.log(typeof busquedaRubro)
    mostrarRubro();
  })
});

function mostrarRubro(){
  const resultadoRubro= localStorage.getItem('rubros')
  const arrayRubro=JSON.parse(resultadoRubro)
  console.log(arrayRubro)
  console.log(typeof arrayRubro)
  const muestraRubro = document.querySelector('#muestraRubro');
  muestraRubro.innerHTML = '';
  for (const negocio of arrayRubro){
    muestraRubro.innerHTML+=`
    <div id="resultado"><p>${negocio.rubro} - ${negocio.negocio}</p></div>  `
  }
}

