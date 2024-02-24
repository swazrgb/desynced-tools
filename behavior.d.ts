
interface BaseValue {
  /**
   * Switch based on type of value
   */
  type: "No Match" | "Item" | "Entity" | "Component" | "Tech" | "Value" | "Coord";
  /**
   * Divert program depending on unit type
   */
  unitType: "No Unit" | "Building" | "Bot" | "Construction";
  /**
   * Divert program depending on location of a unit
   */
  altitude?: "Valley" | "Plateau";
  /**
   * Divert program depending on location of a unit
   */
  inBlight: boolean;
  /**
   * Checks the movement state of an entity
   */
  isMoving: "Moving" | "Not Moving" | "Path Blocked" | "No Result";
  /**
   * Gets the resource type from an resource node
   */
  resourceType?: Value;
  /**
   * Gets the trust level of the unit towards you
   */
  trust?: "ally" | "neutral" | "enemy";

  /**
   * Compares if an item of entity is of a specific type
   */
  isA(type: Value): boolean;
  /**
   * Branches based on which unit is closer, optional branches for closer unit
   */
  nearerThan(unit_b: Value): boolean;
  /**
   * Returns how many of the input item can fit in the inventory
   * @param item Item to check can fit
   * @returns Number of a specific item that can fit on a unit
   */
  getfreespace(item: Value | Item): Value;
  /**
   * Check a units health
   */
  fullHealth(): boolean;
  /**
   * Checks the Battery level of a unit
   */
  fullBattery(): boolean;
  /**
   * Checks the Efficiency of the power grid the unit is on
   */
  fullGridEfficiency(): boolean;
  /**
   * Counts the number of the passed item in its inventory
   * @param item Item to count
   * @returns Number of this item in inventory or empty if none exist
   */
  count(item: Value | Item): Value;
  /**
   * Counts the number of the passed item in its inventory
   * @param item Item to count
   * @returns Number of this item in inventory or empty if none exist
   */
  countReserved(item: Value | Item): Value;
  /**
   * Returns the number of slots in this unit of the given type
   * @returns Number of slots of this type
   */
  countAllSlots(): Value;
  /**
   * Returns the number of slots in this unit of the given type
   * @returns Number of slots of this type
   */
  countStorageSlots(): Value;
  /**
   * Returns the number of slots in this unit of the given type
   * @returns Number of slots of this type
   */
  countGasSlots(): Value;
  /**
   * Returns the number of slots in this unit of the given type
   * @returns Number of slots of this type
   */
  countVirusSlots(): Value;
  /**
   * Returns the number of slots in this unit of the given type
   * @returns Number of slots of this type
   */
  countAnomolySlots(): Value;
  /**
   * Checks if you have at least a specified amount of an item
   * @param item Item to count
   */
  hasItem(item: Value | ItemNum): boolean;
  /**
   * Filters the passed entity
   * @param filter1? Filter to check
   * @param filter2? Second Filter
   * @param filter3? Third Filter
   */
  match(filter1?: Value | RadarFilter, filter2?: Value | RadarFilter, filter3?: Value | RadarFilter): boolean;
  /**
   * Returns distance to a unit
   * @param target Target unit
   * @returns Unit and its distance in the numerical part of the value
   */
  getDistance(target: Value): Value;
  /**
   * Checks if two entities are in the same power grid
   * @param entity Second Entity
   */
  sameGrid(entity: Value): boolean;
  /**
   * Attempt to solve explorable with inventory items
   * @returns Missing repair item, scanner component or Unpowered
   */
  solve(): Value | undefined;
}

/**
 * Instruction has been removed, behavior needs to be updated
 */
declare function nop(): void;
/**
 * Stops execution of the behavior
 */
declare function exit(): never;
/**
 * Run as many instructions as possible. Use wait instructions to throttle execution.
 */
declare function unlock(): void;
/**
 * Run one instruction at a time
 */
declare function lock(): void;
/**
 * Labels can be jumped to from anywhere in a behavior
 * @param label Label identifier
 */
declare function label(label: Value): void;
/**
 * Jumps execution to label with the same label id
 * @param label Label identifier
 */
declare function jump(label: Value): void;
/**
 * Pauses execution of the behavior until 1 or more ticks later
 * @param time Number of ticks to wait
 */
declare function wait(time: Value | number): void;
/**
 * Compares Item or Unit type
 */
declare function compareItem(value_1: Value, value_2: Value): boolean;
/**
 * Compares Entities
 */
declare function compareEntity(entity_1: Value, entity_2: Value): boolean;
/**
 * Gets the type from an item or entity
 */
declare function getType(item_entity: Value): Value;
/**
 * Gets the first item where the locked slot exists but there is no item in it
 * @returns The first locked item id with no item
 */
declare function getFirstLocked0(): Value;
/**
 * Branches based on which unit is closer, optional branches for closer unit
 * @returns Closest unit
 */
declare function selectNearest(unit_a: Value, unit_b: Value): ["next" | "A" | "B", Value];
/**
 * Performs code for all entities in visibility range of the unit
 * @param range Range (up to units visibility range)
 * @param filter1? Filter to check
 * @param filter2? Second Filter
 * @param filter3? Third Filter
 * @returns Current Entity
 */
declare function entitiesInRange(range: Value | number, filter1?: Value | RadarFilter, filter2?: Value | RadarFilter, filter3?: Value | RadarFilter): IterableIterator<Value>;
/**
 * Performs code for all researchable tech
 * @returns Researchable Tech
 */
declare function availableResearch(): IterableIterator<Value>;
/**
 * Returns the first active research tech
 * @returns First active research
 */
declare function getResearch(): Value;
/**
 * Returns the first active research tech
 * @param tech First active research
 */
