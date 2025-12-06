"use client"

import { Header } from "@/components/header"
import { mockMedicalRecords } from "@/lib/mock-data"
import { FileText, Download, Eye } from "lucide-react"

export default function PatientRecords() {
  const recordTypes = {
    lab: { label: "Lab Work", color: "bg-blue-50 border-blue-200" },
    imaging: { label: "Imaging", color: "bg-green-50 border-green-200" },
    consultation: { label: "Consultation", color: "bg-purple-50 border-purple-200" },
    procedure: { label: "Procedure", color: "bg-orange-50 border-orange-200" },
  }

  const groupedRecords = mockMedicalRecords.reduce(
    (acc, record) => {
      const year = new Date(record.createdAt).getFullYear()
      if (!acc[year]) acc[year] = []
      acc[year].push(record)
      return acc
    },
    {} as Record<number, typeof mockMedicalRecords>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="patient" userName="Alex Johnson" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Medical Records</h1>
          <p className="text-gray-600 text-lg">Access and download your medical documents</p>
        </div>

        {Object.entries(groupedRecords)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, records]) => (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{year}</h2>
              <div className="space-y-4">
                {records
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map((record) => {
                    const recordType = recordTypes[record.type]
                    return (
                      <div key={record.id} className={`rounded-lg border p-6 ${recordType.color}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <FileText className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white border">
                                  {recordType.label}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-2">{record.description}</p>
                              <p className="text-sm text-gray-500">
                                {new Date(record.createdAt).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            <button className="p-2 hover:bg-white/50 rounded-lg transition">
                              <Eye className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-white/50 rounded-lg transition">
                              <Download className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
      </main>
    </div>
  )
}
