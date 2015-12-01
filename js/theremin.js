// Wrap everything in a function to keep your stuff private.
(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("theremin");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    theremin.play = function () {
        var mySynth = flock.synth({
            synthDef: {
                ugen: "flock.ugen.sin",
                freq: {
                    ugen: "flock.ugen.lfNoise",
                    freq: 10,
                    mul: 380,
                    add: 60
                },
                mul: 0.1
            }
        });

        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        environment.start();
    };

}());
