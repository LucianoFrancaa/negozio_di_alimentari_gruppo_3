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

let cliente = new Cliente('Mario', 'Rossi', 'C0001', 100);