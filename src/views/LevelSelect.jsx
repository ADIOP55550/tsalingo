import { Link } from "react-router-dom";

function levelCard(levelName, levelDesc) {
    return (
        <div className="card card-compact w-60 py-2 bg-base-100 shadow-xl">
            {/* Link to the Quiz component with the levelName parameter */}
            <Link to={`/quiz/${levelName}`}>
                <figure>
                    <img src={`/${levelName}.png`} alt={levelName} width="150" />
                </figure>
                <div className="!py-1 card-body">
                    <p className="card-title text-center block">
                        {levelDesc}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default function LevelSelect() {
  return (
    <div className="mt-4">
      <p className="text-xl text-center pb-3">
        Choose how hard you like it?
      </p>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-30 card rounded-box place-items-center">
          {levelCard('easy', 'Flying first time')}
        </div>
        <div className="divider">OR</div>
        <div className="grid h-30 card rounded-box place-items-center">
          {levelCard('hard', 'Flying veteran')}
        </div>

      </div>
    </div>
  )
}
