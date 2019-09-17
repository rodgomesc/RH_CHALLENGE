export function fieldsValidate(resultData, fields) {
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

export function validateCargoLotacao(resultData, fields) {
  const data = [];
  resultData.forEach(person => {
    if (
      person.cargo.toLowerCase() === fields.cargo.toLowerCase() &&
      person.lotacao.toLowerCase() === fields.lotacao.toLowerCase()
    )
      data.push('Já existe um registro com o mesmo cargo nessa lotacão');
  });
  return data;
}
