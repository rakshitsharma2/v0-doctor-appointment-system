"use client"

import { Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import type { Doctor } from "@/lib/types"

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-lg border border-blue-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <span className="text-blue-600 font-bold text-lg">👨‍⚕️</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-blue-600 font-medium text-sm">{doctor.specialty}</p>
        </div>
        <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-semibold text-gray-900">{doctor.rating}</span>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500" />
          <span>{doctor.yearsExperience} years experience</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>{doctor.totalPatients} patients</span>
        </div>
      </div>

      <Link href={`/booking?doctorId=${doctor.id}`}>
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
          Book Appointment
        </button>
      </Link>
    </div>
  )
}
