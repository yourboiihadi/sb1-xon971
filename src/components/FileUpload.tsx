import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File } from 'lucide-react'

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0])
    }
  }, [onFileUpload])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
    },
    multiple: false,
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
        {isDragActive ? (
          <p className="text-blue-500 font-medium">Drop the file here...</p>
        ) : (
          <p className="text-gray-500">
            Drag and drop a file here, or click to select a file
          </p>
        )}
        <p className="mt-2 text-sm text-gray-400">
          Supported formats: PNG, JPG, GIF, PDF
        </p>
      </div>
      {acceptedFiles.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h4 className="font-medium mb-2">Selected File:</h4>
          <div className="flex items-center">
            <File className="mr-2 text-gray-500" size={20} />
            <span>{acceptedFiles[0].name}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileUpload