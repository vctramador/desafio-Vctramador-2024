class RecintosZoo {
    constructor() {
      this.recintos = [
        { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: { macacos: 3, leoes: 0, gazelas: 0, hipopotamos: 0, crocodilos: 0 } },
        { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: { macacos: 0, leoes: 0, gazelas: 0, hipopotamos: 0, crocodilos: 0 } },
        { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animais: { macacos: 0, leoes: 0, gazelas: 1, hipopotamos: 0, crocodilos: 0 } },
        { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: { macacos: 0, leoes: 0, gazelas: 0, hipopotamos: 0, crocodilos: 0 } },
        { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: { macacos: 0, leoes: 1, gazelas: 0, hipopotamos: 0, crocodilos: 0 } }
      ];
  
      this.animais = {
        LEAO: { tamanho: 3, bioma: 'savana' },
        LEOPARDO: { tamanho: 2, bioma: 'savana' },
        CROCODILO: { tamanho: 3, bioma: 'rio' },
        MACACO: { tamanho: 1, bioma: ['floresta', 'savana']},
        GAZELA: { tamanho: 2, bioma: 'savana' },
        HIPOPOTAMO: { tamanho: 4, bioma: 'savana e rio' }
      };
    }
  
    analisaRecintos(tipoAnimal, quantidade) {
      if (!this.animais[tipoAnimal]) {
        return { erro: "Animal inválido" };
      }
      if (typeof quantidade !== 'number' || quantidade <= 0) {
        return { erro: "Quantidade inválida" };
      }

  
      const animal = this.animais[tipoAnimal];
      const recintosViaveis = [];
  
      this.recintos.forEach(recinto => {
        if (recinto.bioma.includes(animal.bioma)) {
          const tamanhoNecessario = quantidade * animal.tamanho + (quantidade > 1);
          const tamanhoDisponivel = recinto.tamanhoTotal - (recinto.animais[tipoAnimal.toLowerCase()] * animal.tamanho);
  
          if (tamanhoDisponivel >= tamanhoNecessario) {
            recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${tamanhoDisponivel - tamanhoNecessario} total: ${recinto.tamanhoTotal})`);
          }
        }
      });
  
      if (recintosViaveis.length === 0) {
        return { erro: "Não há recinto viável" };
      }
  
      return { recintosViaveis };
    }
  }
  
  export { RecintosZoo as RecintosZoo };
  