declare function setResearch(tech: Value): void;
/**
 * Clears a research from queue, or entire queue if no tech passed
 * @param tech Tech to remove from research queue
 */
declare function clearResearch(tech: Value): void;
/**
 * Divert program depending on number of Value and Compare
 * @param value The value to check with
 * @param compare The number to check against
 */
declare function compareNumber(value: Value | number, compare: Value | number): "=" | ">" | "<";
/**
 * Writes a value into a component register
 * @param component_index Component and register number to set
 * @param group_index? Component group index if multiple are equipped
 */
declare function setCompReg(value: Value, component_index: Value | CompNum, group_index?: Value | number): void;
/**
 * Reads a value from a component register
 * @param component_index Component and register number to set
 * @param group_index? Component group index if multiple are equipped
 */
declare function getCompReg(component_index: Value | CompNum, group_index?: Value | number): Value;
/**
 * Checks whether a particular component is currently working
 * @param component_index Component to get
 * @param group_index? Component group index if multiple are equipped
 * @returns Returns the component ID currently working
 */
declare function isWorking(component_index: Value | CompNum, group_index?: Value | number): Value | undefined;
/**
 * Sets the numerical/coordinate part of a value
 */
declare function setNumber(value: Value, num_coord: Value | CoordNum): Value;
/**
 * Returns a coordinate made from x and y values
 */
declare function combineCoordinate(x: Value, y: Value): Value;
/**
 * Split a coordinate into x and y values
 * @returns [x, y]
 */
declare function separateCoordinate(coordinate: Value | CoordNum): [Value, Value];
/**
 * Combine to make a register from separate parameters
 */
declare function combineRegister(num?: Value, entity?: Value, x?: Value, y?: Value): Value;
/**
 * Split a register into separate parameters
 * @returns [Num, Entity, ID, x, y]
 */
declare function separateRegister(register: Value): [Value, Value, Value, Value, Value];
/**
 * Adds a number or coordinate to another number or coordinate
 */
declare function add(to: Value | CoordNum, num: Value | CoordNum): Value;
/**
 * Subtracts a number or coordinate from another number or coordinate
 */
declare function sub(from: Value | CoordNum, num: Value | CoordNum): Value;
/**
 * Multiplies a number or coordinate from another number or coordinate
 */
declare function mul(to: Value | CoordNum, num: Value | CoordNum): Value;
/**
 * Divides a number or coordinate from another number or coordinate
 */
declare function div(from: Value | CoordNum, num: Value | CoordNum): Value;
/**
 * Get the remainder of a division
 */
declare function modulo(num: Value | CoordNum, by: Value | CoordNum): Value;
/**
 * Checks if free space is available for an item and amount
 * @param item Item and amount to check can fit
 */
declare function haveFreeSpace(item: Value | ItemNum): boolean;
/**
 * Fix all storage slots or a specific item slot index
 * @param item Item type to try fixing to the slots
 * @param slot_index Individual slot to fix
 */
declare function lockSlots(item: Value | ItemNum, slot_index: Value | number): void;
/**
 * Unfix all inventory slots or a specific item slot index
 * @param slot_index Individual slot to unfix
 */
declare function unlockSlots(slot_index: Value | number): void;
/**
 * Gets a units health as a percentage, current and max
 * @param entity Entity to check
 * @returns [Percentage of health remaining, Value of health remaining, Value of maximum health]
 */
declare function getHealth(entity: Value): [Value, Value, Value];
/**
 * Gets the best matching entity at a coordinate
 * @param coordinate Coordinate to get Entity from
 */
declare function getEntityAt(coordinate: Value | CoordNum): Value;
/**
 * Gets the value of the Grid Efficiency as a percent
 */
declare function getGridEffeciency(): Value;
/**
 * Gets the value of the Battery level as a percent
 */
declare function getBattery(): Value;
/**
 * Gets the value of the Unit executing the behavior
 */
declare function getSelf(): Value;
/**
 * Reads the Signal register of another unit
 * @param unit The owned unit to check for
 * @returns Value of units Signal register
 */
declare function readSignal(unit: Value): Value;
/**
 * Reads the Radio signal on a specified band
 * @param band The band to check for
 * @returns Value of the radio signal
 */
declare function readRadio(band: Value): Value;
/**
 * *DEPRECATED* Use Loop Signal (Match) instead
 * @param signal Signal
 * @returns Entity with signal
 */
declare function deprecatedSignals(signal: Value): IterableIterator<Value>;
/**
 * Loops through all units with a signal of similar type
 * @param signal Signal
 * @returns [Entity with signal, Found signal]
 */
declare function matchingSignals(signal: Value): IterableIterator<[Value, Value]>;
/**
 * Returns the amount an item can stack to
 * @param item Item to count
 * @returns Max Stack
 */
declare function getMaxStack(item: Value | ItemNum): Value;
/**
 * Equips a component if it exists
 * @param component Component to equip
 * @param slot_index? Individual slot to equip component from
 */
declare function equip(component: Value | Comp, slot_index?: Value | number): boolean;
/**
 * Unequips a component if it exists
 * @param component Component to unequip
 * @param slot_index? Individual slot to try to unequip component from
 */
declare function unequip(component: Value | Comp, slot_index?: Value | number): boolean;
/**
 * Gets the closest visible entity matching a filter
 * @param filter1? Filter to check
 * @param filter2? Second Filter
 * @param filter3? Third Filter
 * @returns Entity
 */
