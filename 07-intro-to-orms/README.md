# Intro to ORMs (Object Relational Mappers)

## Objectives

* Define Object Relational Mapper (ORM)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the sqlite gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models

## CRUD REVIEW

A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
