import { useCallback, useEffect, useMemo } from "react";
import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";
import { usePullRequests } from "../pull-request/usePullRequests";
import { useTabBlur } from "../useTabBlur";
import { useTabFocus } from "../useTabFocus";

const state = atom<number[]>({
  key: "seenPullRequestIds",
  default: [],
  effects: [persistAtom],
});

export const useNewPrsIndicator = () => {
  const { data: pullRequests } = usePullRequests();
  let [seenPullRequestIds, setSeenPullRequestIds] = useRecoilState(state);

  const unseenPrs = useMemo(
    () => pullRequests.filter((d) => !seenPullRequestIds.includes(d.id)),
    [pullRequests, seenPullRequestIds]
  );

  const showIndicator = useCallback(() => {
    if (!unseenPrs.length) return;
    const plural = unseenPrs.length > 1 ? "s" : "";
    document.title = `🟡 ${unseenPrs.length} new PR${plural}`;
  }, [unseenPrs.length]);

  const hideIndicator = () => {
    document.title = `2review - Pull requests awaiting your review`;
  };

  // makeAllPrsSeenOnTabBlur
  useTabBlur(() => {
    if (!pullRequests) return;
    setSeenPullRequestIds(pullRequests.map((d) => d.id));
  });

  useTabFocus(() => {
    hideIndicator();
  });

  // show indicator when receiving prs when unfocused
  useEffect(() => {
    if (!unseenPrs) return;
    if (document.visibilityState === "visible") return;
    showIndicator();
  }, [showIndicator, unseenPrs]);
};
