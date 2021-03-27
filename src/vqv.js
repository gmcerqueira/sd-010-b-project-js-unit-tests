const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }

  const phrase = `'Oi, meu nome é ${nome}!\n' + 'Tenho ${idade} anos,\n' #VQV!`

  return phrase;
};

module.exports = vqv;