declare function getClosestEntity(filter1?: Value | RadarFilter, filter2?: Value | RadarFilter, filter3?: Value | RadarFilter): Value;
/**
 * Drop off items at a unit or destination

If a number is set it will drop off an amount to fill the target unit up to that amount
If unset it will try to drop off everything.
 * @param destination Unit or destination to bring items to
 * @param item_amount? Item and amount to drop off
 */
declare function drop(destination: Value, item_amount?: Value | ItemNum): void;
/**
 * Drop off items at a unit or destination

If a number is set it will drop off an amount to fill the target unit up to that amount
If unset it will try to drop off everything.
 * @param destination Unit or destination to bring items to
 * @param item_amount? Item and amount to drop off
 */
declare function dropSpecificAmount(destination: Value, item_amount?: Value | ItemNum): void;
/**
 * Picks up a specific number of items from an entity

Will try to pick up the specified amount, if no amount
is specified it will try to pick up everything.
 * @param source Unit to take items from
 * @param item_amount? Item and amount to pick up
 */
declare function pickup(source: Value, item_amount?: Value | ItemNum): void;
/**
 * Requests an item if it doesn't exist in the inventory
 * @param item Item and amount to order
 */
declare function requestItem(item: Value | ItemNum): void;
/**
 * Request Inventory to be sent to nearest shared storage with corresponding locked slots
 */
declare function orderToSharedStorage(): void;
/**
 * Requests an item and waits until it exists in inventory
 * @param item Item and amount to order
 */
declare function requestWait(item: Value | ItemNum): void;
/**
 * Gets the amount of resource
 * @param resource Resource Node to check
 */
declare function getResourceNum(resource: Value): Value;
/**
 * Reads the first item in your inventory
 */
declare function firstInventoryItem(): Value | undefined;
/**
 * Reads the item contained in the specified slot index
 * @param index Slot index
 */
declare function getInventoryItem(index: Value | number): Value | undefined;
/**
 * Loops through Inventory
 * @returns [Item Inventory, Items reserved for outgoing order or recipe, Items available, Space reserved for an incoming order, Remaining space]
 */
declare function inventoryItems(): IterableIterator<[Value, Value, Value, Value, Value]>;
/**
 * Loops through Ingredients
 * @returns Recipe Ingredient
 */
declare function recipieIngredients(recipe: Value | Item): IterableIterator<Value>;
/**
 * Transfers an Item to another Unit
 * @param target Target unit
 * @param item Item and amount to transfer
 */
declare function orderTransfer(target: Value, item: Value | ItemNum): void;
/**
 * Check if a specific item slot index is fixed
 * @param slot_index Individual slot to check
 */
declare function isFixed(slot_index: Value | number): boolean;
/**
 * Check if a specific component has been equipped
 * @param component Component to check
 * @returns Returns how many instances of a component equipped on this Unit
 */
declare function isEquipped(component: Value | Comp): Value | undefined;
/**
 * Shuts down the power of the Unit
 */
declare function shutdown(): void;
/**
 * Turns on the power of the Unit
 */
declare function turnon(): void;
/**
 * Connects Units from Logistics Network
 */
declare function connect(): void;
/**
 * Disconnects Units from Logistics Network
 */
declare function disconnect(): void;
/**
 * Enable Unit to deliver on transport route
 */
declare function enableTransportRoute(): void;
/**
 * Disable Unit to deliver on transport route
 */
declare function disableTransportRoute(): void;
/**
 * Sorts Storage Containers on Unit
 */
declare function sortStorage(): void;
/**
 * Tries to unpack all packaged items
 */
declare function unpackageAll(): void;
/**
 * Tries to pack all packable units into items
 */
declare function packageAll(): void;
/**
 * Stop movement and abort what is currently controlling the entities movement
 */
declare function stop(): void;
/**
 * Gets location of a a seen entity
 * @param entity Entity to get coordinates of
 * @returns Coordinate of entity
 */
declare function getLocation(entity: Value): Value;
/**
 * Moves towards a tile East of the current location at the specified distance
 * @param number Number of tiles to move East
 */
declare function moveEast(number: Value | number): void;
/**
 * Moves towards a tile West of the current location at the specified distance
 * @param number Number of tiles to move West
 */
declare function moveWest(number: Value | number): void;
/**
 * Moves towards a tile North of the current location at the specified distance
 * @param number Number of tiles to move North
 */
declare function moveNorth(number: Value | number): void;
/**
 * Moves towards a tile South of the current location at the specified distance
 * @param number Number of tiles to move South
 */
declare function moveSouth(number: Value | number): void;
/**
 * Move to another unit while continuing the program
 * @param target Unit to move to
 */
declare function domoveAsync(target: Value): void;
/**
 * Moves to another unit or within a range of another unit
 * @param target Unit to move to, the number specifies the range in which to be in
 */
declare function domove(target: Value): void;
/**
 * *DEPRECATED* Use Move Unit
 * @param target Unit to move to, the number specifies the range in which to be in
 */
declare function domoveRange(target: Value): void;
/**
 * Moves out of range of another unit
 * @param target Unit to move away from
 */
declare function moveawayRange(target: Value): void;
/**
 * Moves in a scouting pattern around the factions home location
 */
declare function scout(): void;
/**
 * Scan for the closest unit that matches the filters
 * @param filter_1? First filter
 * @param filter_2? Second filter
 * @param filter_3? Third filter
 */
declare function radar(filter_1?: Value | RadarFilter, filter_2?: Value | RadarFilter, filter_3?: Value | RadarFilter): Value | undefined;
/**
 * Mines a single resource
 * @param resource Resource to Mine
 */
declare function mine(resource: Value | ResourceNum): "ok" | "unable" | "full";
/**
 * Gets the current world stability
 * @returns Stability
 */
