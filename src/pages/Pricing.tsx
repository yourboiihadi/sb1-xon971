import React from 'react'
import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'

const PricingTier: React.FC<{
  name: string
  price: string
  pages: string
  features: Array<{ text: string; included: boolean }>
  recommended?: boolean
}> = ({ name, price, pages, features, recommended }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${recommended ? 'border-2 border-blue-500 relative' : ''}`}>
    {recommended && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold uppercase py-1 px-3 transform translate-x-2 -translate-y-2 rotate-45">
        Popular
      </div>
    )}
    <div className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
      <div className="mt-4 flex items-baseline text-gray-900">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-semibold">/month</span>
      </div>
      <p className="mt-2 text-lg text-gray-500">{pages}</p>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              {feature.included ? (
                <Check className="h-6 w-6 text-green-500" />
              ) : (
                <X className="h-6 w-6 text-red-500" />
              )}
            </div>
            <p className={`ml-3 text-base ${feature.included ? 'text-gray-700' : 'text-gray-500 line-through'}`}>{feature.text}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-8 bg-gray-50">
      <Link
        to="/register"
        className={`block w-full text-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow hover:shadow-lg transition-all duration-200 ${
          recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
        }`}
      >
        Get started
      </Link>
    </div>
  </div>
)

const Pricing: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you and start extracting text from your multilingual documents today.
          </p>
        </div>
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
          <PricingTier
            name="Basic"
            price="$5"
            pages="1,000 pages/month"
            features={[
              { text: "Google AI-powered OCR", included: true },
              { text: "Multilingual support", included: true },
              { text: "Email support", included: true },
              { text: "Web interface access", included: true },
              { text: "API access", included: false },
              { text: "Advanced document analysis", included: false },
            ]}
          />
          <PricingTier
            name="Pro"
            price="$15"
            pages="5,000 pages/month"
            features={[
              { text: "Google AI-powered OCR", included: true },
              { text: "Multilingual support", included: true },
              { text: "Priority email support", included: true },
              { text: "Web interface access", included: true },
              { text: "Advanced document analysis", included: true },
              { text: "API access", included: false },
            ]}
            recommended
          />
          <PricingTier
            name="Enterprise"
            price="$100"
            pages="50,000 pages/month"
            features={[
              { text: "Google AI-powered OCR", included: true },
              { text: "Multilingual support", included: true },
              { text: "24/7 phone & email support", included: true },
              { text: "Web interface access", included: true },
              { text: "Advanced document analysis", included: true },
              { text: "API access", included: true },
            ]}
          />
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Need more pages or custom solutions? <a href="#" className="text-blue-600 hover:underline transition-colors duration-200">Contact us</a> for tailored pricing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing