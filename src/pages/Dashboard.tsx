import React, { useState } from 'react'
import FileUpload from '../components/FileUpload'
import TextDisplay from '../components/TextDisplay'
import { AlertCircle, FileText, Loader } from 'lucide-react'

const Dashboard: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = async (file: File) => {
    setError(null)
    setExtractedText(null)
    setIsLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      // Simulating API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock response
      const mockText = "This is a sample extracted text from the uploaded document. In a real application, this would be the result of the OCR process."
      setExtractedText(mockText)
    } catch (err) {
      setError('An error occurred while processing the document. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Document Text Extractor</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <FileUpload onFileUpload={handleFileUpload} />
        {isLoading && (
          <div className="mt-8 flex items-center justify-center">
            <Loader className="animate-spin mr-2" />
            <span>Processing your document...</span>
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
            <AlertCircle className="mr-2" />
            {error}
          </div>
        )}
        {extractedText && <TextDisplay text={extractedText} />}
      </div>
      <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FileText className="mr-2" />
          How to use the Document Text Extractor
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Upload your document using the file uploader above.</li>
          <li>Wait for our advanced OCR technology to process your document.</li>
          <li>View the extracted text in the text display area.</li>
          <li>Copy the extracted text or download it for further use.</li>
        </ol>
        <p className="mt-4 text-sm text-gray-600">
          Note: The current demo is using mock data. In a real application, this would connect to the OCR backend service.
        </p>
      </div>
    </div>
  )
}

export default Dashboard