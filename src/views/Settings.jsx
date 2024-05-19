import ThemeSelect from "../components/ThemeSelect";

export default function Settings() {
  return (
    <div className="mx-4 text-black">
      <div className="w-full px-3 mt-2 mb-6">
        <label>Choose theme:
          <ThemeSelect></ThemeSelect>
        </label>
      </div>
    </div>
  )
}
