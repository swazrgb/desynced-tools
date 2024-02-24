import componentJson from "./components.json";
import itemJson from "./items.json";
import frameJson from "./frames.json";
import valuesJson from "./values.json";

type Type = "component" | "item" | "frame" | "value";

type Element = {
  name?: string;
};

type Loaded<E, T = Type> = E & { id: string; type: T };

const allById: Record<string, Loaded<Element>> = {};
const allByName: Record<string, Loaded<Element>> = {};

function load<E extends Element = Element, T extends Type = Type>(
  type: T,
  data: Record<string, E>,
): Array<Loaded<E, T>> {
  const loaded: Array<Loaded<E, T>> = [];

  for (const id in data) {
    const item = {
      ...data[id],
      id,
      type,
    };

    loaded.push(item);

    if (item.id in allById) {
      throw new Error("Duplicate item id: " + item.id);
    }

    allById[item.id] = item;

    if (item.name != null) {
      if (item.name in allByName) {
        delete item.name;
      } else {
        allByName[item.name] = item;
      }
    }
  }

  return loaded;
}

export const components = load<{
  name?: string;
  attachment_size?: string;
}>("component", componentJson["components"]);

export type Component = NonNullable<(typeof components)[number]>;

export const frames = load<{
  name?: string;
  size?: string;
}>("frame", frameJson["frames"]);

export type Frame = NonNullable<(typeof frames)[number]>;

export const items = load<{
  name?: string;
  tag?: string;
}>("item", itemJson["items"]);

export type Item = NonNullable<(typeof items)[number]>;

export const gameValues = load<{
  name?: string;
  tag?: string;
}>("value", valuesJson["values"]);

export type GameValue = NonNullable<(typeof gameValues)[number]>;

export type GameData = Component | Frame | Item | GameValue;

export function getDataByIdOrName(idOrName: string): GameData {
  return allById[idOrName] ?? allByName[idOrName];
}
