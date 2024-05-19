import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/question-mark.png" width="100" alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center !pt-4">
              <h2 className="card-titled text-black text-xl">Quiz</h2>
              <p className="text-black">Test your knowledge of the TSA rules and win a discount!</p>
              <div className="card-actions">
                <button className="btn btn-primary text-white">Rozpocznij</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/boardpass.png" alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center !pt-4">
              <h2 className="card-title">Documents</h2>
              <p>What do you need to bring on board</p>
              <div className="card-actions">
                <Link to="/documents">
                  <button className="btn btn-primary text-white">Learn more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/bulb.png" alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center !pt-4">
              <h2 className="card-title">Tips and tricks</h2>
              <p>Worth to know pieces of information</p>
              <div className="card-actions">
                <button className="btn btn-primary text-white">Let's go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
