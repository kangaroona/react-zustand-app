import { useStore } from "@/stores/suggestion";

export default function SuggestionList() {
  const { list } = useStore();
  return (
    list.length > 0 && (
      <div>
        <h2>SuggestionList component</h2>
        <ul>
          {list.map((item) => (
            <li
              key={
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15)
              }
              onClick={() => useStore.getState().selectText(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
