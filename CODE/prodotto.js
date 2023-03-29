"use strict;"

class Prodotto {
	#p_nome = null;
	#p_codice = null;
	#p_prezzo = null;
	#p_quantita = null;
	constructor(nome, codice, prezzo, quantita) {
		this.nome = nome;
		this.codice = codice;
		this.prezzo = prezzo;
		this.quantita = quantita;
	}
	set nome(name){
		this.#p_nome = name;
	}
	set codice(code){
		this.#p_codice = code;
	}
	set prezzo(price){
		this.#p_prezzo = price;
	}
	set quantita(amount){
		this.#p_quantita = amount;
	}
	get nome(){
		return this.#p_nome;
	}
	get codice(){
		return this.#p_codice;
	}
	get prezzo(){
		return this.#p_prezzo;
	}
	get quantita(){
		return this.#p_quantita;
	}
}

class ProdFresco extends Prodotto {
	#pf_data_scadenza = null;
	constructor(nome, codice, prezzo, quantita, data_scadenza) {
		super(nome, codice, prezzo, quantita);
		this.data_scadenza = data_scadenza;
	}
	set data_scadenza(expiredate) {
		this.#pf_data_scadenza = expiredate;
	}
	get data_scadenza() {
		return this.#pf_data_scadenza;
	}
}

class ProdConfezionato extends Prodotto{
	constructor(nome, codice, prezzo, quantita){
		super(nome, codice, prezzo, quantita);
	}
}

class Lattina extends ProdConfezionato{
	constructor(nome, codice, prezzo, quantita){
		super(nome, codice, prezzo, quantita);
	}
}

class Barattolo extends ProdConfezionato{
	constructor(nome, codice, prezzo, quantita){
		super(nome, codice, prezzo, quantita);
	}
}

class Scatola extends ProdConfezionato{
	constructor(nome, codice, prezzo, quantita){
		super(nome, codice, prezzo, quantita);
	}
}

let prodotto_fresco = new ProdFresco('Mela', 'P0001', 0.5, 100, new Date('2023-04-30'));
let prodotto_confezionato = new Lattina('Birra', 'P0002', 1.5, 50);