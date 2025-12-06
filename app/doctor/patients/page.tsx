"use client"

import { Header } from "@/components/header"
import { mockPatient } from "@/lib/mock-data"
import { Search, Mail, Heart, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function DoctorPatients() {
  const [searchTerm, setSearchTerm] = useState("")
  const patients = [mockPatient]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="doctor" userName="Dr. Sarah Williams" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Patients</h1>
          <p className="text-gray-600 text-lg">Manage and view patient information</p>
        </div>

        <div className="bg-white rounded-lg border border-blue-100 p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {filteredPatients.length > 0 ? (
          <div className="grid gap-6">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="bg-white rounded-lg border border-blue-100 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">{patient.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{patient.name}</h3>
                        <p className="text-gray-600 text-sm">Patient ID: {patient.id}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Mail className="w-5 h-5 text-blue-600" />
                          Contact
                        </h4>
                        <div className="space-y-2">
                          <p className="text-gray-700">{patient.email}</p>
                          <p className="text-gray-700">{patient.phone}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-600" />
                          Medical Info
                        </h4>
                        <div className="space-y-2">
                          <p className="text-gray-700">
                            <span className="font-medium">Blood Type:</span> {patient.bloodType}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">DOB:</span> {patient.dateOfBirth}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          Allergies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {patient.allergies.map((allergy) => (
                            <span
                              key={allergy}
                              className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full"
                            >
                              {allergy}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Medical History</h4>
                        <div className="space-y-2">
                          {patient.medicalHistory.map((history) => (
                            <div key={history} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-700">{history}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6 md:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                      View Records
                    </button>
                    <button className="border border-blue-300 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition">
                      Write Prescription
                    </button>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition">
                      Schedule Note
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-12 text-center">
            <Search className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No patients found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </main>
    </div>
  )
}
