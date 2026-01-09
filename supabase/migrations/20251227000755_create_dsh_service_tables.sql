/*
  # DSH Service GmbH Datenbank Schema
  
  1. Neue Tabellen
    - `services`
      - `id` (uuid, primary key)
      - `name_de` (text) - Deutscher Name des Services
      - `category` (text) - 'logistik' oder 'reinigung'
      - `description_de` (text) - Deutsche Beschreibung
      - `icon` (text) - Icon-Name für die Anzeige
      - `created_at` (timestamptz)
    
    - `shipments`
      - `id` (uuid, primary key)
      - `tracking_number` (text, unique) - Sendungsnummer
      - `sender_name` (text)
      - `sender_address` (text)
      - `recipient_name` (text)
      - `recipient_address` (text)
      - `status` (text) - Status der Sendung
      - `current_location` (text)
      - `estimated_delivery` (date)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `inquiries`
      - `id` (uuid, primary key)
      - `service_type` (text) - 'logistik' oder 'reinigung'
      - `company_name` (text)
      - `contact_person` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `status` (text) - 'neu', 'bearbeitet', 'abgeschlossen'
      - `created_at` (timestamptz)
  
  2. Sicherheit
    - Enable RLS auf allen Tabellen
    - Public read access für services und shipments (tracking)
    - Inquiries können öffentlich erstellt werden
*/

-- Services Tabelle
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_de text NOT NULL,
  category text NOT NULL CHECK (category IN ('logistik', 'reinigung')),
  description_de text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services sind öffentlich lesbar"
  ON services FOR SELECT
  TO public
  USING (true);

-- Shipments Tabelle
CREATE TABLE IF NOT EXISTS shipments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tracking_number text UNIQUE NOT NULL,
  sender_name text NOT NULL,
  sender_address text NOT NULL,
  recipient_name text NOT NULL,
  recipient_address text NOT NULL,
  status text NOT NULL DEFAULT 'erfasst',
  current_location text NOT NULL DEFAULT 'Depot',
  estimated_delivery date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Shipments können per Tracking-Nummer abgerufen werden"
  ON shipments FOR SELECT
  TO public
  USING (true);

-- Inquiries Tabelle
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL CHECK (service_type IN ('logistik', 'reinigung')),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'neu',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Inquiries können öffentlich erstellt werden"
  ON inquiries FOR INSERT
  TO public
  WITH CHECK (true);

-- Beispiel-Services einfügen
INSERT INTO services (name_de, category, description_de, icon) VALUES
  ('Lagerlogistik', 'logistik', 'Professionelle Lagerverwaltung und Kommissionierung für Ihre Waren', 'Warehouse'),
  ('Transportmanagement', 'logistik', 'Zuverlässige Transportlösungen im In- und Ausland', 'Truck'),
  ('Expressversand', 'logistik', 'Schnelle Lieferung für eilige Sendungen innerhalb von 24 Stunden', 'Zap'),
  ('Industriereinigung', 'reinigung', 'Spezialisierte Reinigung von Produktionsanlagen und Industriehallen', 'Factory'),
  ('Lagerreinigung', 'reinigung', 'Professionelle Reinigung von Lager- und Logistikflächen', 'Warehouse'),
  ('Baureinigung', 'reinigung', 'Endreinigung und Baustellen-Reinigung nach Fertigstellung', 'HardHat')
ON CONFLICT DO NOTHING;

-- Beispiel-Sendungen für Demo
INSERT INTO shipments (tracking_number, sender_name, sender_address, recipient_name, recipient_address, status, current_location, estimated_delivery) VALUES
  ('DSH-2024-001', 'Müller GmbH', 'Industriestraße 10, 10115 Berlin', 'Schmidt AG', 'Hafenweg 5, 20095 Hamburg', 'unterwegs', 'Magdeburg Verteilzentrum', '2025-12-28'),
  ('DSH-2024-002', 'Weber Industries', 'Gewerbepark 23, 80331 München', 'Fischer Logistics', 'Rheinufer 15, 50667 Köln', 'zugestellt', 'Köln Depot', '2025-12-27'),
  ('DSH-2024-003', 'Becker Handel', 'Messeplatz 8, 70173 Stuttgart', 'Klein GmbH', 'Marktstraße 42, 60311 Frankfurt', 'erfasst', 'Stuttgart Depot', '2025-12-29')
ON CONFLICT DO NOTHING;