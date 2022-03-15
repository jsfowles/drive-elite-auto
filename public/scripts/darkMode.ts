// TS requires you either import any package, ignore isolatedModules, or ignore...
// @ts-ignore
if (
  localStorage.getItem('vidyaDarkMode') === 'true' ||
  (!('mxDarkMode' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
