nodetraining
============

Node.js Training 19.3. - 20.3.2014

# Mitschrift zum Training

## Node Version Manager
Falls man mehrere node Versionen parallel betreiben muss, weil man ggf nicht alle Projekte gleichzeitig umstellen kann, kann man z.B. den nvm nutzen.

https://github.com/creationix/nvm

Dieser läuft auf Unix, nicht auf Windows. Alternativ kann man `n` nehmen, der ist selbst in Node geschrieben

https://github.com/visionmedia/n 

Läuft angeblich auch auf Windows.


## Typgesichert prüfen

```
===
!==
``` 

### ECMAScript 6

Entweder 

```
node --harmony app.js
```

so kenn ich das aus dem Buch "Node.js the Right Way", oder in der ersten Zeile im Code

```
‘use strict’;
```

## npm install --save, Hinweise, Best Practise

```
npm install --save mysql
```

Hängt ja die Tilde mit rein.
Fliegt künftig wohl aus npm raus, um exakt auf die aktuelle Version zu binden.

Daher sollte man die *Tilde rausnehmen.*

Tipp: Die package.json dependencies am besten alphabetisch sortieren.


### Private npm Module referenzieren

In package.json

Anstatt einer Versionsnummer kann man ein (privates) GitHub repo angeben.

git+ssh oder ssh+git + die github url + optional den #commitid oder #tag

Dann braucht man noch kein komplett privates npm repository.

600 GByte npmjs.org

? Gibt’s da was wie maven, download nur, was man lokal noch nicht hat?

## Native Apps mit node-webkit

https://github.com/rogerwang/node-webkit


## node.js express in production

```
NODE_ENV=production node app.js
```

-> minified JSON responses

sonst kommt pretty printed JSON zurück


## sublime -> mehrere Stellen editieren

`cmd + d` -> mehrere Cursor

html Anfang und Ende Tag gleichzeitig umbenennen

## node-samples/socketio-nowjs/01 using-nowjs-to-create-a-real-time-chat
https://github.com/goloroden/node-samples.git


## Sinopia - npm mirror

Nach einigen Notizen heute im Training habe ich jetzt nochmal kurz nach einem npm mirror geschaut. Ich bin auf sinopia gestoßen:

https://www.npmjs.org/package/sinopia

Sinopia is a private/caching npm repository server.

It allows you to have a local npm registry with zero configuration. You don't have to install and replicate an entire CouchDB database. Sinopia keeps its own small database and, if a package doesn't exist there, it asks npmjs.org for it keeping only those packages you use.

Das klingt mir nach lokalen "maven repo/artifactory", das nur das von uns verwendete cached.



http://shapeshed.com/using-the-european-npm-mirror/
Using the European npm mirror
If you are located in Europe the European npm mirror is fast and reliable. With a few tweaks you can easily publish to the main registry too.


und falls der europäische NPM Mirror ausfällt….

http://clock.co.uk/tech-blogs/how-to-create-a-private-npmjs-repository




## Französisch

_"Jede neue Sprache ist wie ein offenes Fenster, das einen neuen Ausblick auf die Welt eröffnet und die Lebensauffassung weitet."_ (Frank Harris) 


## node debugging

```
npm install -g node-inspector
```

-> `-g` wird einmal global installiert, man kommt aber nicht von der Anwendung dran. Vermutlich also mit sudo.


```
node-debug app.js
```

Siehe auch: https://github.com/node-inspector/node-inspector

Öffnet den Chrome Browser mit dem Debugger, live editing lässt sich im Chrome auch einschalten, dann kann man im Browser Node Code ändern und speichern.

http://greenido.wordpress.com/2013/08/27/debug-nodejs-like-a-pro/


## Nodemodule zum Schmökern

https://github.com/joyent/node/tree/master/lib

Wie machen die Macher Node Module …
Zum Schmökern


## Node asynchroner Code - function "hell", generatorfunktion, yield, promises

1. Tannenbaumcode - function „hell"

2. benannte Funktionen

aber dann hat man viele einzelne Funktionen, Problem beim Benennen der trivialen Callbacks

3. Promises

kann man für eigenen Code machen, aber der Core und 90% der npm Module arbeiten nicht so, sondern mit callback functions

4. yield:

Vielversprechend, aber noch experimental

