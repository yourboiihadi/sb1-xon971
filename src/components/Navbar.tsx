import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FileText className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">DocuExtract</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login" className="text-blue-600 hover:text-blue-800">Log in</NavLink>
            <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Sign up
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/pricing">Pricing</MobileNavLink>
            <MobileNavLink to="/dashboard">Dashboard</MobileNavLink>
            <MobileNavLink to="/login">Log in</MobileNavLink>
            <MobileNavLink to="/register" className="bg-blue-500 text-white">Sign up</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink: React.FC<{ to: string; className?: string }> = ({ to, children, className }) => (
  <Link to={to} className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${className}`}>
    {children}
  </Link>
)

const MobileNavLink: React.FC<{ to: string; className?: string }> = ({ to, children, className }) => (
  <Link to={to} className={`block text-base font-medium px-3 py-2 rounded-md transition-colors duration-200 ${className || 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
    {children}
  </Link>
)

export default Navbar