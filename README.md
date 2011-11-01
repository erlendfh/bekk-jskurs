# Last but not least, Mobile First.
Dine første steg mot en mobil fremtid på www

Slides kan du se [her](http://erlendfh.github.com/bekk-jskurs).

# Struktur

## HTML

- oppgave/index.html -- Her putter du din HTML kode

## CSS filer

- oppgave/css/base.css -- Enkelt styling av vanlig HTML elementer. Trenger ikke å redigeres
- oppgave/css/styles.css -- Her putter du din CSS kode 

## Rammeverk

- oppgave/js/frameworks/zepto.js -- Det finnes mange forskjellige rammeverk for mobil javascript utvikling. I dette kurset bruker vi zepto.js. Zepto er et JavaScript-rammeverk for mobile WebKit nettlesere som du finner mer om på http://zeptojs.com/. Denne filen er grei å bruke som en referanse til hvilke metoder som finnes i rammeverket og om du eventuelt ønsker å finne ut hvordan det fungerer
- oppgave/js/frameworks/persistence.js -- Wrapper for å lagre enkle javascript objekter i localstorage

## Din javascript

- oppgave/view/globals.js -- Hjelpe objekter ligger her
- oppgave/view/tasks.js -- Her kan du putte din javascript kode

# Oppgaver

Før du begynner med oppgavene kan det være lurt å se kjapt igjennom http://slides.html5rocks.com/
Det er smart å ha denne siden lett tilgjengelig for å se tips og triks. Prating og samarbeid med folka rundt deg er lurt! LF er vedlagt, men vi har lyst til at du skal tenke sjæl.

## Overordnet oppgave

Vi skal lage en oppgaveliste med HTML, JavaScript og CSS som funker rett i browseren på iPhone og Android. Med HTML5 ble det introdusert en mulighet for å lagre data fra browseren på telefonen. Dette kalles LocalStorage og vi skal bruke dette for å lagre oppgavene. Dermed trenger vi ingen webserver, alt skjer på telefonen.

### LocalStorage

Vi har allerede laget et lite wrapper-API for LocalStorage som dere skal bruke. API'et inneholder funksjoner for å lagre, slette og hente ett eller flere JavaScriptobjekter fra LocalStorage.

var persistence = new reminders.Persistence("tasks");

var objekter = persistence.findAll();

### Tasks

Mesteparten av appen kommer til å ligge i js/view/tasks.js. Her har vi laget et Tasks-objekt som tar inn HTML-listen din, Persistenceobjektet, og HTML-inputfeltet. For å hente HTML-elementer fra siden (DOM'en) kan du bruke Zepto sin $-funksjon slik: $(#id_på_elementet).

#### initializeBindings
Her kan du legge på eventlistener's på f.eks. inputfelter slik at JavaScriptkode blir kjørt når eventet skjer. F.eks. $("#id").live("change", function(event){// Håndter event});

#### addTask(task)
Denne funksjonen tar inn en task (JavaScriptobjekt eks. {text: "Kjøp melk", done: false}), legger den inn i LocalStorage og viser den i oppgavelista på siden. Her kan du være kreativ og legge på en slide-animasjon f.eks.

#### removeTask(taskId)
Denne skal kalles når brukeren vil slette en oppgave. Dette gjøre også vha. LocalStorage

#### taskHTML(task)
Her kan du lage en string med et li-elementet for en spesifikk oppgave. Denne kan du så bruke i render().

#### render
Denne funksjonen har ansvaret for å tegne opp alle oppgaveelementene. Du må dermed hente ut alle oppgavene fra LocalStorage og lage en string med html for alle sammen. Deretter sette denne inn i oppgavelisteelementet i HTML'en.


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
5. Endre i høyremenyen og sett til Public
6. Du er nå klar for å sette i gang med oppgavene.

PS. Om du allerde har en annen webserver installert eller foretrekker en annen så kan du bruke denne.

## Oppgave 3

Åpne url'en Opera har opprettet for deg på en mobil. Typisk http://$$$$.$$$$$.operaunite.com/webserver/content/ (Oppgitt i "Single-click login")

Verifiser at teksten "Hei, jeg skal bli en mobilside når jeg blir stor" står skrevet.

## Oppgave 4

Ved hjelp av html og metatags skal du vise en statisk ToDo-liste på en simulator eller mobilenhet av typen Android eller iPhone. En statisk liste i HTML kan lages ved å bruke ul-tag'en som står for unordered list. Hvert element i lista legges til ved å bruke li-tag'en. En liste kan for eksempel se slik ut:
	
	<ul>
		<li>bil</li>
		<li>båt</li>
		<li>fly</li>
	</ul>
	
Hvis du testet app'en på en mobiltelefon i oppgave 3, la du sikkert merke til app'en ikke var spesielt tilpasset skjermen. Dette kan forbedres gjennom meta-tags.

På http://www.html5rocks.com/en/mobile/mobifying.html#toc-meta kan du lese mer om hvilke meta-tags som er tilgjengelige og hva de brukes til.

## Oppgave 5

Ved hjelp av task.js, persistence.js, zepto.js filene skal du gjøre det mulig for brukere å legge til oppgaver i ToDo-listen

Det er fornuftig å første sette seg inn i js-filene og hva som allerede finnes av funksjonalitet. 

Denne oppgaven dreier seg i hovedsak om å legge til funksjonalitet i task.js ved å lage funksjonalitet for addTask-funksjonen og initializeBindings-funksjonen. 

Det kan være lurt å lage et input felt som gir brukeren mulighet til å skrive inn en oppgave. 

## Oppgave 6

Nå som brukeren kan legge til oppgaver, ønsker vi at brukeren skal kunne se oppgavene som blir lagt til via input-feltet. I denne oppgaven skal man lage funksjonalitet for render-funksjonen og taskHTML-funksjonen. Disse to funksjonene skal bygge opp html av de oppgavene som man har lagret. Denne html'en skal så settes på liste-elementet fra oppgave 4.

## Oppgave 7

En viktig del av utvikling for mobil er å lage applikasjoner som er enkle og brukbare. Animasjoner gjør både applikasjonen mer attraktiv og gir brukeren tilbakemelding om at ting skjer når han trykker.

Vi ønsker at du i denne oppgaven legger til animasjoner når man legger til en ny oppgave i lista via input-feltet.. Zepto.js har en funksjon som heter "anim" kan brukes til dette. Ett eksempel på bruk av denne funksjonen kan være:

$('div').anim({ translate3d: '10px, 20px, 30px'}, 2, 'ease-out 1ms', function() {
	/* hva skal gjøres når animasjonen er ferdig */
});

PS. Ved å se i koden til Zepto.js kan man se at animasjonene gjøres ved hjelp av -webkit-transform. Det vil si at alt som er mulig ved hjelp av denne CSS attributten er også mulig å gjøre i anim funksjonen. På http://24ways.org/2009/going-nuts-with-css-transitions skrives det om hvordan CSS transitions fungerer.  

## Oppgave 8

Det kan være at brukeren skriver feil når han/hun legger til en oppgave og ønsker å slette oppgaven. Lag denne funksjonen ved å bruke task.js, persistence.js, zepto.js. Her skal man bruke events som er tilgjengelig. For eksempel registere om brukeren swiper til høyre eller venstre og da slette oppgaven.

## Oppgave 9

Lag en kul animasjon som gjør at brukeren får følelsen av oppgaven blir borte. Du kan for eksempel kaste den til en av sidene.

## Oppgave 10

Gjør det mulig for brukeren og registere at oppgaven er gjort ved hjelp av en checkbox. Persister dette ved hjelp av persistence.js.

## Fullført?

Å neida! Ta kontakt med en av oss så skal vi gi deg en utfordring eller to!;)

Eksempler på oppgaver kan være: 

1. Støtte for flere felt
2. Et detalj view for hver enkelt oppgave
3. iPad støtte. Gjør den pen på større skjerm
4. Prioritert liste - La brukeren velge rekkefølge på oppgavene
