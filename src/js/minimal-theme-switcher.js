(() => {
  const select = document.querySelector("#theme-switcher");
  const root = document.documentElement;
  const storageKey = "picoPreferredColorScheme";

  if (!select || !root) {
    return;
  }

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const isAllowedTheme = (value) => value === "auto" || value === "light" || value === "dark";

  const getPreferredTheme = () => {
    const stored = window.localStorage?.getItem(storageKey);
    return isAllowedTheme(stored) ? stored : "auto";
  };

  const applyTheme = (preferredTheme) => {
    const resolvedTheme = preferredTheme === "auto" ? getSystemTheme() : preferredTheme;
    root.setAttribute("data-theme", resolvedTheme);
  };

  const setTheme = (preferredTheme) => {
    if (!isAllowedTheme(preferredTheme)) {
      return;
    }
    window.localStorage?.setItem(storageKey, preferredTheme);
    select.value = preferredTheme;
    applyTheme(preferredTheme);
  };

  const initialTheme = getPreferredTheme();
  select.value = initialTheme;
  applyTheme(initialTheme);

  select.addEventListener("change", () => {
    setTheme(select.value);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getPreferredTheme() === "auto") {
      applyTheme("auto");
    }
  });
})();
