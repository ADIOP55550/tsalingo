import ThemeSelect from "../components/ThemeSelect"
export default function Home() {
  return (
    <div className="flex flex-col">
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
