const studentRegister = require('./src/drivingSchool');

describe('Unit tests for studentRegister function', () => {
  it(`Test if 'Todas as informações são necessárias' is returned if function is called with missing parameters`, () => {
    expect(studentRegister()).toBe('Todas as informações são necessárias');
    expect(studentRegister(18)).toBe('Todas as informações são necessárias');
  });

  it(`Test if 'Ops, infelizmente nesse momento você não pode fazer as aulas' is returned if student is under 18`, () => {
    expect(studentRegister('Nome', 17)).toBe('Ops, infelizmente nesse momento você não pode fazer as aulas');
  });

  it(`Test if 'Nome, seja bem-vindo(a) à AuTrybe!' is returned when student name is not empty and student age is 18 or above`, () => {
    expect(studentRegister('Nome', 18)).toBe('Nome, seja bem-vindo(a) à AuTrybe!');
  });
 
});


