-- Script de inicialización de base de datos para 8cars
-- Ejecutar en Supabase SQL Editor

-- =====================================================
-- TABLA: contacts
-- Almacena los mensajes del formulario de contacto
-- =====================================================
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para búsquedas rápidas
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- =====================================================
-- TABLA: leads
-- Almacena leads de interés en vehículos específicos
-- =====================================================
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  car_id TEXT,
  car_title TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'lost', 'won')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_car_id ON leads(car_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- =====================================================
-- FUNCIONES: Actualizar updated_at automáticamente
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para actualizar updated_at
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SECURITY: Row Level Security (RLS)
-- =====================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Políticas para contacts (solo insertar desde frontend)
CREATE POLICY "Enable insert for anon users" ON contacts
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON contacts
  FOR SELECT TO authenticated
  USING (true);

-- Políticas para leads
CREATE POLICY "Enable insert for anon users" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON leads
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Enable update for authenticated users" ON leads
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);