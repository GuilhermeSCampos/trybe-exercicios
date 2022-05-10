const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const lessonAssing = (object, key, value) => {
  const turno = key;
  object[turno] = value;
}

lessonAssing(lesson2, 'turno', 'noite');

const listKeys = (object) => {
  console.log(Object.keys(object));
}

const listObject = (object) => {
  console.log(Object.entries(object));
}

const listValues = (object) => {
  console.log(Object.values(object));
}

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});

const stundents = (object) => {
  let number = 0;
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    let key = keys[i];
    number += object[key].numeroEstudantes;
  }
  return number;
}

const getValueByNumber = (obj, keyposition) => {
  let keys = Object.keys(obj);
  return obj[keys[keyposition]];
}

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  if (obj[key] === value) {
    return true;
  } else {
    return false
  }
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

