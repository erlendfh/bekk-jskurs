# Last but not least, Mobile First.
Dine første steg mot en mobil fremtid på www

Slides kan du se [her](http://erlendfh.github.com/bekk-jskurs).
	
# Oppgaver

Før du begynner med oppgavene kan det være lurt å se kjapt igjennom http://slides.html5rocks.com/
Det er smart å ha denne siden lett tilgjengelig for å se tips og triks.

## Overordned oppgave

I hver oppgave bør man bruke tid på å tilpasse applikasjonen ved hjelp av CSS slik at den blir enkel å forstå og bruke på mobil

## Oppgave 1

Last ned [oppgavekoden](https://github.com/erlendfh/bekk-jskurs/zipball/master) (zip)
Pakk den ut i en katalog du selv finner fornuftig.

## Oppgave 2 (Innstallere Opera webserver)

For å vise innholdet av applikasjonen enten lokalt på din datamaskin eller på din mobiltelefonen, så er det kjekt å bruke Opera og applikasjonen Web Server. Via den kan man definere hvilken mappe man vil serve innhold fra, og deretter kan man enten se resultatet lokalt på din datamaskin i en webkit-nettleser av typen Chrome eller Safari eller på din mobiltelefon. 

1. Gå til http://opera.no og installer nettleseren om du ikke allerede har denne på din maskin.
2. Gå til http://unite.opera.com/application/192/ installer applikasjonen Web Server. Du må først lage en konto og registre deg, men det går kjapt unna.
3. Følg oppsett og velg hvilken katalog Web Server skal serve innholdet fra. Velg en katalogen bekk-jskurs/oppgave.
4. Etter at installasjonen er ferdig, starter Web Server opp. Innholdet på din lokale web server blir nå listet opp. På høyre side vises url'en til din applikasjon som du kan browse deg til på din lokale maskin eller på din mobiltelefon. Browseren skal være en webkit-browser som for eksempel Chrome eller Safari. Chrome kan du laste ned fra: http://www.google.com/chrome . Safari kan du laste ned fra: http://www.apple.com/safari/download/
5. Du er nå klar for å sette i gang med oppgavene.

## Oppgave 3

Ved hjelp av html og metatags skal du vise en statisk ToDo-liste på en simulator eller mobilenhet av typen Android eller iPhone

## Oppgave 4

Ved hjelp av task.js, persistence.js, zepto.js filene skal du gjøre det mulig for brukere å legge til oppgaver i ToDo-listen

## Oppgave 5

Nå som brukeren kan legge til oppgaver ønsker vi at brukeren skal kunne se oppgavene som blir lagt til i stedet for den dynamiske listen. Lag derfor en dynamisk liste som blir fyllt med oppgavene som ligger lagret i localstorage ved hjelp av persistence.js

## Oppgave 6

En viktig del av utvikling for mobil er å lage applikasjoner som er enkle og brukbare. Animasjoner gjør både applikasjonen mer attraktiv og gir brukeren tilbakemelding om at ting skjer når han trykker.

Vi ønsker at du i denne oppgaven legger til animasjoner på legg til oppgaver som du lagde i oppgave 3. Zepto.js har en funksjon som heter "anim" kan brukes til dette. Ett eksempel på bruk av denne funksjonen kan være:

$('div').anim({ translate3d: '10px, 20px, 30px'}, 2, 'ease-out 1ms', function() {
	/* hva skal gjøres når animasjonen er ferdig */
});

PS. Ved å se i koden til Zepto.js kan man se at animasjonene gjøres ved hjelp av -webkit-transform. Det vil si at alt som er mulig ved hjelp av denne CSS attributten er også mulig å gjøre i anim funksjonen. På http://24ways.org/2009/going-nuts-with-css-transitions skrives det om hvordan CSS transitions fungerer.  

## Oppgave 7

Det kan være at brukeren skriver feil når han/hun legger til en oppgave og ønsker å slette oppgaven. Lag denne funksjonen ved å bruke task.js, persistence.js, zepto.js. Her skal man bruke events som er tilgjengelig. For eksempel registere om brukeren swiper til høyre eller venstre og da slette oppgaven.

## Oppgave 8

Lag en kul animasjon som gjør at brukeren får følelsen av oppgaven blir borte. Du kan for eksempel kaste den til en av sidene.

## Oppgave 9

Gjør det mulig for brukeren og registere at oppgaven er gjort ved hjelp av en checkbox. Persister dette ved hjelp av persiastence.js.
