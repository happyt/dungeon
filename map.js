/*
  Dungeon data
 */
    var rooms = {
        "rooms":[
            {"id":0,
                "exits":[ {"n":1},{"w":5},{"s":7}],
                "desc":"green room",
                "objects":[
                    {"name":"red key","value":3, "pickable":true},
                    {"name":"desk","value":0,"pickable":false}
                ]
            },
            {"id":1,
                "exits":[ {"e":2},{"w":5},{"s":0}],
                "desc":"light blue room",
                "objects":[
                    {"name":"blue key","value":3, "pickable":true},
                    {"name":"parrot","value":0,"pickable":false}
                ]
            },
            {"id":2,
                "exits":[ {"n":1},{"w":7},{"s":4},{"e":3}],
                "desc":"red room",
                "objects":[ ]
            },
            {"id":3,
                "exits":[ {"n":2},{"s":4}],
                "desc":"water room",
                "objects":[ ]
            },
            {"id":4,
                "exits":[ {"n":2},{"w":6},{"e":3}],
                "desc":"garden room",
                "objects":[ ]
            },
            {"id":5,
                "exits":[ {"n":1},{"w":0},{"e":7},{"s":6}],
                "desc":"west room",
                "objects":[ ]
            },
            {"id":6,
                "exits":[ {"n":5},{"e":4}],
                "desc":"cliff room",
                "objects":[ ]
            },
            {"id":7,
                "exits":[ {"n":0},{"w":5},{"e":2}],
                "desc":"tv room",
                "objects":[ ]
            }
    ]
}

module.exports.rooms = rooms;








