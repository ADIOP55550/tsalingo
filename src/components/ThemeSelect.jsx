
import { useEffect } from 'react'
import { themeChange } from 'theme-change'


export default function ThemeSelect() {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const themes = [
    "ryanair",
    "wizzair",
  ];


  function capitalizeFirstLetter(s) {
    if (!s) return '';
    return s[0].toUpperCase() + s.substring(1);
  }


  return (
    <select className="select select-ghost w-full max-w-xs" data-choose-theme>
      <option value="">Default</option>
      {
        themes.map(t => (<option value={t}> {capitalizeFirstLetter(t)}</option>))
      }
    </select>)
}
