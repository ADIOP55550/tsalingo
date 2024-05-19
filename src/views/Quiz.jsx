import { useParams } from 'react-router-dom';
import AnimatedQuizCard from '../components/AnimatedQuizCard';


export default function Quiz() {
    const { levelName } = useParams();

    return (
        <div className="h-full w-full">
            <div className="mt-4 flex justify-center">
                <h1>Quiz for {levelName}</h1>
            </div>
            <div className="flex w-full -mx-4 h-2/3">
                <div id="take" className="w-full  flex-1/2 h-full justify-left align-center pt-5 mr-2">
                    <div className="bg-indigo-500 w-40 h-40 block"></div>
                    <p className="pl-5">...Take it</p>
                </div>
                <div id="leave" className="w-full flex-1/2 h-full  justify-right align-center text-right pt-5 ">
                    <div className="bg-red-500 w-40 h-40 block "></div>
                    <p className="pr-4">Leave it...</p>
                </div>

            </div>
            <div className="flex justify-center align-center h-1/3">
                <AnimatedQuizCard image={levelName} />
                <AnimatedQuizCard image={levelName} />
            </div>
        </div>


    );
}