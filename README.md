# Practical Design Patterns in JavaScript: A Pluralsight Course
This repo comprises all my practice files unto the course titled "Practical Design Patterns in JavaScript" by Jonathan Mills on  Pluralsight.
This repo is meant to keep track of my learning stages of the mentioned tutorial.


## Creational Pattern:
    Creates "new" instances of objects whenever we want something done.
- Constructor
    * we use to create new instances of objects
    * typically when we want "a few" (ie multipe tasks, objects) of something...
    * prototypal inheritance comes alongside as being an effective tool in object creation process
- Module
    * "Bundle of methods" that creates a bundle or group of like things together.
- Factory
    * creates complex objects
    * help creating automated tasks as like in module loader, task runner libraries
    * cleaning up the base template file(s) with less codes
- Singleton
    * single instance of a bunch of complex object creational operation gone under the hood ahead of time.


## Structural Patterns:
    Concerned with "how" objects are made up and simplify the "relationships" among objects.
    The two-way dealings: 1. Extend functionality 2. Simplify functionality
- Decorator	[ extend ]
    * Used to "add new functionality" to an existing object, without being obtrusive (ie. being optional)
    * More complete inheritance
    * Wraps an object
    * Protects existing object
    * Allows extended functionality

- Facade	[ simplify ]
    * a "wrapper" or facade (as like of the facade of a building)
    * Used to provide a simplified interface to a (potentially) complicated subsystem
    * Facade hides the chaos of the complex back-end subsystems (like api) from us 
    * (...and) provides us a clean and simple interface
    * jQuery in action!.

###
	:: Decorator VS Facade ::
	   - Decorator:    adds and manipulates "functionality" of the original Object (constructor)
	   - Facade:       covering up and creating a better interface for exactly the same (existing) functionality

- Flyweight	[ simplify ]
    * Used to conserve memory by taking portions of an object and sharing that across objects.
    * kind of like when we do the "Object.prototype" to share blueprints of an object rather share replicating that each time.
    * Overall "result" is a smaller memory footprint (heap)... NOT a browser issue really but very effective in mobile devices.
    * Like a "flyweight boxer"- the least weighed boxer (weighing above 49 kg (108 lb) and up to 52 kg (114 lb))... the smallest possible thing that one can get
    * __CAVEAT__: Useful only if you have (really) large number of objects- say, 100-500 objects...


## Behavioral Patterns:
    Concerned with the assignment of responsibilities between (or among?) objects and how objects communicate
     - Deals with the responsibilities of an object
     - Help (multiple) objects to cooperate with each other to achieve the same goal
     - Assigns the heirarchy: setting one object as "object of record" and other objects observe it for any changes
     - Can encapsulate requests: to make sure the requests are being made appropriately and make changes or alter the requests as needed

- Observer
    * Allows a collection of objects to "watch" one other object and be notified of changes
    * Allows for "loosely-coupled" subsystems
    * One object is the "focal point"
    * A group of other objects watch for changes

- Mediator [pub-sub model]
    * Controls communication between objects so that neither object has to be coupled to the others
    * Allows for loosely-coupled systems
    * One object manages all communication
    * Many-to-many relationship

- Command
    * Encapsulates the calling of a method as an object (as its own individual 'thing')
    * Fully decouples the execution from the implementation
    * Allows for much less fragile implementations
    * Support undo operations
    * Supports auditing and logging of operations




