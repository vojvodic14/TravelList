export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((numP) => numP.packed).length;
  const posto = (numPacked / numItems) * 100;
  return (
    <footer>
      <em>
        Vi imate {numItems} stvari na vasoj listi:trenutno ste izabrali{" "}
        {numPacked} ({posto}%)
      </em>
    </footer>
  );
}
