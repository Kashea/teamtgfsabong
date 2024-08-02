export default function FeatureCard({ title, description }) {
    return (
      <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg w-72">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    )
  }
  