import type { Doctor, Patient, Appointment, Prescription, MedicalRecord } from "./types"

export const mockDoctors: Doctor[] = [
  {
    id: "doc1",
    name: "Dr. Sarah Williams",
    email: "sarah.williams@hospital.com",
    role: "doctor",
    phone: "+1-555-0101",
    specialty: "Cardiology",
    licenseNumber: "MD-45678",
    yearsExperience: 12,
    rating: 4.8,
    totalPatients: 234,
    availableSlots: ["09:00", "10:30", "14:00", "15:30"],
    createdAt: new Date("2020-01-15"),
  },
  {
    id: "doc2",
    name: "Dr. James Chen",
    email: "james.chen@hospital.com",
    role: "doctor",
    phone: "+1-555-0102",
    specialty: "Neurology",
    licenseNumber: "MD-45679",
    yearsExperience: 8,
    rating: 4.6,
    totalPatients: 156,
    availableSlots: ["08:00", "11:00", "13:30", "16:00"],
    createdAt: new Date("2021-03-20"),
  },
  {
    id: "doc3",
    name: "Dr. Maria Garcia",
    email: "maria.garcia@hospital.com",
    role: "doctor",
    phone: "+1-555-0103",
    specialty: "Pediatrics",
    licenseNumber: "MD-45680",
    yearsExperience: 15,
    rating: 4.9,
    totalPatients: 312,
    availableSlots: ["09:30", "11:00", "14:30", "16:00"],
    createdAt: new Date("2019-06-10"),
  },
]

export const mockPatient: Patient = {
  id: "patient1",
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  role: "patient",
  phone: "+1-555-0201",
  dateOfBirth: "1985-03-15",
  bloodType: "O+",
  allergies: ["Penicillin"],
  medicalHistory: ["Hypertension", "Asthma"],
  createdAt: new Date("2023-01-01"),
}

export const mockAppointments: Appointment[] = [
  {
    id: "apt1",
    patientId: "patient1",
    doctorId: "doc1",
    dateTime: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    duration: 30,
    status: "scheduled",
    reason: "Regular checkup",
    notes: "Follow up on blood pressure",
    createdAt: new Date(),
  },
  {
    id: "apt2",
    patientId: "patient1",
    doctorId: "doc2",
    dateTime: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    duration: 45,
    status: "completed",
    reason: "Migraine consultation",
    createdAt: new Date(),
  },
]

export const mockPrescriptions: Prescription[] = [
  {
    id: "presc1",
    appointmentId: "apt1",
    patientId: "patient1",
    doctorId: "doc1",
    medications: [
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        duration: "30 days",
      },
      {
        name: "Aspirin",
        dosage: "100mg",
        frequency: "Once daily",
        duration: "90 days",
      },
    ],
    instructions: "Take with food. Avoid grapefruit juice.",
    expiryDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
  },
]

export const mockMedicalRecords: MedicalRecord[] = [
  {
    id: "record1",
    patientId: "patient1",
    doctorId: "doc1",
    type: "lab",
    title: "Blood Test Results",
    description: "Annual blood work - All values normal",
    createdAt: new Date("2024-11-15"),
  },
  {
    id: "record2",
    patientId: "patient1",
    doctorId: "doc1",
    type: "imaging",
    title: "Chest X-Ray",
    description: "Routine chest imaging - No abnormalities detected",
    createdAt: new Date("2024-10-20"),
  },
]
