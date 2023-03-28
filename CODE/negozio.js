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

let negozio = new Negozio("NomeNegozio", "Via Vivare");

negozio.aggiungiProdotto(prodotto_fresco);
negozio.aggiungiProdotto(prodotto_confezionato);
negozio.aggiungiCliente(cliente);

console.log("Tot prodotti : " + negozio.calcolaTotaleProdotti());
console.log("Tot valore prodotti : " + negozio.calcolaValoreProdotti());
console.log(negozio);