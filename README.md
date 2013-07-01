PersHo
======

A personal homepage for everybody


Requirements:
--------
 * Installable with a simple git clone
 * Links collection like ethz1.goat.ch - Public
 * Personal Link collection to my other services - Public
 * Quick Notes, twitter-like - Hidden but shareable
 * Todo's - Private
 * Uses YoBooter -> Angularjs + CodeIgniter for Backend
 * Local SQLite to store everything.

Structure of Database:
------------

 * **Links**: Name | Link | Date | Id
 * **Personal**: Name | Link | Date | Id
 * **Notes**: Title | Content | Date | Id
 * **Todo's**: State | Content | Date | Id
