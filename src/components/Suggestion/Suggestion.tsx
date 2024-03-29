import React, { useCallback, useEffect } from "react";
import { useStore } from "@/stores/suggestion";
import Input from "@/components/Input/Input";
import SuggestionList from "@/components/Suggestion/SuggestionList";
import { useDebounce } from "use-debounce";

export default function Suggestion() {
  const { keyword, fetchList } = useStore();
  const [debouncedKeyword] = useDebounce(keyword, 300);
  const fn = useCallback((kw: string) => {
    useStore.setState({ keyword: kw });
  }, []);
  useEffect(() => {
    const getList = async () => {
      await fetchList(debouncedKeyword);
    };
    getList();
  }, [debouncedKeyword]);
  return (
    <div>
      <h2>Suggestion component</h2>
      <Input text={keyword} fn={fn} />
      <SuggestionList />
    </div>
  );
}
