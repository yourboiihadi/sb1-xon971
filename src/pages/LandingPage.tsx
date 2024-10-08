import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Zap, Lock, Globe, Layers, Clock } from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Multilingual Document</span>
            <span className="block text-blue-600">Text Extraction</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            DocuExtract harnesses Google's cutting-edge AI OCR technology to accurately extract text from images, PDFs, and scanned documents in multiple languages.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link to="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
                Get Started
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link to="/pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Why Choose DocuExtract?
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-white" />}
              title="Advanced OCR Technology"
              description="Powered by Google's AI OCR technology, ensuring high accuracy in text extraction from various document types."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-white" />}
              title="Multilingual Support"
              description="Extract text from documents in multiple languages, breaking down language barriers in your workflow."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-white" />}
              title="Secure & Private"
              description="Your documents are processed securely, and we never store or share your sensitive information."
            />
            <FeatureCard
              icon={<Layers className="h-8 w-8 text-white" />}
              title="Versatile Document Handling"
              description="Process a wide range of document types including PDFs, images, and scanned documents with ease."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-white" />}
              title="Lightning-Fast Processing"
              description="Experience rapid text extraction, allowing you to work efficiently and meet tight deadlines."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-white" />}
              title="24/7 Availability"
              description="Access our services round the clock, ensuring your text extraction needs are met anytime, anywhere."
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <ProcessStep
              number="1"
              title="Upload Your Document"
              description="Simply upload your PDF, image, or scanned document to our secure platform."
            />
            <ProcessStep
              number="2"
              title="AI-Powered Extraction"
              description="Our advanced OCR technology, powered by Google AI, processes your document with high accuracy."
            />
            <ProcessStep
              number="3"
              title="Receive Extracted Text"
              description="Get your extracted text in seconds, ready for further use or analysis."
            />
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to streamline your document processing?
          </h2>
          <div className="mt-8">
            <Link to="/register" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="p-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  </div>
)

const ProcessStep: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-medium text-gray-900 text-center">{title}</h3>
    <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
  </div>
)

export default LandingPage