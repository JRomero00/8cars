import { defineType } from 'sanity'

export default defineType({
  name: 'car',
  title: 'Vehículos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: BMW 240i 2020',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brand',
      title: 'Marca',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'model',
      title: 'Modelo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Año',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(2025),
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
      description: 'Precio en pesos chilenos',
    },
    {
      name: 'priceUSD',
      title: 'Precio USD',
      type: 'number',
      description: 'Precio en dólares (opcional)',
    },
    {
      name: 'mileage',
      title: 'Kilometraje',
      type: 'number',
    },
    {
      name: 'transmission',
      title: 'Transmisión',
      type: 'string',
      options: {
        list: [
          { title: 'Manual', value: 'manual' },
          { title: 'Automática', value: 'automatic' },
          { title: 'Secuencial', value: 'sequential' },
        ],
      },
    },
    {
      name: 'fuelType',
      title: 'Tipo de Combustible',
      type: 'string',
      options: {
        list: [
          { title: 'Gasolina', value: 'gasoline' },
          { title: 'Diésel', value: 'diesel' },
          { title: 'Eléctrico', value: 'electric' },
          { title: 'Híbrido', value: 'hybrid' },
        ],
      },
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    },
    {
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de características del vehículo',
    },
    {
      name: 'condition',
      title: 'Condición',
      type: 'string',
      options: {
        list: [
          { title: 'Nuevo', value: 'new' },
          { title: 'Usado - Excelente', value: 'excellent' },
          { title: 'Usado - Bueno', value: 'good' },
          { title: 'Usado - Regular', value: 'fair' },
        ],
      },
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible', value: 'available' },
          { title: 'Reservado', value: 'reserved' },
          { title: 'Vendido', value: 'sold' },
        ],
      },
      initialValue: 'available',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isFeatured',
      title: '¿Destacado?',
      type: 'boolean',
      description: 'Mostrar en la página principal',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      brand: 'brand',
      year: 'year',
      media: 'mainImage',
      status: 'status',
    },
    prepare(selection) {
      const { title, brand, year, status } = selection
      return {
        title: title,
        subtitle: `${brand} ${year} - ${status}`,
        media: selection.media,
      }
    },
  },
})