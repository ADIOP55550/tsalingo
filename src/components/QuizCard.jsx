
export default function QuizCard({ image }) {
    return (
        <div className="card card-compact w-30 py-2 bg-base-100 shadow-xl 
        justify-end items-end max-h-max">
            <figure>
                <img src={`/${image}.png`} alt={image} width="150" />
            </figure>
            <div className="!py-1 card-body">
                <p className="card-title text-center block">
                </p>
            </div>
        </div>
    )
}