declare function getStability(): Value;
/**
 * Gives you the percent that value is of Max Value
 * @param value Value to check
 * @param max_value Max Value to get percentage of
 * @returns Percent
 */
declare function percentValue(value: Value, max_value: Value): Value;
/**
 * Remaps a value between two ranges
 * @param value Value to Remap
 * @param input_low Low value for input
 * @param input_high High value for input
 * @param target_low Low value for target
 * @param target_high High value for target
 * @returns Remapped value
 */
declare function remapValue(value: Value, input_low: Value, input_high: Value, target_low: Value, target_high: Value): Value;
/**
 * Divert program depending time of day
 */
declare function daytime(): boolean;
/**
 * Divert program depending time of day
 */
declare function nighttime(): boolean;
/**
 * Counts the number of the passed item in your logistics network
 * @param item Item to count
 * @returns Number of this item in your faction
 */
declare function factionItemAmount(item: Value | Item): Value | undefined;
/**
 * Attempts to reads the internal key of the unit
 * @param frame Structure to read the key for
 * @returns Number key of structure
 */
declare function readkey(frame: Value): Value;
/**
 * Returns if a unit can produce an item
 * @param item Production Item
 * @param component? Optional Component to check (if Component not equipped)
 */
declare function canProduce(item: Value | Item, component?: Value): boolean;
/**
 * Returns the ingredients required to produce an item
 * @returns [First Ingredient, Second Ingredient, Third Ingredient]
 */
declare function getIngredients(product: Value | Item): [Value, Value, Value];
/**
 * Triggers a faction notification
 * @param notify_value Notification Value
 */
declare function notify(notify_value: Value): void;
/**
 * Triggers a faction notification
 */
declare function notify(text: string): void;
/**
 * Triggers a faction notification
 * @param notify_value Notification Value
 */
declare function notify(text: string, notify_value: Value): void;
/**
 * Gets the factions home unit
 * @returns Factions home unit
 */
declare function gethome(): Value;
/**
 * Plays the Ping effect and notifies other players
 * @param target Target unit
 */
declare function ping(target: Value): void;
/**
 * Places a construction site for a specific structure
 * @param coordinate Target location, or at currently location if not specified
 * @param rotation? Building Rotation (0 to 3) (default 0)
 */
declare function build(coordinate: Value | CoordNum, rotation?: Value | number): boolean;
/**
 * Sets a production component to produce a blueprint
 */
declare function produce(): void;
/**
 * Set the signpost to specific text
 */
declare function setSignpost(text: string): void;
/**
 * Launches a satellite if equipped on an AMAC
 */
declare function launch(): void;
/**
 * Tells a satellite that has been launched to land
 */
declare function land(): void;
/**
 * Collect information for running the auto base controller
 * @param range Range of operation
 */
declare function gatherInformation(range: Value | number): void;
/**
 * Construct carrier bots for delivering orders or to use for other tasks
 * @param carriers Type and count of carriers to make
 */
declare function makeCarrier(carriers: Value | FrameNum): boolean;
/**
 * Construct and equip miner components on available carrier bots
 * @param resource_count Resource type and number of miners to maintain
 */
declare function makeMiner(resource_count: Value | ItemNum): boolean;
/**
 * Produce materials needed in construction sites
 */
declare function serveConstruction(): boolean;
/**
 * Build and maintain dedicated production buildings
 * @param item_count Item type and number of producers to maintain
 * @param component Production component
 * @param building Building type to use as producer
 * @param location Location offset from self
 */
declare function makeProducer(item_count: Value | ItemNum, component: Value | Comp, building: Value | Frame, location: Value | Coord): boolean;
/**
 * Construct and equip turret components on available carrier bots
 * @param number Number of turret bots to maintain
 */
declare function makeTurretBots(number: Value | number): boolean;

declare const self: Value;
declare var goto: Value;
declare var store: Value;
declare var visual: Value;
declare var signal: Value;

interface String extends BaseValue {
  // Required by typescript since String already has a method named match
  match(filter1?: Value | RadarFilter, filter2?: Value | RadarFilter, filter3?: Value | RadarFilter): boolean;
}
interface Number extends BaseValue {}

type Value = Coord | ItemNum | FrameNum | RadarFilter | Color | Extra;
interface Coord extends BaseValue, Array<number> {}
type CoordNum = Coord | number;

type Color =
  | "v_color_red" | "Red"
  | "v_color_green" | "Green"
  | "v_color_blue" | "Blue"
  | "v_color_yellow" | "Yellow"
  | "v_color_cyan" | "Cyan"
  | "v_color_magenta" | "Magenta"
  | "v_color_black" | "Black"
  | "v_color_brown" | "Brown"
  | "v_color_crimson" | "Crimson"
  | "v_color_dark_grey" | "Dark Gray"
  | "v_color_light_green" | "Light Green"
  | "v_color_light_grey" | "Light Gray"
  | "v_color_pink" | "Pink"
  | "v_color_white" | "White"
  | "v_color_pastel" | "Pastel";

