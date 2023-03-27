class Negozio {
    constructor() {

    }
}
class Cliente {
    constructor() {
        
    }
}
class Prodotto {
    constructor (nome, codice_univoco, prezzo) {
        this.nome = nome;
        this.codice_univoco = codice_univoco;
        this.prezzo = prezzo;
    }
}
class ProdFresco  extends Prodotto {
    constructor(nome, codice_univoco, prezzo, data_scadenza) {
        super(nome, codice_univoco, prezzo);
        this.data_scadenza = data_scadenza;
    }
}
class ProdConfezionato extends Prodotto {
    constructor(nome, codice_univoco, prezzo, confezione) {
        super(nome, codice_univoco, prezzo);
        this.confezione = confezione;
    }
}
class Confezione {
    constructor() {
        
    }
}
class Lattina extends Confezione {
    constructor() {
        
    }
}
class Barattolo extends Confezione {
    constructor() {
        
    }
}
class Scatola extends Confezione {
    constructor() {
        
    }
}