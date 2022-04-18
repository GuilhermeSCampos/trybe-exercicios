function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercicio 1

  function createDays() {
    let daysList = document.querySelector("#days");
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let newDay = document.createElement("li");
        let day = dezDaysList[index];
        newDay.innerHTML = day;
        newDay.classList.add("day")

        if (day === 24 || day === 25 || day === 31) {
            newDay.classList.add("holiday")
        }
        if (day === 4 || day === 11 || day === 18 || day === 25) {
            newDay.classList.add("friday");
        }

        daysList.appendChild(newDay);
    }
  }
  createDays();
  
  //exercicio 2
  function criarBotao(string) {
    let container = document.querySelector(".buttons-container") 
    let botao = document.createElement("button");
    botao.id = "btn-holiday";
    botao.innerHTML = string;
    container.appendChild(botao);
    console.log(botao.id)
  }
  criarBotao("Feriados");