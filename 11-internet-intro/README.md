# Rack & The Internet

### The Internet
* Network Packets
* ARPANET
* `lo`

## Protocols

(Sinatra, Rails)
Rack
HyperText Transfer Protocol - what kinds of questions can one computer ask of another?
TCP (Transmission Control Protocol)
  (UDP)
Internet Protocol (Address)

### Servers
* The web is all just text (strings) - can be html, can be json, can be any kind of string
* Domain names, IP addresses

### Requests and Responses

HTTP Header (meta information about the request, its status)
vs.
HTTP Body (content of the message)

Not the same - <head> in html

Kinds of requests:
Request Methods:
- GET  - send a response (with a header and a body) depending on the url - send back the resource represented by the url
- POST - sending some data - provide something to the resource - should create something

- URL - uniform resource locator
an address of a website - of some resource
http://twitter.com/search


### Clients
* What is a client?

Clients are the browser
(There could be others)
- an app!
- like a weather app on your phone


### IP Addresses
Identifies the computer it's coming from
Physical location
URL - is about the resource

Different types of IP Addresses

IPv4 - 172.217.8.14
IPv6 - 4567:1234:0000

* Everything has one
* What do routers do?

### What does a browser do?
Tools:
* ping - sends pings
* nslookup
* traceroute
* curl

### Request/Response Cycle
* HTTP Methods and Resource
Request Methods:
- GET  - send a response (with a header and a body) depending on the url - send back the resource represented by the url
- POST - sending some data - provide something to the resource - should create something
- PATCH
- DELETE

* CRUD
* Status codes

HTTP Statuses:
2XX - okay
200, sometimes see other 2__ codes

3__ - somewhere else
301 - redirect - hey browser, go look somewhere else!

4XX - client did something wrong
404 - Not found
403 - Forbidden
422 - request not formatted right

5xx - Server did something wrong
500 - unspecified something broke

### Static vs. Dynamic Sites

### Rack
