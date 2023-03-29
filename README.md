# negozio_di_alimentari_gruppo_3
1. **Franca** : capogruppo, programatore
2. Jecha : UML, programmatore
3. Shutev : UML, scrivere il README
4. Sabattini : UML, programmatore

## Testo
Programmare un sistema di gestione per un negozio di alimentari.<br>
Dove le entità principali del sistema sono i prodotti e i clienti.<br>
I prodotti possono essere freschi oppure confezionati.<br>

## Immagine del diagramma UML
![negozio_di_alimentari_gruppo_3](https://github.com/LucianoFrancaa/negozio_di_alimentari_gruppo_3/blob/main/negozio_di_alimentari_gruppo_3_UML.png)

## Codice del diagramma UML

``` python

@startuml

class Negozio{
nome : string
indirizzo : string
prodotti_in_magazzino : Prodotto[]
clienti : Cliente[]
aggiungiCliente(Cliente) : void
aggiungiProdotto(Prodotto) : void
calcola_n_prodotti() : int
calcola_valore_prodotti() : float
}

class Prodotto{
nome : string
codice_univoco : int
prezzo : float
quantita : int
}

class Cliente{
nome : string
cognome : string
codice_univoco : int
saldo_disponibile : float
}

class ProdFresco{
data_scadenza : Date
}

class ProdConfezionato{
confezione : Object
}

class Lattina{
}

class Barattolo{
}

class Scatola{
}

Negozio "1-1"--"0-N" Cliente : viene frequentato
Negozio "1-1"--"0-N" Prodotto : vende
Prodotto <|-- ProdFresco
Prodotto <|-- ProdConfezionato
ProdConfezionato <|-- Barattolo
ProdConfezionato <|-- Scatola
ProdConfezionato <|-- Lattina

@enduml

```
