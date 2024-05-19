import { useState } from "react"
import { Link } from "react-router-dom";

export default function Documents() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      description:
        <p>
          The most crucial document is a <u>valid passport</u>, which serves as an international travel identification. Depending on the destination, a <u>visa</u> may also be required, so travelers must verify visa requirements and obtain the necessary approvals in advance.
        </p>,
      img:
        <img src="/passport.png" alt="passport" className="h-32 my-2 mx-auto" />
    },
    {
      description:
        <p>
          For domestic flights, a government-issued photo ID, such as a driver’s license or a national ID card, is typically sufficient.         </p>,
      img:
        <img src="/id.jpeg" alt="passport" className="h-32 my-2 mx-auto" />
    },
    {
      description:
        <p>
          Additionally, passengers must have their boarding pass, which can be either printed at home or obtained at the airport's check-in counter or kiosk. It's advisable to carry a copy of the travel itinerary and any relevant travel insurance documents, particularly for international journeys, to cover any emergencies.
        </p>,
      img:
        <img src="/boardpass.png" alt="passport" className="h-32 my-2 mx-auto" />
    }
  ];
  return (
    <div className="mx-4 mt-2 text-justify">
      {steps.filter((s, i) => i === step).at(0).img}
      {steps.filter((s, i) => i === step).at(0).description}

      <div className="join w-full absolute bottom-4 left-0 px-4">
        <button className="btn w-1/2 join-item" disabled={step == 0} onClick={() => setStep(step - 1)}>Previous</button>
        {
          step == steps.length - 1 ?
            <Link to="/" className="btn w-1/2 join-item btn-accent">
              Home
            </Link>
            :
            <button className="btn w-1/2 join-item btn-accent" disabled={step == steps.length - 1} onClick={() => setStep(step + 1)}>Next</button>
        }
      </div>
    </div>
  )
}

