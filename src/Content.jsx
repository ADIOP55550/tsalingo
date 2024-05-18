import ThemeSelect from "./components/ThemeSelect"

export default function Content() {
  return (
    <div className="flex flex-col">
      <img src="/logo.png" alt="TSLINGO LOGO" className="w-1/12 self-center top-10 absolute" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias quisquam velit aliquam minus est aut necessitatibus sit animi unde tempora, sint omnis qui ducimus, aspernatur quis ratione inventore. Repudiandae.
      </p>

      <div>
        <label>Choose theme:
          <ThemeSelect></ThemeSelect>
        </label>

      </div>

    </div>
  )
}
