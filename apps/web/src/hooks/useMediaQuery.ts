import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query));
    };

    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if the query changes
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};