type Extra =
  | "v_arrow_up" | "Arrow Up"
  | "v_arrow_down" | "Arrow Down"
  | "v_arrow_left" | "Arrow Left"
  | "v_arrow_right" | "Arrow Right"
  | "v_arrow_upleft" | "Arrow Up Left"
  | "v_arrow_upright" | "Arrow Up Right"
  | "v_arrow_downleft" | "Arrow Down left"
  | "v_arrow_downright" | "Arrow Down Right"
  | "v_transport_route" | "Transport Route"
  | "v_octagon" | "Octagon"
  | "v_pentagon" | "Pentagon"
  | "v_star" | "Star"
  | "v_letter_A" | "A"
  | "v_letter_B" | "B"
  | "v_letter_C" | "C"
  | "v_letter_D" | "D"
  | "v_letter_E" | "E"
  | "v_letter_F" | "F"
  | "v_letter_G" | "G"
  | "v_letter_H" | "H"
  | "v_letter_I" | "I"
  | "v_letter_J" | "J"
  | "v_letter_K" | "K"
  | "v_letter_L" | "L"
  | "v_letter_M" | "M"
  | "v_letter_N" | "N"
  | "v_letter_O" | "O"
  | "v_letter_P" | "P"
  | "v_letter_Q" | "Q"
  | "v_letter_R" | "R"
  | "v_letter_S" | "S"
  | "v_letter_T" | "T"
  | "v_letter_U" | "U"
  | "v_letter_V" | "V"
  | "v_letter_W" | "W"
  | "v_letter_X" | "X"
  | "v_letter_Y" | "Y"
  | "v_letter_Z" | "Z"
  | "v_number_0" | "0"
  | "v_number_1" | "1"
  | "v_number_2" | "2"
  | "v_number_3" | "3"
  | "v_number_4" | "4"
  | "v_number_5" | "5"
  | "v_number_6" | "6"
  | "v_number_7" | "7"
  | "v_number_8" | "8"
  | "v_number_9" | "9"
  | "v_lock_locked" | "Locked"
  | "v_lock_unlocked" | "Unlocked"
  | "v_alert";

type RadarFilter =
  | Resource
  | "v_own_faction" | "Owned"
  | "v_ally_faction" | "Ally"
  | "v_enemy_faction" | "Enemy"
  | "v_world_faction" | "World"
  | "v_bot" | "Unit"
  | "v_building" | "Building"
  | "v_is_foundation"
  | "v_construction"
  | "v_droppeditem"
  | "v_resource" | "Resource"
  | "v_mineable" | "Mineable"
  | "v_anomaly"
  | "v_valley" | "Valley"
  | "v_plateau" | "Plateau"
  | "v_not_blight" | "Not Blight"
  | "v_blight" | "Blight"
  | "v_alien_faction" | "Alien"
  | "v_human_faction" | "Human"
  | "v_robot_faction" | "Robot"
  | "v_bug_faction" | "Bug"
  | "v_solved" | "Solved"
  | "v_unsolved" | "Unsolved"
  | "v_can_loot" | "Can Loot"
  | "v_in_powergrid" | "In Power Grid"
  | "v_mothership"
  | "v_damaged" | "Damaged"
  | "v_infected" | "Infected"
  | "v_broken" | "Broken"
  | "v_unpowered" | "Unpowered"
  | "v_emergency" | "Emergency"
  | "v_powereddown" | "PoweredDown"
  | "v_moving" | "Moving"
  | "v_pathblocked" | "PathBlocked"
  | "v_idle" | "Idle";

type Item =
  | Comp
  | Resource
  | "aluminiumrod" | "Aluminum Rod"
  | "aluminiumsheet" | "Aluminum Sheet"
  | "fused_electrodes" | "Fused Electrodes"
  | "reinforced_plate" | "Reinforced Plate"
  | "optic_cable" | "Optic Cable"
  | "circuit_board" | "Circuit Board"
  | "infected_circuit_board" | "Infected Circuit Board"
  | "metalbar" | "Metal Bar"
  | "metalplate" | "Metal Plate"
  | "foundationplate" | "Foundation Plate"
  | "ldframe" | "Low-Density Frame"
  | "energized_plate" | "Energized Plate"
  | "hdframe" | "High-Density Frame"
  | "beacon_frame" | "Beacon Kit"
  | "refined_crystal" | "Refined Crystal"
  | "crystal_powder" | "Crystal Powder"
  | "obsidian_brick" | "Obsidian Brick"
  | "silicon" | "Silicon"
  | "wire" | "Wire"
  | "cable" | "Cable"
  | "icchip" | "IC Chip"
  | "micropro" | "Microprocessor"
  | "cpu" | "CPU"
  | "steelblock" | "Steel Block"
  | "concreteslab" | "Concretes Lab"
  | "ceramictiles" | "Ceramic Tiles"
  | "polymer" | "Polymer"
  | "robot_datacube" | "Robotics Datacube"
  | "alien_datacube" | "Alien Datacube"
  | "human_datacube" | "Human Datacube"
  | "blight_datacube" | "Blight Datacube"
  | "virus_research_data" | "Virus Datacube"
  | "empty_databank" | "Empty Data Bank"
  | "datacube_matrix" | "Datacube Matrix"
  | "robot_research" | "Robotics Research"
  | "human_research" | "Human Research"
  | "alien_research"
  | "blight_research" | "Blight Research"
  | "virus_research" | "Virus Research"
  | "adv_data" | "Compressed Simulation Data"
  | "human_databank" | "Human Data Bank"
  | "alien_databank" | "Alien Data Bank"
  | "drone_transfer_package" | "Drone Package"
  | "drone_transfer_package2" | "Transfer Drone Package"
  | "drone_miner_package" | "Miner Drone Package"
  | "drone_adv_miner_package" | "Advanced Miner Drone Package"
  | "drone_defense_package1" | "Defense Drone Package"
  | "flyer_package_m" | "Medium Flyer Package"
  | "satellite_package" | "Satellite Package"
  | "blightbar" | "Blight Bar"
  | "blight_plasma" | "Blight Plasma"
  | "microscope" | "Microscope"
  | "transformer" | "Transformer"
  | "smallreactor" | "Small Modular Reactor"
  | "engine" | "Engines"
  | "datakey" | "Data Key"
  | "alien_core" | "Anomaly Core"
  | "bot_ai_core" | "AI Core"
  | "elain_ai_core" | "ELAIN's AI Core"
  | "broken_ai_core" | "Broken AI Core"
  | "anomaly_particle" | "Anomaly Particle"
  | "anomaly_cluster" | "Dense Anomaly Cluster"
  | "resimulator_core" | "Resimulator Core"
  | "power_petal" | "Power Petal"
  | "phase_leaf" | "Phase Leaf"
  | "virus_source_code" | "Virus Source Code"
  | "rainbow_research" | "MultiCube - CURRENTLY NOT OBTAINABLE";

