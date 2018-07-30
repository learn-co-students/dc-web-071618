# ActiveRecord Associations

Goals:
* Review ActiveRecord
  * Migrations
  * Methods
  * Rake Tasks
* Practice relationships

## Project
CLI application
Should involve activerecord + database
Brainstorm Project ideas
Project plan
Project pitch




## Questions???
Rake - how to group tasks?

Singular and Plural?
ActiveSupport::Inflector

## Rake
migrate
  change the database shape - add a column, change ...

## Domain - Lyft
Driver
Ride

Passenger

## ActiveRecord

ActiveRecord::Base.logger = Logger.new(STDOUT)

## Creating a new model
1. add a migration to create the table
  1a. rake db:create_migration NAME=...
  1b. write the create_table statement in the migration
  1c. rake db:migrate
2. define a class that inherits from ActiveRecord::Base

## Macros
code that writes code
method that defines methods

has_one <-> belongs_to
has_many <-> belongs_to
has_many :through

State has_one Capital
Capital belongs to a State
Capital stores the state_id


define getter and setter methods
attr_accessor
attr_reader
attr_writer
