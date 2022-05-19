const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, curr) => 
        acc + curr.split('').reduce((acumulador, current) => {
            if (current === 'A' || current === "a") {
                return acumulador + 1;
            }
            return acumulador;
        }, 0), 0)
  }

  console.log(containsA())