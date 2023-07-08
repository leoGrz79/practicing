const checkInfo = (name, age) => {
  if (!name || !age)
    throw new Error('Todas as informações são necessárias');
  if (age < 18)
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
}

const studentRegister = (name, age) => {
  try {
    checkInfo(name, age)
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message
  }
};

module.exports = studentRegister;

// console.log(studentRegister('Leo', 17));