export interface MethodInfo {
  id: string;
  in?: number[];
  out?: number | number[];
  exec?: { [key: string]: number | "next" };
  thisArg?: number;
  autoSelf?: boolean;
  loop?: boolean;
  special?: 'txt'|'bp';
  c?: number;
  sub?: string;
  firstArgControlFlow?: boolean;
}
export const methods: { [key: string]: MethodInfo } = {
  "add": {
    "id": "add",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "build": {
    "id": "build",
    "special": "bp",
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0,
      1
    ]
  },
  "call": {
    "id": "call"
  },
  "canProduce": {
    "id": "can_produce",
    "exec": {
      "true": 0,
      "false": "next"
    },
    "in": [
      1,
      2
    ]
  },
  "altitude": {
    "id": "check_altitude",
    "thisArg": 0,
    "autoSelf": true,
    "exec": {
      "false": "next",
      "Valley": 1,
      "Plateau": 2
    },
    "in": [
      0
    ]
  },
  "fullBattery": {
    "id": "check_battery",
    "thisArg": 1,
    "autoSelf": true,
    "exec": {
      "true": 0,
      "false": "next"
    },
    "in": [
      1
    ]
  },
  "inBlight": {
    "id": "check_blightness",
    "thisArg": 0,
    "autoSelf": true,
    "exec": {
      "true": 1,
      "false": "next"
    },
    "in": [
      0
    ]
  },
  "fullGridEfficiency": {
    "id": "check_grid_effeciency",
    "thisArg": 1,
    "autoSelf": true,
    "exec": {
      "true": 0,
      "false": "next"
    },
    "in": [
      1
    ]
  },
  "fullHealth": {
    "id": "check_health",
    "thisArg": 1,
    "autoSelf": true,
    "exec": {
      "true": 0,
      "false": "next"
    },
    "in": [
      1
    ]
  },
  "compareNumber": {
    "id": "check_number",
    "exec": {
      "=": "next",
      ">": 0,
      "<": 1
    },
    "in": [
      2,
      3
    ]
  },
  "haveFreeSpace": {
    "id": "checkfreespace",
    "exec": {
      "false": 0,
      "true": "next"
    },
    "in": [
      1
    ]
  },
  "clearResearch": {
    "id": "clear_research",
    "in": [
      0
    ]
  },
  "combineCoordinate": {
    "id": "combine_coordinate",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "combineRegister": {
    "id": "combine_register",
    "in": [
      0,
      1,
      3,
      4
    ],
    "out": 2
  },
  "compareEntity": {
    "id": "compare_entity",
    "exec": {
      "true": "next",
      "false": 0
    },
    "in": [
      1,
      2
    ]
  },
  "compareItem": {
    "id": "compare_item",
    "exec": {
      "true": "next",
      "false": 0
    },
    "in": [
      1,
      2
    ]
  },
  "connect": {
    "id": "connect"
  },
  "count": {
    "id": "count_item",
    "thisArg": 2,
    "autoSelf": true,
    "in": [
      0,
      2
    ],
    "out": 1
  },
  "countReserved": {
    "id": "count_item",
    "thisArg": 2,
    "autoSelf": true,
    "c": 2,
    "in": [
      0,
      2
    ],
    "out": 1
  },
  "countAllSlots": {
    "id": "count_slots",
    "thisArg": 1,
    "autoSelf": true,
    "in": [
      1
    ],
    "out": 0
  },
  "countStorageSlots": {
    "id": "count_slots",
    "thisArg": 1,
    "autoSelf": true,
    "c": 2,
    "in": [
      1
    ],
    "out": 0
  },
  "countGasSlots": {
    "id": "count_slots",
    "thisArg": 1,
    "autoSelf": true,
    "c": 3,
    "in": [
      1
    ],
    "out": 0
  },
  "countVirusSlots": {
    "id": "count_slots",
    "thisArg": 1,
    "autoSelf": true,
    "c": 4,
    "in": [
      1
    ],
    "out": 0
  },
  "countAnomolySlots": {
    "id": "count_slots",
    "thisArg": 1,
    "autoSelf": true,
    "c": 5,
    "in": [
      1
    ],
    "out": 0
  },
  "disableTransportRoute": {
    "id": "disable_transport_route"
  },
  "disconnect": {
    "id": "disconnect"
  },
  "div": {
    "id": "div",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "drop": {
    "id": "dodrop",
    "in": [
      0,
      1
    ]
  },
  "dropSpecificAmount": {
    "id": "dodrop",
    "c": 1,
    "in": [
      0,
      1
    ]
  },
  "domove": {
    "id": "domove",
    "in": [
      0
    ]
  },
  "domoveAsync": {
    "id": "domove_async",
    "in": [
      0
    ]
  },
  "domoveRange": {
    "id": "domove_range",
    "in": [
      0
    ]
  },
  "pickup": {
    "id": "dopickup",
    "in": [
      0,
      1
    ]
  },
  "enableTransportRoute": {
    "id": "enable_transport_route"
  },
  "equip": {
    "id": "equip_component",
    "exec": {
      "false": 0,
      "true": "next"
    },
    "in": [
      1,
      2
    ]
  },
  "exit": {
    "id": "exit"
  },
  "factionItemAmount": {
    "id": "faction_item_amount",
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0
    ],
    "out": 1
  },
  "entitiesInRange": {
    "id": "for_entities_in_range",
    "loop": true,
    "exec": {
      "true": "next",
      "false": 5
    },
    "in": [
      0,
      1,
      2,
      3
    ],
    "out": 4
  },
  "inventoryItems": {
    "id": "for_inventory_item",
    "loop": true,
    "exec": {
      "true": "next",
      "false": 1
    },
    "out": [
      0,
      2,
      3,
      4,
      5
    ]
  },
  "recipieIngredients": {
    "id": "for_recipe_ingredients",
    "loop": true,
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0
    ],
    "out": 1
  },
  "availableResearch": {
    "id": "for_research",
    "loop": true,
    "exec": {
      "true": "next",
      "false": 1
    },
    "out": 0
  },
  "deprecatedSignals": {
    "id": "for_signal",
    "loop": true,
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0
    ],
    "out": 1
  },
  "matchingSignals": {
    "id": "for_signal_match",
    "loop": true,
    "exec": {
      "true": "next",
      "false": 3
    },
    "in": [
      0
    ],
    "out": [
      1,
      2
    ]
  },
  "gatherInformation": {
    "id": "gather_information",
    "in": [
      0
    ]
  },
  "getBattery": {
    "id": "get_battery",
    "out": 0
  },
  "getClosestEntity": {
    "id": "get_closest_entity",
    "in": [
      0,
      1,
      2
    ],
    "out": 3
  },
  "getCompReg": {
    "id": "get_comp_reg",
    "in": [
      0,
      2
    ],
    "out": 1
  },
  "getDistance": {
    "id": "get_distance",
    "thisArg": 2,
    "autoSelf": true,
    "in": [
      0,
      2
    ],
    "out": 1
  },
  "getEntityAt": {
    "id": "get_entity_at",
    "in": [
      0
    ],
    "out": 1
  },
  "getFirstLocked0": {
    "id": "get_first_locked_0",
    "out": 0
  },
  "getGridEffeciency": {
    "id": "get_grid_effeciency",
    "out": 0
  },
  "getHealth": {
    "id": "get_health",
    "in": [
      0
    ],
    "out": [
      1,
      2,
      3
    ]
  },
  "getIngredients": {
    "id": "get_ingredients",
    "in": [
      0
    ],
    "out": [
      1,
      2,
      3
    ]
  },
  "firstInventoryItem": {
    "id": "get_inventory_item",
    "exec": {
      "true": "next",
      "false": 1
    },
    "out": 0
  },
  "getInventoryItem": {
    "id": "get_inventory_item_index",
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0
    ],
    "out": 1
  },
  "location": {
    "id": "get_location",
    "thisArg": 0,
    "in": [
      0
    ],
    "out": 1
  },
  "getMaxStack": {
    "id": "get_max_stack",
    "in": [
      0
    ],
    "out": 1
  },
  "getResearch": {
    "id": "get_research",
    "out": 0
  },
  "resourceType": {
    "id": "get_resource_item",
    "thisArg": 0,
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0
    ],
    "out": 1
  },
  "getResourceNum": {
    "id": "get_resource_num",
    "in": [
      0
    ],
    "out": 1
  },
  "getSelf": {
    "id": "get_self",
    "out": 0
  },
  "getStability": {
    "id": "get_stability",
    "out": 0
  },
  "getType": {
    "id": "get_type",
    "in": [
      0
    ],
    "out": 1
  },
  "getfreespace": {
    "id": "getfreespace",
    "thisArg": 2,
    "autoSelf": true,
    "in": [
      0,
      2
    ],
    "out": 1
  },
  "gethome": {
    "id": "gethome",
    "out": 0
  },
  "trust": {
    "id": "gettrust",
    "thisArg": 3,
    "exec": {
      "false": "next",
      "ally": 0,
      "neutral": 1,
      "enemy": 2
    },
    "in": [
      3
    ]
  },
  "hasItem": {
    "id": "have_item",
    "thisArg": 2,
    "autoSelf": true,
    "exec": {
      "true": 1,
      "false": "next"
    },
    "in": [
      0,
      2
    ]
  },
  "isA": {
    "id": "is_a",
    "thisArg": 1,
    "exec": {
      "true": "next",
      "false": 0
    },
    "in": [
      1,
      2
    ]
  },
  "daytime": {
    "id": "is_daynight",
    "exec": {
      "true": 0,
      "false": 1
    }
  },
  "nighttime": {
    "id": "is_daynight",
    "exec": {
      "false": 0,
      "true": 1
    }
  },
  "isEquipped": {
    "id": "is_equipped",
    "exec": {
      "false": "next",
      "true": 1
    },
    "in": [
      0
    ],
    "out": 2
  },
  "isFixed": {
    "id": "is_fixed",
    "exec": {
      "true": "next",
      "false": 1
    },
    "in": [
      0
    ]
  },
  "isMoving": {
    "id": "is_moving",
    "thisArg": 3,
    "autoSelf": true,
    "exec": {
      "Moving": "next",
      "Not Moving": 0,
      "Path Blocked": 1,
      "No Result": 2
    },
    "in": [
      3
    ]
  },
  "sameGrid": {
    "id": "is_same_grid",
    "thisArg": 0,
    "exec": {
      "true": "next",
      "false": 2
    },
    "in": [
      0,
      1
    ]
  },
  "isWorking": {
    "id": "is_working",
    "exec": {
      "true": "next",
      "false": 0
    },
    "in": [
      1,
      2
    ],
    "out": 3
  },
  "jump": {
    "id": "jump",
    "in": [
      0
    ]
  },
  "label": {
    "id": "label",
    "in": [
      0
    ]
  },
  "land": {
    "id": "land"
  },
  "last": {
    "id": "last"
  },
  "launch": {
    "id": "launch"
  },
  "lock": {
    "id": "lock"
  },
  "lockSlots": {
    "id": "lock_slots",
    "in": [
      0,
      1
    ]
  },
  "makeCarrier": {
    "id": "make_carrier",
    "exec": {
      "true": "next",
      "false": 1
    },
    "in": [
      0
    ]
  },
  "makeMiner": {
    "id": "make_miner",
    "exec": {
      "true": "next",
      "false": 1
    },
    "in": [
      0
    ]
  },
  "makeProducer": {
    "id": "make_producer",
    "exec": {
      "true": "next",
      "false": 4
    },
    "in": [
      0,
      1,
      2,
      3
    ]
  },
  "makeTurretBots": {
    "id": "make_turret_bots",
    "exec": {
      "true": "next",
      "false": 1
    },
    "in": [
      0
    ]
  },
  "match": {
    "id": "match",
    "thisArg": 0,
    "exec": {
      "false": 4,
      "true": "next"
    },
    "in": [
      0,
      1,
      2,
      3
    ]
  },
  "mine": {
    "id": "mine",
    "exec": {
      "ok": "next",
      "unable": 1,
      "full": 2
    },
    "in": [
      0
    ]
  },
  "modulo": {
    "id": "modulo",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "moveEast": {
    "id": "move_east",
    "in": [
      0
    ]
  },
  "moveNorth": {
    "id": "move_north",
    "in": [
      0
    ]
  },
  "moveSouth": {
    "id": "move_south",
    "in": [
      0
    ]
  },
  "moveWest": {
    "id": "move_west",
    "in": [
      0
    ]
  },
  "moveawayRange": {
    "id": "moveaway_range",
    "in": [
      0
    ]
  },
  "mul": {
    "id": "mul",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "nop": {
    "id": "nop"
  },
  "notify": {
    "id": "notify",
    "special": "txt",
    "in": [
      0
    ]
  },
  "orderToSharedStorage": {
    "id": "order_to_shared_storage"
  },
  "orderTransfer": {
    "id": "order_transfer",
    "in": [
      0,
      1
    ]
  },
  "packageAll": {
    "id": "package_all",
    "thisArg": 0,
    "autoSelf": true,
    "in": [
      0
    ]
  },
  "percentValue": {
    "id": "percent_value",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "ping": {
    "id": "ping",
    "in": [
      0
    ]
  },
  "produce": {
    "id": "produce",
    "special": "bp"
  },
  "readRadio": {
    "id": "read_radio",
    "in": [
      0
    ],
    "out": 1
  },
  "signal": {
    "id": "read_signal",
    "thisArg": 0,
    "in": [
      0
    ],
    "out": 1
  },
  "readkey": {
    "id": "readkey",
    "in": [
      0
    ],
    "out": 1
  },
  "remapValue": {
    "id": "remap_value",
    "in": [
      0,
      1,
      2,
      3,
      4
    ],
    "out": 5
  },
  "requestItem": {
    "id": "request_item",
    "in": [
      0
    ]
  },
  "requestWait": {
    "id": "request_wait",
    "in": [
      0
    ]
  },
  "radar": {
    "id": "scan",
    "exec": {
      "true": "next",
      "false": 4
    },
    "in": [
      0,
      1,
      2
    ],
    "out": 3
  },
  "scout": {
    "id": "scout"
  },
  "selectNearest": {
    "id": "select_nearest",
    "exec": {
      "next": "next",
      "A": 0,
      "B": 1
    },
    "in": [
      2,
      3
    ],
    "out": 4,
    "firstArgControlFlow": true
  },
  "nearerThan": {
    "id": "select_nearest",
    "thisArg": 2,
    "exec": {
      "true": 0,
      "false": 1
    },
    "in": [
      2,
      3
    ]
  },
  "separateCoordinate": {
    "id": "separate_coordinate",
    "in": [
      0
    ],
    "out": [
      1,
      2
    ]
  },
  "separateRegister": {
    "id": "separate_register",
    "in": [
      0
    ],
    "out": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  "serveConstruction": {
    "id": "serve_construction",
    "exec": {
      "true": "next",
      "false": 0
    }
  },
  "setCompReg": {
    "id": "set_comp_reg",
    "in": [
      0,
      1,
      2
    ]
  },
  "setNumber": {
    "id": "set_number",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "setReg": {
    "id": "set_reg",
    "in": [
      0
    ],
    "out": 1
  },
  "setResearch": {
    "id": "set_research",
    "in": [
      0
    ]
  },
  "setSignpost": {
    "id": "set_signpost",
    "special": "txt"
  },
  "shutdown": {
    "id": "shutdown"
  },
  "solve": {
    "id": "solve",
    "thisArg": 0,
    "exec": {
      "true": 2,
      "false": "next"
    },
    "in": [
      0
    ],
    "out": 1
  },
  "sortStorage": {
    "id": "sort_storage"
  },
  "stop": {
    "id": "stop"
  },
  "sub": {
    "id": "sub",
    "in": [
      0,
      1
    ],
    "out": 2
  },
  "switch": {
    "id": "switch",
    "exec": {
      "1": 2,
      "2": 4,
      "3": 6,
      "4": 8,
      "5": 10,
      "Default": "next"
    },
    "in": [
      0,
      1,
      3,
      5,
      7,
      9
    ]
  },
  "turnon": {
    "id": "turnon"
  },
  "unequip": {
    "id": "unequip_component",
    "exec": {
      "false": 0,
      "true": "next"
    },
    "in": [
      1,
      2
    ]
  },
  "unitType": {
    "id": "unit_type",
    "thisArg": 0,
    "exec": {
      "No Unit": "next",
      "Building": 1,
      "Bot": 2,
      "Construction": 3
    },
    "in": [
      0
    ]
  },
  "unlock": {
    "id": "unlock"
  },
  "unlockSlots": {
    "id": "unlock_slots",
    "in": [
      0
    ]
  },
  "unpackageAll": {
    "id": "unpackage_all",
    "thisArg": 0,
    "autoSelf": true,
    "in": [
      0
    ]
  },
  "type": {
    "id": "value_type",
    "thisArg": 0,
    "exec": {
      "No Match": "next",
      "Item": 1,
      "Entity": 2,
      "Component": 3,
      "Tech": 4,
      "Value": 5,
      "Coord": 6
    },
    "in": [
      0
    ]
  },
  "wait": {
    "id": "wait",
    "in": [
      0
    ]
  }
};

export const ops: {
  [key: string]: MethodInfo;
} = {};
for (const op of Object.values(methods)) {
  ops[op.id] = op;
}