```
machine.run(function * {
  while (true) {
    yield h.moveTo(0, 0);
    yield h.moveTo(500, 0);
    yield h.moveTo(500, 500);
  }
}
```


machine fängt callback auf und ruft Generatorfunktion wieder auf.

Ist aktuell experimentell.

Benötigt node 0.11.9 oder höher
Benötigt node —harmony

Asynchroner Code lässt sich wieder „normal“ hinschreiben, mit Schleifen, Exceptions, …


## node tests - mocha

mocha

suite / test /
* diverse assert - node-assertthat, …

describe / it /
* should -> should.js -> ungünstig bei null oder undefined, „Extrawurst“
* expect -> expect.js


— gibt’s derzeit nicht in mocha
given / when /
* then
* 


```
sudo npm install -g mocha

mocha
mocha --ui tdd   (default ist bdd style)
```

Liste der Reporters
```
mocha --reporters

mocha --ui tdd —reporter list
```

für interaktiv auf der cmdline übersichtlich:

```
mocha --ui tdd —reporter spec
```

Standardwerte setzen:

mocha.opts Datei im test Unterverzeichnis

```
--ui tdd
--reporter spec
```

## mocha tests - einzelne auslassen, nur diesen Testfall

```
test(...)

test.only(...)

test.skip(…)
```
-> wird als pending dennoch angezeigt


## JSList, JSHint, ESLint, Grunt
JSLint -> sehr streng
http://www.jslint.com

JSHint -> die freundliche Version.
http://www.jshint.com
-> Version 3 noch nicht fertig, pluggable …

ESLint -> pluggable
http://eslint.org
-> evtl könnte das an Beliebtheit gewinnen, wirkt mächtiger

Grunt - the JavaScript Task Runner
http://gruntjs.com


## Grunt

http://www.heise.de/developer/the-next-big-thing-1790061.html

Golos Blog

http://www.heise.de/developer/artikel/Grunt-lagen-Reloaded-1946253.html

-> Sample Gruntfile.js

gulpjs -> kurzer Hype wegen async + pipe, aber kaum größere Steuerung so einfach (hello world only)


## GulpJS
http://travismaynard.com/writing/getting-started-with-gulp

https://github.com/gulpjs/gulp

http://gulpjs.com

https://www.npmjs.org/package/gulp-nodemon

http://unobfuscated.blogspot.de/2014/01/gulp-vs-grunt-comparing-duelling-nodejs.html

http://www.sitepoint.com/introduction-gulp-js/

https://plus.google.com/+PaulIrish/posts/N5t9ny3R6e2


## node auf Kommandozeile

`node app` -> `./app`
shebang: `#!/usr/bin/env node`

`./app` => `app` 
`package.json` -> `"bin“: „app.js"`

Parameter  
process.argv  
0 = node  
1 = scriptname  
2 = erster Parameter

https://github.com/visionmedia/commander.js/

optimist -> deprecated

https://github.com/substack/minimist

Tastatureingabe

https://github.com/isaacs/read

http://nodejs.org/api/readline.html
ist aber unstable


## node - hilfreiche Tools

https://www.npmjs.org/package/licensing

dep async -> dependencies in Projekten suchen, wo wird z.B. „async“ verwendet


## Node - File System

Standard fs Modul,
http://nodejs.org/api/fs.html

https://github.com/jprichardson/node-fs-extra
* mkdirp -> rekursiv erzeugen
* drop in replacement for fs

https://github.com/isaacs/node-graceful-fs
* drop in replacement for fs


## Node - externe Programme

Standardmodul `process`
* muss nicht required werden

http://nodejs.org/api/process.html
* Status über eigenen Prozess

http://nodejs.org/api/child_process.html
* `process.fork()` für andere JavaScript Programme
* `process.spawn()` für andere Binaries

in kommender Node Version wird es ein `spawnSync()` geben, um auf ein Programm synchron zu warten


## Node - Doku

API Doku: jdsdoc
http://usejsdoc.org
sieht man aber eher selten.

Ansonsten README.md



## Node - memory und monitoring

https://github.com/lloyd/node-memwatch
löst ein leak event aus, das man weiter auswerten kann

https://github.com/bnoordhuis/node-heapdump

http://nodetime.com
mittlerweile kommerziell
-> per Cloud Dienst überwachbare Node Prozesse

