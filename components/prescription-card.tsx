"use client"

import { AlertCircle, Pill, Download } from "lucide-react"
import type { Prescription } from "@/lib/types"

export function PrescriptionCard({ prescription }: { prescription: Prescription }) {
  const isExpired = new Date(prescription.expiryDate) < new Date()

  return (
    <div className="bg-white rounded-lg border border-green-100 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Prescription</h3>
          <p className="text-sm text-gray-600">
            {new Date(prescription.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${isExpired ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}
        >
          {isExpired ? "Expired" : "Active"}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {prescription.medications.map((med, idx) => (
          <div key={idx} className="flex gap-3 p-3 bg-blue-50 rounded-lg">
            <Pill className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{med.name}</p>
              <p className="text-sm text-gray-600">
                {med.dosage} • {med.frequency} • {med.duration}
              </p>
            </div>
          </div>
        ))}
      </div>

      {prescription.instructions && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
          <div className="flex gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-900">Instructions:</p>
              <p className="text-sm text-amber-800">{prescription.instructions}</p>
            </div>
          </div>
        </div>
      )}

      <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition">
        <Download className="w-4 h-4" />
        Download Prescription
      </button>
    </div>
  )
}
