const { Schema, model } = require("mongoose");

const userset = new Schema({
  userID: { type: String },
  mundo: { type: String, defaut: "nao definido" }, 
  mundostatus: { type: Boolean, defaut: false },
  //------------------------------S T A T U S
  status: {
    vida: { type: String },
    fome: { type: String },
  },
  //------------------------------B L O C O S
  blocos: {
    madeira: { type: Number, default: 0 },
    folhas: { type: Number, default: 0 },
    pedras: { type: Number, default: 0 }, 
     minerios: {
       carvao: { type: Number, default: 0 },
       cobre: {type: Number, default: 0 },
       ferro: { type: Number, default: 0 },
       ouro: { type: Number, default: 0 },
       malaquita: { type: Number, default: 0 },
       titanio: { type: Number, default: 0  },
     },
  },
  //------------------------------C O N Q U I S T A
  conquistas: {

    pontuação: { type: Number, default: 0 },
    cobre: { type: Boolean, default: false },
    ferro: { type: Boolean, default: false },
    picaretaferro: { type: Boolean, default: false },
    atacarkanao: {type: Boolean, default: false },
    atacarbot: {type: Boolean, default: false },
    atacarademir: { type: Boolean, default: false },
    },
  
   //---------------------------------I T E N S
    itens: {
      rocha: { type: Number, default: 0 },
      comida: { type: String },
      graveto: { type: Number, default: 0 },
      tocha: { type: Number, default: 0 }
    },
    //-------------------------P I C A R E T A S
  picaretas: {
    pedraa: { type: Boolean, defaut: false },
    cobre: { type: Boolean, default: false },
    cobredurab: {type: Number, default: 0 },
    ferro: { type: Boolean, default: false },
    ferrodurab: { type: Number, default: 0 },

    titanio: { type: String },
  },
  //------------------------------M O D E R A C A O
  mod: {
    timeout: {
      staff: { type: String, defaut: "Fada da lua"},
      motivo: { type: String, defaut: "Sem motivo"},
      warns: { type: String, defaut: "0"},
      tempo: { type: String, defaut: "0 minutos"},
    },
  },
  //--------------------------B L A C K - L I S T
  blacklist: {
    banido: { type: Boolean, defaut: false },
    motivo: { type: String, defaut: "Não definido" },
    staff: { type: String, defaut: 'sumido#000'},
  },
  //------------------------ M I N I - W O R L D

  registro: {
    uid: { type: String, defaut: "Nao definido"},
    nome: { type: String, defaut: `Nao definido`}
  },

  comando: {
    tempo: { type: Number, defaut: 0},
    mineração: { type: Number, default: 0 },
  },

  folha: {
    Pagina1: {
      texto1: { type: String, default: null },
      texto2: { type: String, default: null },
      texto3: { type: String, default: null },
      texto4: { type: String, default: null },
      texto5: { type: String, default: null }
    },
   Pagina2: {
      texto1: { type: String, default: null },
      texto2: { type: String, default: null },
      texto3: { type: String, default: null },
      texto4: { type: String, default: null },
      texto5: { type: String, default: null }
    }, 
  },
});


module.exports = model("Usuarios", userset);
