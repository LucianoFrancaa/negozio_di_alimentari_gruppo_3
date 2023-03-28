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

class Cliente {
	#c_nome = null;
	#c_cognome = null;
	#c_codice = null;
	#c_saldo = null;
	constructor(nome, cognome, codice, saldo) {
		this.nome = nome;
		this.cognome = cognome;
		this.codice = codice;
		this.saldo = saldo;
	}
	set nome(name){
		this.#c_nome = name;
	}
	set cognome(surname){
		this.#c_cognome = surname;	
	}
	set codice(code){
		this.#c_codice = code;
	}
	set saldo(amount){
		this.#c_saldo = amount;
	}
	get nome(){
		return this.#c_nome;
	}
	get cognome(){
		return this.#c_cognome;	
	}
	get codice(){
		return this.#c_codice;
	}
	get saldo(){
		return this.#c_saldo;
	}

}

class Negozio {
	#n_nome = null;
	#n_indirizzo = null;
	constructor(nome, indirizzo) {
		this.nome = nome;
		this.indirizzo = indirizzo;
		this.prodotti = [];
		this.clienti = [];
	}
	set nome(name){
		this.#n_nome = name;
	}
	set indirizzo(address){
		this.#n_indirizzo = address;
	}
	get nome(){
		return this.#n_nome;
	}
	get indirizzo(){
		return this.#n_indirizzo;
	}
	aggiungiProdotto(product) {
		this.prodotti.push(product);
	}
	aggiungiCliente(customer) {
		this.clienti.push(customer);
	}
	calcolaTotaleProdotti() {
		let totale = 0;
		for (let prodotto of this.prodotti) {
			totale += prodotto.quantita;
		}
		return totale;
	}
	calcolaValoreProdotti() {
		let valore = 0;
		for (let prodotto of this.prodotti) {
			valore += prodotto.prezzo * prodotto.quantita;
		}
		return valore;
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
	#l_confezione = null;
	constructor(nome, codice, prezzo, quantita, confezione){
		super(nome, codice, prezzo, quantita);
		this.confezione = confezione;
	}
	set confezione(packaging) {
		this.#l_confezione = packaging;
	}
	get confezione() {
		return this.#l_confezione;
	}
}

class Barattolo extends ProdConfezionato{
	#b_confezione = null;
	constructor(nome, codice, prezzo, quantita, confezione){
		super(nome, codice, prezzo, quantita);
		this.confezione = confezione;
	}
	set confezione(packaging) {
		this.#b_confezione = packaging;
	}
	get confezione() {
		return this.#b_confezione;
	}
}

class Scatola extends ProdConfezionato{
	#s_confezione = null;
	constructor(nome, codice, prezzo, quantita, confezione){
		super(nome, codice, prezzo, quantita);
		this.confezione = confezione;
	}
	set confezione(packaging) {
		this.#s_confezione = packaging;
	}
	get confezione() {
		return this.#s_confezione;
	}
}


let negozio = new Negozio("NomeNegozio", "Via Vivare");
let prodotto_fresco = new ProdFresco('Mela', 'P0001', 0.5, 100, new Date('2023-04-30'));
let prodotto_confezionato = new Lattina('Birra', 'P0002', 1.5, 50, 'lattina');
let cliente = new Cliente('Mario', 'Rossi', 'C0001', 100);

negozio.aggiungiProdotto(prodotto_fresco);
negozio.aggiungiProdotto(prodotto_confezionato);
negozio.aggiungiCliente(cliente);

console.log("Tot prodotti : " + negozio.calcolaTotaleProdotti());
console.log("Tot valore prodotti : " + negozio.calcolaValoreProdotti());
console.log(negozio);
