import { Link } from "react-router-dom"

export default function EagleFinalMessage() {
  return (
    <div className="mx-auto">

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-24 rounded-ful rotate-45 relative" style={{ marginLeft: '-25px', top: '60px' }}>
            <img alt="TSAlingo" src="/logo.png" />
          </div>
        </div>
        <div className="chat-bubble bg-primary text-white mt-20">Your hard work is paying off</div>

      </div>


      <div className="mx-4">
        <div className="text-center mt-20">
          <h2 className="text-xl mb-1">Great!</h2>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          </div>
        </div>
        <progress className="progress progress-primary w-full h-8 mt-5 shadow" value="40" max="100"></progress>
        <Link to='/levelSelect' className="w-full absolute bottom-6 left-0 px-4">
          <button className="btn w-full bg-accent text-white">Continue</button>
        </Link>
      </div>
    </div>
  )
}