interface ItemNumPair extends BaseValue {
  id: Item,
  num: number
}

type ItemNum = Item | number | ItemNumPair;
type Comp =
  | "c_light" | "Light"
  | "c_light_rgb" | "Light RGB"
  | "c_fabricator" | "Fabricator"
  | "c_assembler" | "Assembler"
  | "c_data_analyzer" | "Data Analyzer"
  | "c_refinery" | "Refinery"
  | "c_robotics_factory" | "Robotics Assembler"
  | "c_power_relay" | "Power Field"
  | "c_portable_relay" | "Portable Power Field"
  | "c_small_relay" | "Small Power Field"
  | "c_large_power_relay" | "Large Power Field"
  | "c_uplink" | "Uplink"
  | "c_repairer" | "Repair Component"
  | "c_repairkit" | "Repair Kit"
  | "c_repairer_aoe" | "AOE Repair Component"
  | "c_selfdisassemble" | "Packager"
  | "c_deployment" | "Deployment"
  | "c_deployer" | "Deployer"
  | "c_deploy_construction" | "Deployment Constructor"
  | "c_construction" | "Constructor"
  | "c_miner" | "Miner"
  | "c_adv_miner" | "Laser Mining Tool"
  | "c_deconstructor" | "Deconstructor"
  | "c_reconstruction" | "Reconstructor"
  | "c_turret" | "Turret"
  | "c_portable_turret" | "Small Turret"
  | "c_adv_portable_turret" | "Small Advanced Turret"
  | "c_portable_turret_red" | "Blight Turret"
  | "c_portable_turret_green" | "Viral Turret"
  | "c_laser_turret" | "Laser Turret"
  | "c_solar_cell" | "Solar Cell"
  | "c_solar_panel" | "Solar Panel"
  | "c_wind_turbine" | "Wind Turbine"
  | "c_wind_turbine_l" | "Large Wind Turbine"
  | "c_power_cell" | "Power Cell"
  | "c_power_core" | "Power Core"
  | "c_capacitor" | "Capacitor"
  | "c_integrated_capacitor" | "Integrated Capacitor"
  | "c_higrade_capacitor" | "Hi-grade Capacitor"
  | "c_medium_capacitor" | "Medium Capacitor"
  | "c_small_battery" | "Small Battery"
  | "c_signal_reader" | "Signal Reader"
  | "c_shared_storage" | "Shared Storage"
  | "c_internal_storage" | "Internal Storage"
  | "c_behavior" | "Behavior Controller"
  | "c_autobase" | "AI Behavior Controller"
  | "c_crane" | "Item Transporter"
  | "c_portablecrane" | "Portable Transporter"
  | "c_internal_crane1"
  | "c_internal_crane2"
  | "c_portable_radar" | "Portable Radar"
  | "c_scout_radar" | "Scout Radar"
  | "c_small_radar" | "Small Radar"
  | "c_radio_storage"
  | "c_radio_transmitter" | "Radio Transmitter"
  | "c_radio_receiver" | "Radio Receiver"
  | "c_crystal_power" | "Crystal Power"
  | "c_power_transmitter" | "Power Transmitter"
  | "c_signpost" | "Sign Post"
  | "c_modulehealth" | "Internal Health Module"
  | "c_modulehealth_s" | "Small Health Module"
  | "c_modulehealth_m" | "Medium Health Module"
  | "c_modulehealth_l" | "Large Health Module"
  | "c_modulevisibility" | "Internal Visibility Module"
  | "c_modulevisibility_s" | "Small Visibility Module"
  | "c_modulevisibility_m" | "Medium Visibility Module"
  | "c_modulevisibility_l" | "Large Visibility Module"
  | "c_moduleefficiency" | "Internal Efficiency Module"
  | "c_moduleefficiency_s" | "Small Efficiency Module"
  | "c_moduleefficiency_m" | "Medium Efficiency Module"
  | "c_moduleefficiency_l" | "Large Efficiency Module"
  | "c_modulespeed" | "Internal Speed Module"
  | "c_modulespeed_s" | "Small Speed Module"
  | "c_modulespeed_m" | "Medium Speed Module"
  | "c_modulespeed_l" | "Large Speed Module"
  | "c_particle_birds"
  | "c_particle_leaves"
  | "c_glitch" | "Glitch"
  | "c_trilobyte_consume" | "Trilobyte Consume"
  | "c_trilobyte_attack" | "Trilobyte Attack"
  | "c_trilobyte_attack1"
  | "c_trilobyte_attack2"
  | "c_trilobyte_attack3"
  | "c_trilobyte_attack4"
  | "c_damageself" | "Damage on Trigger"
  | "c_small_storage" | "Small Storage"
  | "c_shield_generator" | "Portable Shield Generator"
  | "c_destroyself" | "Destroy on Trigger"
  | "c_disappear_empty" | "Glitch Building"
  | "c_ai_bot_behavior" | "AI Bot"
  | "c_phase_plant" | "Phase Plant"
  | "c_damage_plant" | "Damage Plant"
  | "c_damage_plant_internal" | "Damage Planet Internal"
  | "c_bug_homeless" | "Homeless Bug"
  | "c_bug_spawn" | "Bug Hive Spawner"
  | "c_bug_spawner_large"
  | "c_explorable_scannable" | "Intel Scanner"
  | "c_explorable_fix" | "Repair Required"
  | "c_explorable_fix_lvl2" | "Datakey Socket"
  | "c_explorable_autosolve"
  | "c_virus" | "Virus"
  | "c_virus_protection" | "Virus Protection"
  | "c_small_scanner" | "Small Intel Scanner"
  | "c_simulation_interface" | "Simulation Interface"
  | "c_human_factory" | "Human Factory"
  | "c_alien_key" | "Alien Decryption Key"
  | "c_alien_lock" | "Alien Lock"
  | "c_resimulator" | "Re-simulator Core"
  | "c_virus_ac" | "Artificial Virus Core"
  | "c_blight_ac" | "Artificial Blight Core"
  | "c_robot_ac" | "Artificial Robot Core"
  | "c_human_ac" | "Artificial Human Core"
  | "c_alien_ac" | "Artificial Alien Core"
  | "c_extractor" | "Laser Extractor"
  | "c_blight_extractor" | "Blight Extractor"
  | "c_virus_cure" | "Virus Cure"
  | "c_large_storage" | "Large Storage"
  | "c_virus_container_i" | "Internal Virus Containment"
  | "c_anomaly_container_i" | "Internal Anomaly Containment"
  | "c_unit_teleport" | "Unit Teleporter"
  | "c_repairport" | "Repair Garage"
  | "c_satellite_launcher" | "Satellite Launcher"
  | "c_satellite" | "Satellite Unit"
  | "c_hacking_tool" | "Hacking Tool"
  | "c_plasma_turret" | "Plasma Turret"
  | "c_plasma_cannon" | "Plasma Cannon"
  | "c_photon_cannon" | "Photon Cannon"
  | "c_missile_turret" | "Missile Launcher"
  | "c_human_tank_turret" | "Tank Turret"
  | "c_power_unit" | "Power Unit"
  | "c_blight_power" | "Blight Power Generator"
  | "c_fusion_generator" | "Fusion Generator"
  | "c_battery" | "Medium Battery"
  | "c_large_battery" | "Large Battery"
  | "c_large_power_transmitter" | "Large Power Transmitter"
  | "c_medium_storage" | "Medium Storage"
  | "c_drone_launcher" | "Drone Launcher"
  | "c_drone_port" | "Drone Port"
  | "c_drone_comp" | "Drone Component"
  | "c_landing_pad" | "Landing Pad"
  | "c_launch_pad" | "Launch Pad"
  | "c_blight_shield" | "Blight Charger"
  | "c_radar" | "Long-range Radar"
  | "c_alien_translator" | "Alien Translator"
  | "c_terraformer" | "Purifying Terraformer"
  | "c_blight_terraformer" | "Alien Terraformer"
  | "c_shield_generator2" | "Shield Generator"
  | "c_shield_generator3" | "Hyper Shield Generator"
  | "c_alien_container_i" | "Internal Alien Container"
  | "c_blight_container_i" | "Internal Blight Container"
  | "c_blight_container_s" | "Blight Container Small"
  | "c_blight_container_m" | "Blight Container Medium"
  | "c_alien_liquid_fx" | "Alien Liquid"
  | "c_virus_decomposer" | "Robot Hive"
  | "c_virus_turret" | "Virus Bug Turret"
  | "c_virus_bitlock" | "Crypto BitLock"
  | "c_virus_bitlock_effect" | "BitLock Effect"
  | "c_virus_possess" | "Blight Destabilizer"
  | "c_virus_recycler" | "Component Recycler"
  | "c_virus_jamming" | "Virus Ray"
  | "c_virus_possessor" | "Virus Possessor"
  | "c_blight_magnifier" | "Blight Magnifier"
  | "c_blight_antenna" | "Blight Stabilizer"
  | "c_blight_converter" | "Resource Converter"
  | "c_blight_control" | "Blight Control Tower"
  | "c_alien_core" | "Alien_Core"
  | "c_alien_unit" | "Alien Unit"
  | "c_alien_attack" | "Alien Attack"
  | "c_alien_miner" | "Alien Miner"
  | "c_alien_extractor" | "Alien Extractor"
  | "c_alien_feeder" | "Alien Feeder"
  | "c_alien_factory" | "Alien Factory"
  | "c_human_refinery" | "Human Refinery"
  | "c_human_factory_robots"
  | "c_human_science_analyzer_robots" | "Human Science Analyzer"
  | "c_human_commandcenter" | "Human Command Center"
  | "c_human_barracks" | "Human Barracks"
  | "c_human_spaceport" | "Human Spaceport"
  | "c_human_science" | "Human Science"
  | "c_alien_research" | "Alien Research"
  | "c_mothership_repair" | "Mothership Repairs"
  | "c_mothership_eject" | "Mothership Eject"
  | "c_santahat" | "Santa Hat"
  | "c_antlers1s" | "Antlers"
  | "c_antlersnose1s" | "Antlers Nose"
  | "c_present1s" | "Present"
  | "c_anomaly_go_home"
  | "c_carrier_factory" | "Robot Factory"
  | "c_anomaly_event" | "Anomaly";

