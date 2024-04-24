Il pacchetto contiene:

common-libs -> libreria node js che espone funzioni di utilità (module fed, webpack config etc)
richiede node ~16.14.2
installazione -> npm i
1 -> build -> npm run exec-local-prod

core-remotes -> contiene 2 componenti utilizzati dal primary tpd-testo-immagine (rich-text, tpd-image)
richiede node ~16.14.2
installazione -> npm i
2 -> build -> npm run exec-local-prod (avvia anche server node per esposizione remotes)

primary-remotes -> contiene il componente tpd-testo-immagine ( richiama rich-text, tpd-image)
richiede node ~16.14.2
installazione -> npm i
3 -> build -> npm run exec-local-prod (avvia anche server node per esposizione remotes)

Eseguire i 3 comandi npm nell'ordine sopra indicato

Aprire index.html nella root per renderizzare tpd-testo-immagine
Manipolare props data-props di tpd-testo-immagine per la modifica dei contenuti

NOTA: Lo stile del componente è privo di alcune classi css, per avere un'idea precisa di quella che dovrebbe essere la resa grafica basta accedere accedere a www.unipolsai.it