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