New Relic


## Node - deployment

Private Server
-> stressig

Cloud
-> git push Schnittstelle, …

Docker


## Node - in process DB

https://github.com/louischatriot/nedb
* node embedded database
* mongodb compatible

in JavaScript implementiert, nicht os performant wie native



## Node process manager - pm2

Unitech/pm2 - node process manager with load balancer

https://github.com/Unitech/pm2



## Node - Code Review -> Memory footprint

viele `xxx.on('xxx', …)`

-> aber es fehlt der xx.removeListener -> Memory!!!

muss gleiche Instanz sein


```
var foo = function () { … }
dest.on(‚error‘, foo)
dest.removeListener('error', foo)
```

oder 

`dest.removeAllListeners('error')`

oder sogar

`dest.removeAllListeners()` -> trennt alles





bei vielen Connections:
dest.setTimeout(timeout, function {} )
-> es wird pro Connection ein Timer erzeugt

Anzahl von Timern gering halten
-> eher einen Timer starten, der zyklisch alte Verbindungen trennt


## Node - binary stream parser -> packet

http://bigeasy.github.io/node-packet/

http://bigeasy.github.io/packet/

http://nodeweekly.com

LinkedIn Node JS Gruppe


## Node - Code Review - sprechender Code

Prototyp Code noch „zu technisch“.

dropLastByte() -> skipUnnecessaryZeroByte()

eher beschreibende Variablen/Funktionen



stream-parser.js -> Objekt heißt StreamParser
-> identische Namen


* logging = 0 -> false

* listen -> Meldung in Callback rein console.log(‚listening on port …‘)



Golos Style:
require sortieren

1. integrierte module, mit Komma

2. npm module ‚express‘, mit Komma

3. lokale module ‚./worker‘,

4. lokale Variablen


## Node - eventemitter2

https://github.com/asyncly/EventEmitter2



## Node - Code Review -> Trennung

Trennung

LPR Parsing

Control File Parsing

Binary Parsing

-> eher eigene kleine Module erstellen

Streams: setEncoding( utf8 ) wegen Chunk Problematik, dass auch „ganze“ Zeichen ankommen


Wie Streams testen?
-> aufpassen, überall aus Events wieder abhängen
-> pro Test eigene Instanz


## Node - Queues

NSQ von bitly
native mit Node Treiber

http://bitly.github.io/nsq/
https://github.com/bitly/nsq


## Node - WebSockets


*Socket.io*
WebSockets, wenn nicht Flash, wenn nicht AJAX, IFrame, wenn nicht …
Fallbacks (von neu nach alt, kann aber Probleme bei Firewalls sein, die nach WS Request alles dicht machen)
kann kein JSESSIONID Coookie mitschicken, daher nicht geeignet bei LoadBalancern die das benötigen für Sticky Sessions

Socket.io Version 1.0 soll das unterstützen, seit einem Jahr warten alle

*Engine.io 1.0*
Unterstützt WS, Flash, AJAX, …
Fallback fängt anders herum an (von alt nach neu)

*Primus*
neues Projekt, Abstraktionslauer über Socket.io oder Engine.io …
Austausch des Moduls ohne Abhängigkeit zur Anwendung



* SockJS
* WebSockets
* AJAX

WS:
- WebSocket only nach RFC

—
SSE - Server Sent Events


Reconnect

funktioniert nicht im IE


SSE können

```
id: 2
data: …
data: …

id: 3
data: …

event: printDone
id: 4
data: …
data: …
```


## Node - REST Interfaces, Tests


### REST 
*Restify*

https://github.com/mcavage/node-restify

unterstützt DTrace

*Express*
Express 4 kommt: http://expressjs.com/4x/api.html




### Tests

* nock
* npm - network mock
https://github.com/pgte/nock

`disableNetConnect()`
nur explizit das über nock gehende Requests werden erlaubt


*superagent*
https://github.com/visionmedia/superagent


darauf aufbauend

*supertest*
https://github.com/visionmedia/supertest





### Build Tool Chain

*Browserify*
während Entwicklung viele js Dateien wie am Server
Grunt macht per Build Task ein minified js …
http://browserify.org

*Sizzle*
wenn man nur CSS Selektoren braucht, jQuery nutzt die auch




