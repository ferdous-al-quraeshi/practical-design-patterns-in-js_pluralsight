# practical-design-patterns-in-js_pluralsight
This repo comprises all my practice files unto the course titled "Practical Design Patterns in JavaScript" by Jonathan Mills on  Pluralsight.
This repo is meant to keep track of my learning stages of the mentioned tutorial.


## Creational Pattern:
    > Creates "new" instances of objects whenever we want something done.
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
    The 2-way dealings: 1. Extend functionality 2. Simplify functionality
        - Decorator     [ extend ]
            * Used to "add new functionality" to an existing object, without being obtrusive (ie. being optional)
            * More complete inheritance
            * Wraps an object
            * Protects existing object
            * Allows extended functionality

        - Facade        [ simplify ]
            * a "wrapper" or facade (as like of the facade of a building)
            * Used to provide a simplified interface to a (potentially) complicated subsystem
            * Facade hides the chaos of the complex back-end subsystems (like api) from us 
            * (...and) provides us a clean and simple interface
            * jQuery in action!.

### :: Decorator VS Facade ::
        Decorator:    adds and manipulates "functionality" of the original Object (constructor)
        Facade:       covering up and creating a better interface for exactly the same (existing) functionality

        - Flyweight     [ simplify ]
