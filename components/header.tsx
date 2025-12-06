"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, LogOut, Settings } from "lucide-react"

export function Header({ userRole, userName }: { userRole?: string; userName?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚕️</span>
            </div>
            <span className="font-bold text-lg text-gray-900">MediCare</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {userRole === "patient" && (
              <>
                <Link href="/patient/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                  Dashboard
                </Link>
                <Link href="/patient/appointments" className="text-gray-700 hover:text-blue-600 font-medium">
                  Appointments
                </Link>
                <Link href="/patient/records" className="text-gray-700 hover:text-blue-600 font-medium">
                  Records
                </Link>
              </>
            )}
            {userRole === "doctor" && (
              <>
                <Link href="/doctor/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                  Dashboard
                </Link>
                <Link href="/doctor/patients" className="text-gray-700 hover:text-blue-600 font-medium">
                  Patients
                </Link>
                <Link href="/doctor/schedule" className="text-gray-700 hover:text-blue-600 font-medium">
                  Schedule
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {userName && (
              <>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{userName.charAt(0).toUpperCase()}</span>
                </div>
                <span className="text-gray-700 font-medium">{userName}</span>
              </>
            )}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-red-50 rounded-lg transition">
              <LogOut className="w-5 h-5 text-red-600" />
            </button>
          </div>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {userRole === "patient" && (
              <>
                <Link href="/patient/dashboard" className="text-gray-700 py-2 block">
                  Dashboard
                </Link>
                <Link href="/patient/appointments" className="text-gray-700 py-2 block">
                  Appointments
                </Link>
                <Link href="/patient/records" className="text-gray-700 py-2 block">
                  Records
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
