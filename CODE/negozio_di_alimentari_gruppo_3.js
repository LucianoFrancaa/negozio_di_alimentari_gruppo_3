class Negozio {
    constructor() {

    }
}
class Cliente {
    constructor() {
        
    }
}
class Prodotto {
    #m_nome = null;
    #m_codice_univoco = null;
    #m_prezzo = null;
    constructor (nome, codice_univoco, prezzo) {
        this.nome = nome;
        this.codice_univoco = codice_univoco;
        this.prezzo = prezzo;
    }
    set nome(nome) {
        this.#m_nome = nome;
    }
    get nome() {
        return this.#m_nome;
    }
    set codice_univoco(codice_univoco) {
        this.#m_codice_univoco = codice_univoco;
    }
    get codice_univoco() {
        return this.#m_codice_univoco;
    }
    set prezzo(prezzo) {
        this.#m_prezzo = prezzo;
    }
    get prezzo() {
        return this.#m_prezzo;
    }
}
class ProdFresco  extends Prodotto {
    #m_data_scadenza = null;
    constructor(nome, codice_univoco, prezzo, data_scadenza) {
        super(nome, codice_univoco, prezzo);
        this.data_scadenza = data_scadenza;
    }
    set data_scadenza(data_scadenza) {
        this.#m_data_scadenza = data_scadenza;
    }
    get data_scadenza() {
        return this.#m_data_scadenza;
    }
}
class ProdConfezionato extends Prodotto {
    #m_confezione = null;
    constructor(nome, codice_univoco, prezzo, confezione) {
        super(nome, codice_univoco, prezzo);
        this.confezione = confezione;
    }
    set confezione(confezione) {
        this.#m_confezione = confezione;
    }
    get confezione() {
        return this.#m_confezione;
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