export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: string
          name_de: string
          category: 'logistik' | 'reinigung'
          description_de: string
          icon: string
          created_at: string
        }
        Insert: {
          id?: string
          name_de: string
          category: 'logistik' | 'reinigung'
          description_de: string
          icon: string
          created_at?: string
        }
        Update: {
          id?: string
          name_de?: string
          category?: 'logistik' | 'reinigung'
          description_de?: string
          icon?: string
          created_at?: string
        }
      }
      shipments: {
        Row: {
          id: string
          tracking_number: string
          sender_name: string
          sender_address: string
          recipient_name: string
          recipient_address: string
          status: string
          current_location: string
          estimated_delivery: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tracking_number: string
          sender_name: string
          sender_address: string
          recipient_name: string
          recipient_address: string
          status?: string
          current_location?: string
          estimated_delivery?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tracking_number?: string
          sender_name?: string
          sender_address?: string
          recipient_name?: string
          recipient_address?: string
          status?: string
          current_location?: string
          estimated_delivery?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      inquiries: {
        Row: {
          id: string
          service_type: 'logistik' | 'reinigung'
          company_name: string
          contact_person: string
          email: string
          phone: string
          message: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          service_type: 'logistik' | 'reinigung'
          company_name: string
          contact_person: string
          email: string
          phone: string
          message: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          service_type?: 'logistik' | 'reinigung'
          company_name?: string
          contact_person?: string
          email?: string
          phone?: string
          message?: string
          status?: string
          created_at?: string
        }
      }
    }
  }
}
