import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  handleDelete,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={() => handleDelete(item.id)} //poziva funkciju samo kada se desi event
            handleToggleItem={() => handleToggleItem(item.id)}
          />
          //Item komponenta (item) argumenta objekta item={} props komponente {item} argument objekta
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sortiraj po inputu</option>
          <option value="description">Sortiraj po opisu</option>
          <option value="packed">Sortiraj po pakovanju</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
