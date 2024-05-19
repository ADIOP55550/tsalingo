import { useParams } from "react-router-dom";
export default function Quiz() {
    const { levelName } = useParams();
    return (
        <div className="h-full">
            <div className="mt-4 flex justify-center">
                <h1>Quiz for {levelName}</h1>
            </div>
            <div className="mt-4 flex justify-center h-full items-end">

                <div className="card card-compact w-30 py-2 bg-base-100 shadow-xl justify-end items-end max-h-max">
                    {/* Link to the Quiz component with the levelName parameter */}
                    <figure>
                        <img src={`/${levelName}.png`} alt={levelName} width="150" />
                    </figure>
                    <div className="!py-1 card-body">
                        <p className="card-title text-center block">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
