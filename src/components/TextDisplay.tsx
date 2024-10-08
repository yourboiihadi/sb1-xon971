import React, { useState } from 'react'
import { FileText, Copy, Download, CheckCircle } from 'lucide-react'

interface TextDisplayProps {
  text: string
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([text], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = "extracted_text.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <FileText className="mr-2 text-blue-500" />
          Extracted Text
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            {copied ? <CheckCircle className="mr-1" size={16} /> : <Copy className="mr-1" size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            <Download className="mr-1" size={16} />
            Download
          </button>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto border border-gray-200">
        <pre className="whitespace-pre-wrap text-sm">{text}</pre>
      </div>
    </div>
  )
}

export default TextDisplay