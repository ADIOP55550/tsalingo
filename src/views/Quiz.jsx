import { useParams } from "react-router-dom";
import QuizCard from "../components/QuizCard";
export default function Quiz() {
    const { levelName } = useParams();
    return (
        <div className="h-full w-full">
            <div className="mt-4 flex justify-center">
                <h1>Quiz for {levelName}</h1>
            </div>
            <div className="flex w-full -mx-4 h-2/3">
                <div id="take" className="w-1/2 h-full pr-5  justify-left align-center pt-5">
                    <div className="bg-indigo-500 w-40 h-40  block"></div>
                    <p className="pl-5">...Take it</p>
                </div>
                <div id="leave" className="w-1/2 h-full pl-5 justify-right align-center h-1/3 text-right pt-5">
                    <div className="bg-red-500 w-40 h-40 block"></div>
                    <p>Leave it...</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center h-full items-end h-1/3" >
                <QuizCard name={levelName} image={levelName}></QuizCard>
            </div>
        </div>
    )
}
