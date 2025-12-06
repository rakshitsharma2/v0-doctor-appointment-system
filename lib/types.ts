export type UserRole = "patient" | "doctor" | "admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  phone?: string
  avatar?: string
  createdAt: Date
}

export interface Doctor extends User {
  specialty: string
  licenseNumber: string
  yearsExperience: number
  rating: number
  totalPatients: number
  availableSlots: string[]
}

export interface Patient extends User {
  dateOfBirth: string
  bloodType: string
  allergies: string[]
  medicalHistory: string[]
}

export interface Appointment {
  id: string
  patientId: string
  doctorId: string
  dateTime: Date
  duration: number // in minutes
  status: "scheduled" | "completed" | "cancelled" | "no-show"
  notes?: string
  reason: string
  createdAt: Date
}

export interface Prescription {
  id: string
  appointmentId: string
  patientId: string
  doctorId: string
  medications: Medication[]
  instructions: string
  expiryDate: Date
  createdAt: Date
}

export interface Medication {
  name: string
  dosage: string
  frequency: string
  duration: string
}

export interface MedicalRecord {
  id: string
  patientId: string
  doctorId: string
  type: "consultation" | "lab" | "imaging" | "procedure"
  title: string
  description: string
  fileUrl?: string
  createdAt: Date
}

export interface Review {
  id: string
  doctorId: string
  patientId: string
  rating: number
  comment: string
  createdAt: Date
}
