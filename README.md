# Carousel Autoplay

Riprendendo il carousel realizzato in passato e con le Timeng Function rendete lo scroll automatico ogni 3 secondi.
Dopo l’ultima slide deve riapparire la prima e così via

#### **BONUS**

Per evitare conflitti con lo scroll manuale, quando il mouse si trova sopra lo slider lo scroll automatico si interrompe per poi ripartire all’uscita del mouse

## Svolgimento

1. inserisco i click per scorrere avanti e indietro in due funzioni
2. imposto di default il setInterval di scrollBottom ogni 3s
3. quando vado in hover sullo slider interrompo il `setInterval scrollBottom` con `clearInterval`, in questo modo posso usare i bottoni per scrollare in autonomia
4. quando non sono più in hover riattivo il `setInterval scrollBottom`
