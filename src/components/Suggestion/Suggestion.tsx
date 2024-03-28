import React, { useCallback } from "react";
import { useStore } from "@/stores/suggestion";
import Input from "@/components/Input/Input";
import SuggestionList from "@/components/Suggestion/SuggestionList";

export default function Suggestion() {
  const { keyword, fetchList } = useStore();
  const fn = useCallback(async (kw: string) => {
    useStore.setState({ keyword: kw });
    await fetchList(kw);
  }, []);
  return (
    <div>
      <h2>Suggestion component</h2>
      <Input text={keyword} fn={fn} />
      <SuggestionList />
    </div>
  );
}
