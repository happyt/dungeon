// http://dailyjs.com/2012/04/05/node-unix-interfaces/

var readline = require('readline');
var rl;

// traveller object
var me = {
    name:"",
    room:0,        // starting room
    holding:[]
}

var init = require('./map.js');
var dungeon = init.rooms;
console.log('You are in a deep, dark dungeon...');

rl = readline.createInterface(process.stdin, process.stdout, null);

rl.setPrompt('➜');
rl.question('Who\'s there?', function(answer) {
    me.name = answer;
    console.log('Hello', me.name);
})

rl.on('line', function(cmd) {

    if (cmd === 'quit') {
        rl.question('Are you sure? (y/n) ', function(answer) {
            if (answer === 'y') {
                rl.close();
            } else {
                rl.prompt();
            }
        });
    } else {
        // parse the command
        // -- assume single direction letters for now

        // if a move, check the room has that movement
        var found = false;
      //  console.log(dungeon.rooms[me.room].exits[cmd]);
        dungeon.rooms[me.room].exits.forEach(function(entry) {
           // console.log(entry[cmd]);
            if (entry[cmd] !== undefined) {
                // direction is there

                // check the door not locked

                // if not, then move, set me into new room
                me.room = entry[cmd];
                found = true;
                console.log('You\'re in the ' + dungeon.rooms[me.room].desc);
                rl.setPrompt(dungeon.rooms[me.room].desc + '➜');

                // describe the contents
                var seeThese = "You can see ";
                var things = false;
                dungeon.rooms[me.room].objects.forEach(function(entry) {
                //    console.log(entry);
                    things = true;
                    seeThese += 'a ' + entry["name"] + ", ";
                });
                if (things) {
                    console.log(seeThese);
                } else {
                    console.log("Nothing here");
                }
            }
        });
        //
        if (!found) {
            console.log('No door that way!');
        }

    //    console.log('You typed:', cmd);
    //    console.log('Type "quit" to exit');
    }
    rl.prompt('In ' + dungeon.rooms[me.room].desc);
});

rl.on('close', function() {
    console.log('Bye');
    process.exit();
});

rl.prompt();