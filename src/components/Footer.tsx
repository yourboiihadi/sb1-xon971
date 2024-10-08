import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Twitter, Facebook, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <FileText className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">DocuExtract</span>
            </Link>
            <p className="text-sm text-gray-300">Empowering businesses with advanced OCR technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">Email: support@docuextract.com</p>
            <p className="text-sm text-gray-300">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">&copy; 2024 DocuExtract. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer