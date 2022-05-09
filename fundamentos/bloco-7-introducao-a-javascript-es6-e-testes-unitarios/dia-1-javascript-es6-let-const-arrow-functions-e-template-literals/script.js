const changex = (coisa) => {
  let string = `Tryber ${coisa} aqui"`;
  return string
}


const skills = ["lol", "valorant", "anime", "jujutsu", "tristeza"];

const concat = (x) => {
  let string = `${x} 
  Minhas cico principais habilidades são:`;

  for (let i = 0; i < skills.length; i += 1) {
    string += ` \n\t${skills[i]}`
  }
  return string;
}

console.log(concat(changex("joze")));
