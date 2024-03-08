
interface InstrInfo {
  js?: string;
  c?: number;
  txt?: boolean;
  bp?: boolean;
  conditions?: { [key: string]: boolean | string };
  type: "operator" | "method" | "property" | "function";
  thisArg?: number;
  autoself?: boolean;
  loop?: boolean;
  terminates?: boolean;
  aliases?: Partial<InstrInfo>[];
  inArgs?: number[];
  outArgs?: number[];
  execArgs?: number[];
  optional?: number;
  firstArgControlFlow?: boolean;
}
export const instructions:{[key:string]:InstrInfo} = {
  "add": {
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "build": {
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "execArgs": [
      2
    ],
    "bp": true,
    "optional": 1,
    "conditions": {
      "next": true,
      "Construction Failed": false
    }
  },
  "call": {
    "type": "operator"
  },
  "can_produce": {
    "js": "canProduce",
    "type": "function",
    "inArgs": [
      1,
      2
    ],
    "execArgs": [
      0
    ],
    "optional": 1,
    "conditions": {
      "Can Produce": true,
      "next": false
    }
  },
  "check_altitude": {
    "js": "altitude",
    "type": "property",
    "inArgs": [
      0
    ],
    "execArgs": [
      1,
      2
    ],
    "conditions": {
      "next": false,
      "Valley": "Valley",
      "Plateau": "Plateau"
    },
    "autoself": true,
    "thisArg": 0
  },
  "check_battery": {
    "js": "fullBattery",
    "type": "method",
    "inArgs": [
      1
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "Full": true,
      "next": false
    },
    "autoself": true,
    "thisArg": 1
  },
  "check_blightness": {
    "js": "inBlight",
    "type": "property",
    "inArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "Blight": true,
      "next": false
    },
    "autoself": true,
    "thisArg": 0
  },
  "check_grid_effeciency": {
    "js": "fullGridEfficiency",
    "type": "method",
    "inArgs": [
      1
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "Full": true,
      "next": false
    },
    "autoself": true,
    "thisArg": 1
  },
  "check_health": {
    "js": "fullHealth",
    "type": "method",
    "inArgs": [
      1
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "Full": true,
      "next": false
    },
    "autoself": true,
    "thisArg": 1
  },
  "check_number": {
    "js": "compareNumber",
    "type": "function",
    "inArgs": [
      2,
      3
    ],
    "execArgs": [
      0,
      1
    ],
    "conditions": {
      "next": "=",
      "If Larger": ">",
      "If Smaller": "<"
    }
  },
  "checkfreespace": {
    "js": "haveFreeSpace",
    "type": "function",
    "inArgs": [
      1
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "Can't Fit": false,
      "next": true
    }
  },
  "clear_research": {
    "js": "clearResearch",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "combine_coordinate": {
    "js": "combineCoordinate",
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "combine_register": {
    "js": "combineRegister",
    "type": "function",
    "inArgs": [
      0,
      1,
      3,
      4
    ],
    "outArgs": [
      2
    ],
    "optional": 0
  },
  "compare_entity": {
    "js": "compareEntity",
    "type": "function",
    "inArgs": [
      1,
      2
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "next": true,
      "If Different": false
    }
  },
  "compare_item": {
    "js": "compareItem",
    "type": "function",
    "inArgs": [
      1,
      2
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "next": true,
      "If Different": false
    }
  },
  "connect": {
    "type": "function"
  },
  "count_item": {
    "js": "count",
    "type": "method",
    "inArgs": [
      0,
      2
    ],
    "outArgs": [
      1
    ],
    "aliases": [
      {
        "js": "countReserved",
        "c": 2
      }
    ],
    "autoself": true,
    "thisArg": 2
  },
  "count_slots": {
    "js": "countAllSlots",
    "type": "method",
    "inArgs": [
      1
    ],
    "outArgs": [
      0
    ],
    "aliases": [
      {
        "js": "countStorageSlots",
        "c": 2
      },
      {
        "js": "countGasSlots",
        "c": 3
      },
      {
        "js": "countVirusSlots",
        "c": 4
      },
      {
        "js": "countAnomolySlots",
        "c": 5
      }
    ],
    "autoself": true,
    "thisArg": 1
  },
  "disable_transport_route": {
    "js": "disableTransportRoute",
    "type": "function"
  },
  "disconnect": {
    "type": "function"
  },
  "div": {
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "dodrop": {
    "js": "drop",
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "optional": 1,
    "aliases": [
      {
        "js": "dropSpecificAmount",
        "c": 1
      }
    ]
  },
  "domove": {
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "domove_async": {
    "js": "domoveAsync",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "domove_range": {
    "js": "domoveRange",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "dopickup": {
    "js": "pickup",
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "optional": 1
  },
  "enable_transport_route": {
    "js": "enableTransportRoute",
    "type": "function"
  },
  "equip_component": {
    "js": "equip",
    "type": "function",
    "inArgs": [
      1,
      2
    ],
    "execArgs": [
      0
    ],
    "optional": 1,
    "conditions": {
      "No Component": false,
      "next": true
    }
  },
  "exit": {
    "terminates": true,
    "type": "function"
  },
  "faction_item_amount": {
    "js": "factionItemAmount",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "execArgs": [
      2
    ],
    "conditions": {
      "next": true,
      "None": false
    }
  },
  "for_entities_in_range": {
    "js": "entitiesInRange",
    "type": "function",
    "inArgs": [
      0,
      1,
      2,
      3
    ],
    "outArgs": [
      4
    ],
    "execArgs": [
      5
    ],
    "loop": true,
    "conditions": {
      "next": true,
      "Done": false
    }
  },
  "for_inventory_item": {
    "js": "inventoryItems",
    "type": "function",
    "outArgs": [
      0,
      2,
      3,
      4,
      5
    ],
    "execArgs": [
      1
    ],
    "loop": true,
    "conditions": {
      "next": true,
      "Done": false
    }
  },
  "for_recipe_ingredients": {
    "js": "recipieIngredients",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "execArgs": [
      2
    ],
    "loop": true,
    "conditions": {
      "next": true,
      "Done": false
    }
  },
  "for_research": {
    "js": "availableResearch",
    "type": "function",
    "outArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "loop": true,
    "conditions": {
      "next": true,
      "Done": false
    }
  },
  "for_signal": {
    "js": "deprecatedSignals",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "execArgs": [
      2
    ],
    "loop": true,
    "conditions": {
      "next": true,
      "Done": false
    }
  },
  "for_signal_match": {
    "js": "matchingSignals",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1,
      2
    ],
    "execArgs": [
      3
    ],
    "loop": true,
    "conditions": {
      "next": true,
      "Done": false
    }
  },
  "gather_information": {
    "js": "gatherInformation",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "get_battery": {
    "js": "getBattery",
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "get_closest_entity": {
    "js": "getClosestEntity",
    "type": "function",
    "inArgs": [
      0,
      1,
      2
    ],
    "outArgs": [
      3
    ]
  },
  "get_comp_reg": {
    "js": "getCompReg",
    "type": "function",
    "inArgs": [
      0,
      2
    ],
    "outArgs": [
      1
    ],
    "optional": 1
  },
  "get_distance": {
    "js": "getDistance",
    "type": "method",
    "inArgs": [
      0,
      2
    ],
    "outArgs": [
      1
    ],
    "autoself": true,
    "thisArg": 2
  },
  "get_entity_at": {
    "js": "getEntityAt",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "get_first_locked_0": {
    "js": "getFirstLocked0",
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "get_grid_effeciency": {
    "js": "getGridEffeciency",
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "get_health": {
    "js": "getHealth",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1,
      2,
      3
    ]
  },
  "get_ingredients": {
    "js": "getIngredients",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1,
      2,
      3
    ]
  },
  "get_inventory_item": {
    "js": "firstInventoryItem",
    "type": "function",
    "outArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "next": true,
      "No Items": false
    }
  },
  "get_inventory_item_index": {
    "js": "getInventoryItem",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "execArgs": [
      2
    ],
    "conditions": {
      "next": true,
      "No Item": false
    }
  },
  "get_location": {
    "js": "location",
    "type": "property",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "thisArg": 0
  },
  "get_max_stack": {
    "js": "getMaxStack",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "get_research": {
    "js": "getResearch",
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "get_resource_item": {
    "js": "resourceType",
    "type": "property",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "execArgs": [
      2
    ],
    "conditions": {
      "next": true,
      "Not Resource": false
    },
    "thisArg": 0
  },
  "get_resource_num": {
    "js": "getResourceNum",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "get_self": {
    "js": "getSelf",
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "get_stability": {
    "js": "getStability",
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "get_type": {
    "js": "getType",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "getfreespace": {
    "type": "method",
    "inArgs": [
      0,
      2
    ],
    "outArgs": [
      1
    ],
    "autoself": true,
    "thisArg": 2
  },
  "gethome": {
    "type": "function",
    "outArgs": [
      0
    ]
  },
  "gettrust": {
    "js": "trust",
    "type": "property",
    "inArgs": [
      3
    ],
    "execArgs": [
      0,
      1,
      2
    ],
    "conditions": {
      "next": false,
      "Ally": "ally",
      "Neutral": "neutral",
      "Enemy": "enemy"
    },
    "thisArg": 3
  },
  "have_item": {
    "js": "hasItem",
    "type": "method",
    "inArgs": [
      0,
      2
    ],
    "execArgs": [
      1
    ],
    "thisArg": 2,
    "autoself": true,
    "conditions": {
      "Have Item": true,
      "next": false
    }
  },
  "is_a": {
    "js": "isA",
    "type": "method",
    "inArgs": [
      1,
      2
    ],
    "execArgs": [
      0
    ],
    "conditions": {
      "next": true,
      "If Different": false
    },
    "thisArg": 1
  },
  "is_daynight": {
    "js": "daytime",
    "type": "function",
    "execArgs": [
      0,
      1
    ],
    "aliases": [
      {
        "js": "nighttime",
        "conditions": {
          "Day": false,
          "Night": true
        }
      }
    ],
    "conditions": {
      "Day": true,
      "Night": false
    }
  },
  "is_equipped": {
    "js": "isEquipped",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      2
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "next": false,
      "Component Equipped": true
    }
  },
  "is_fixed": {
    "js": "isFixed",
    "type": "function",
    "inArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "next": true,
      "Is Fixed": false
    }
  },
  "is_moving": {
    "js": "isMoving",
    "type": "property",
    "inArgs": [
      3
    ],
    "execArgs": [
      0,
      1,
      2
    ],
    "autoself": true,
    "thisArg": 3,
    "conditions": {
      "next": "Moving",
      "Not Moving": "Not Moving",
      "Path Blocked": "Path Blocked",
      "No Result": "No Result"
    }
  },
  "is_same_grid": {
    "js": "sameGrid",
    "type": "method",
    "inArgs": [
      0,
      1
    ],
    "execArgs": [
      2
    ],
    "conditions": {
      "next": true,
      "Different": false
    },
    "thisArg": 0
  },
  "is_working": {
    "js": "isWorking",
    "type": "function",
    "inArgs": [
      1,
      2
    ],
    "outArgs": [
      3
    ],
    "execArgs": [
      0
    ],
    "optional": 1,
    "conditions": {
      "next": true,
      "Is Not Working": false
    }
  },
  "jump": {
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "label": {
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "land": {
    "type": "function"
  },
  "last": {
    "terminates": true,
    "type": "operator"
  },
  "launch": {
    "type": "function"
  },
  "lock": {
    "type": "function"
  },
  "lock_slots": {
    "js": "lockSlots",
    "type": "function",
    "inArgs": [
      0,
      1
    ]
  },
  "make_carrier": {
    "js": "makeCarrier",
    "type": "function",
    "inArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "next": true,
      "If Working": false
    }
  },
  "make_miner": {
    "js": "makeMiner",
    "type": "function",
    "inArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "next": true,
      "If Working": false
    }
  },
  "make_producer": {
    "js": "makeProducer",
    "type": "function",
    "inArgs": [
      0,
      1,
      2,
      3
    ],
    "execArgs": [
      4
    ],
    "conditions": {
      "next": true,
      "If Working": false
    }
  },
  "make_turret_bots": {
    "js": "makeTurretBots",
    "type": "function",
    "inArgs": [
      0
    ],
    "execArgs": [
      1
    ],
    "conditions": {
      "next": true,
      "If Working": false
    }
  },
  "match": {
    "type": "method",
    "inArgs": [
      0,
      1,
      2,
      3
    ],
    "execArgs": [
      4
    ],
    "conditions": {
      "Failed": false,
      "next": true
    },
    "thisArg": 0
  },
  "mine": {
    "type": "function",
    "inArgs": [
      0
    ],
    "execArgs": [
      1,
      2
    ],
    "conditions": {
      "next": "ok",
      "Cannot Mine": "unable",
      "Full": "full"
    }
  },
  "modulo": {
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "move_east": {
    "js": "moveEast",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "move_north": {
    "js": "moveNorth",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "move_south": {
    "js": "moveSouth",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "move_west": {
    "js": "moveWest",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "moveaway_range": {
    "js": "moveawayRange",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "mul": {
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "nop": {
    "type": "function"
  },
  "notify": {
    "type": "function",
    "inArgs": [
      0
    ],
    "aliases": [
      {
        "txt": true,
        "inArgs": []
      },
      {
        "txt": true
      }
    ]
  },
  "order_to_shared_storage": {
    "js": "orderToSharedStorage",
    "type": "function"
  },
  "order_transfer": {
    "js": "orderTransfer",
    "type": "function",
    "inArgs": [
      0,
      1
    ]
  },
  "package_all": {
    "js": "packageAll",
    "type": "function",
    "inArgs": [
      0
    ],
    "autoself": true,
    "thisArg": 0
  },
  "percent_value": {
    "js": "percentValue",
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "ping": {
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "produce": {
    "type": "function",
    "bp": true
  },
  "read_radio": {
    "js": "readRadio",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "read_signal": {
    "js": "signal",
    "type": "property",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "thisArg": 0
  },
  "readkey": {
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "remap_value": {
    "js": "remapValue",
    "type": "function",
    "inArgs": [
      0,
      1,
      2,
      3,
      4
    ],
    "outArgs": [
      5
    ]
  },
  "request_item": {
    "js": "requestItem",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "request_wait": {
    "js": "requestWait",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "scan": {
    "js": "radar",
    "type": "function",
    "inArgs": [
      0,
      1,
      2
    ],
    "outArgs": [
      3
    ],
    "execArgs": [
      4
    ],
    "conditions": {
      "next": true,
      "No Result": false
    }
  },
  "scout": {
    "type": "function"
  },
  "select_nearest": {
    "js": "selectNearest",
    "type": "operator",
    "inArgs": [
      2,
      3
    ],
    "outArgs": [
      4
    ],
    "execArgs": [
      0,
      1
    ],
    "aliases": [
      {
        "js": "nearerThan",
        "type": "method",
        "thisArg": 2,
        "conditions": {
          "A": true,
          "B": false
        },
        "outArgs": []
      },
      {
        "js": "selectNearest",
        "type": "function",
        "firstArgControlFlow": true
      }
    ],
    "conditions": {
      "next": "next",
      "A": "A",
      "B": "B"
    }
  },
  "separate_coordinate": {
    "js": "separateCoordinate",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1,
      2
    ]
  },
  "separate_register": {
    "js": "separateRegister",
    "type": "function",
    "inArgs": [
      0
    ],
    "outArgs": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  "serve_construction": {
    "js": "serveConstruction",
    "type": "function",
    "execArgs": [
      0
    ],
    "conditions": {
      "next": true,
      "If Working": false
    }
  },
  "set_comp_reg": {
    "js": "setCompReg",
    "type": "function",
    "inArgs": [
      0,
      1,
      2
    ],
    "optional": 2
  },
  "set_number": {
    "js": "setNumber",
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "set_reg": {
    "js": "setReg",
    "type": "operator",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ]
  },
  "set_research": {
    "js": "setResearch",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "set_signpost": {
    "js": "setSignpost",
    "type": "function",
    "txt": true
  },
  "shutdown": {
    "type": "function"
  },
  "solve": {
    "type": "method",
    "inArgs": [
      0
    ],
    "outArgs": [
      1
    ],
    "execArgs": [
      2
    ],
    "conditions": {
      "Failed": true,
      "next": false
    },
    "thisArg": 0
  },
  "sort_storage": {
    "js": "sortStorage",
    "type": "function"
  },
  "stop": {
    "type": "function"
  },
  "sub": {
    "type": "function",
    "inArgs": [
      0,
      1
    ],
    "outArgs": [
      2
    ]
  },
  "switch": {
    "type": "operator",
    "inArgs": [
      0,
      1,
      3,
      5,
      7,
      9
    ],
    "execArgs": [
      2,
      4,
      6,
      8,
      10
    ],
    "conditions": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "next": "Default"
    }
  },
  "turnon": {
    "type": "function"
  },
  "unequip_component": {
    "js": "unequip",
    "type": "function",
    "inArgs": [
      1,
      2
    ],
    "execArgs": [
      0
    ],
    "optional": 1,
    "conditions": {
      "No Component": false,
      "next": true
    }
  },
  "unit_type": {
    "js": "unitType",
    "type": "property",
    "inArgs": [
      0
    ],
    "execArgs": [
      1,
      2,
      3
    ],
    "conditions": {
      "next": "No Unit",
      "Building": "Building",
      "Bot": "Bot",
      "Construction": "Construction"
    },
    "thisArg": 0
  },
  "unlock": {
    "type": "function"
  },
  "unlock_slots": {
    "js": "unlockSlots",
    "type": "function",
    "inArgs": [
      0
    ]
  },
  "unpackage_all": {
    "js": "unpackageAll",
    "type": "function",
    "inArgs": [
      0
    ],
    "autoself": true,
    "thisArg": 0
  },
  "value_type": {
    "js": "type",
    "type": "property",
    "inArgs": [
      0
    ],
    "execArgs": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "conditions": {
      "next": "No Match",
      "Item": "Item",
      "Entity": "Entity",
      "Component": "Component",
      "Tech": "Tech",
      "Value": "Value",
      "Coord": "Coord"
    },
    "thisArg": 0
  },
  "wait": {
    "type": "function",
    "inArgs": [
      0
    ]
  }
};
