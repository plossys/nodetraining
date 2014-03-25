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