interface CompNumPair extends BaseValue {
  id: Comp,
  num: number
}
type CompNum = Comp | number | CompNumPair;

type Resource =
  | "metalore" | "Metal Ore"
  | "crystal" | "Crystal Chunk"
  | "laterite" | "Laterite ore"
  | "silica" | "Silica sand"
  | "obsidian" | "Obsidian chunk"
  | "alien_artifact" | "Alien Artifact"
  | "alien_artifact_research" | "Research Artifact"
  | "blight_crystal" | "Blight Crystal Chunk"
  | "blight_extraction" | "Blight Extraction"
  | "bug_carapace" | "Bug Chitin";

interface ResourceNumPair extends BaseValue {
  id: Resource;
  num: number;
}
type ResourceNum = Resource | number | ResourceNumPair;
type Frame =
  | "f_empty"
  | "f_mothership" | "Mothership"
  | "f_landingpod" | "Command Center"
  | "f_beacon" | "Beacon"
  | "f_beacon_l" | "Large Beacon"
  | "f_spacedrop" | "Drop Ship"
  | "f_wall" | "Wall"
  | "f_wall_vir" | "Virus Wall"
  | "f_wall_bli" | "Blight Wall"
  | "f_building1x1a" | "Building 1x1 (1M)"
  | "f_building1x1b" | "Building 1x1 (L)"
  | "f_building1x1c" | "Building 1x1 (2S)"
  | "f_building1x1d" | "Building 1x1 (1S)"
  | "f_building1x1f" | "Storage Block (8)"
  | "f_building1x1g" | "Storage Block (16)"
  | "f_building2x1a" | "Building 2x1 (2M)"
  | "f_building2x1e" | "Building 2x1 (2S1M)"
  | "f_building2x1f" | "Building 2x1 (1M1S)"
  | "f_building2x1g" | "Building 2x1 (1M)"
  | "f_building2x2b" | "Building 2x2 (3M)"
  | "f_building2x2f" | "Building 2x2 (2M)"
  | "f_building_simulator" | "Simulator"
  | "f_building_sim" | "Re-simulator"
  | "f_roamingbot" | "Curious Bot"
  | "f_bot_1s_as" | "Scout"
  | "f_bot_1s_adw" | "Engineer"
  | "f_bot_2m_as"
  | "f_bot_1s_a" | "Worker"
  | "f_bot_1s_b" | "Dashbot"
  | "f_bot_2s" | "Twinbot"
  | "f_bot_1m_a" | "Cub"
  | "f_dropped_item" | "Dropped Item"
  | "f_construction" | "Construction"
  | "f_foundation" | "Foundation"
  | "f_human_foundation" | "Human Foundation"
  | "f_human_foundation_basic" | "Basic Human Foundation"
  | "f_explorable" | "Explorable"
  | "f_human_explorable" | "Human Explorable"
  | "f_explorable_glitch" | "Explorable Glitch"
  | "f_feature" | "Feature"
  | "f_blocking_feature" | "Land Feature"
  | "f_floating_feature"
  | "f_damage_plant" | "Power Flower"
  | "f_phase_plant" | "Phase Flower"
  | "f_trilobyte1" | "Trilobyte"
  | "f_gastarias1" | "Scale Worm"
  | "f_scaramar1" | "Malika"
  | "f_scaramar2" | "Mothika"
  | "f_gastarid1" | "Ravager"
  | "f_charcharosaurus1" | "Gigakaiju"
  | "f_particlespawner" | "Particle Spawner"
  | "f_forestleaves"
  | "f_dropped_resource" | "Scattered Resource"
  | "f_exploreable_bot_glitch" | "Small Bot Glitch"
  | "f_bug_hive" | "Bug Hive"
  | "f_bug_hive_large" | "Large Bug Hive"
  | "f_giant_home" | "Giant Beast"
  | "f_bug_home" | "Bug Hole"
  | "f_bug_hole"
  | "f_building1x1e" | "Storage Block (24)"
  | "f_building2x1b" | "Building 2x1 (1M1L)"
  | "f_building2x1c"
  | "f_building2x1d"
  | "f_building2x2a" | "Building 2x2 (2M1L)"
  | "f_building2x2c"
  | "f_building2x2d"
  | "f_building2x2e" | "Building 2x2 (1M3S)"
  | "f_building_pf" | "Particle Forge"
  | "f_transport_bot" | "Transport Bot"
  | "f_bot_1m1s" | "Hound"
  | "f_bot_1m_b" | "Hauler"
  | "f_bot_1m_c" | "Mark V"
  | "f_bot_1l_a" | "Rock"
  | "f_flyer_bot" | "Flyer Bot"
  | "f_drone_transfer_a" | "Drone"
  | "f_drone_transfer_a2" | "Transfer Drone"
  | "f_drone_miner_a" | "Miner Drone"
  | "f_drone_adv_miner" | "Advanced Miner Drone"
  | "f_drone_defense_a" | "Defense Drone"
  | "f_flyer_m" | "Shuttle Bot"
  | "f_satellite" | "Satellite"
  | "f_building3x2a" | "Building 3x2 (1L3M)"
  | "f_building3x2b" | "Building 3x2 (2M2S)"
  | "f_building_fg"
  | "f_amac" | "AMAC"
  | "f_human_flyer" | "Human Flyer"
  | "f_human_tank" | "Human Tank"
  | "f_human_miner" | "Human Miner Mech"
  | "f_alien_soldier" | "Alien Soldier"
  | "f_alienbot"
  | "f_alien_worker" | "Alien Worker"
  | "f_present1x1"
  | "f_carrier_bot" | "Runner";

interface FrameNumPair extends BaseValue {
  id: Frame;
  num: number;
}
type FrameNum = Frame | number | FrameNumPair;

declare function coord(x: number, y: number): Coord;
declare function value(id: Comp, num: number): CompNumPair;
declare function value(id: Item, num: number): ItemNumPair;
declare function value(id: Resource, num: number): ResourceNumPair;
declare function value(id: Frame, num: number): FrameNumPair;
declare function label(value: Value, cb: () => void);
