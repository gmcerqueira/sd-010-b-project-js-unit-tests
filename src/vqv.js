const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }

  const phrase = `'Oi, meu nome é ${nome}!\n Tenho ${idade} anos, \ntrabalho na Trybe e mando muito em programação!\n'#VQV!`,

  return phrase;
};

module.exports = vqv;
