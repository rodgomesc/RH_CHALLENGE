export default function fieldsValidate(resultData, fields) {
  const data = [];
  resultData.forEach(person => {
    if (person.matricula === fields.matricula) {
      data.push('Matricula já cadastrada');
    }
    if (person.celular === fields.celular) {
      data.push('Celular já cadastrado');
    }
    if (person.telefone === fields.telefone) {
      data.push('Telefone já cadastrado');
    }
    if (person.email === fields.email) {
      data.push('Email já cadastrado');
    }
  });

  return data;
}
