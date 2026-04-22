import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const fieldSchema = new mongoose.Schema({
  fieldName: String,
  fieldType: String,
  capacity: String,
  pricePerHour: Number,
  description: String,
  photo: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
});

const Field = mongoose.model('Field', fieldSchema, 'fields');

async function seedFields() {
  try {
    await mongoose.connect(process.env.URI_MONGODB);
    console.log('Conectado a MongoDB');

    // Limpiar datos existentes
    await Field.deleteMany({});
    console.log('Datos previos eliminados');

    // Crear canchas de prueba
    const fieldsData = [
      {
        fieldName: 'Cancha 1 - Futbol 5',
        fieldType: 'SINTETICA',
        capacity: 'FUTBOL_5',
        pricePerHour: 150,
        description: 'Cancha sintética ideal para futbol 5, con iluminación LED',
        photo: 'https://res.cloudinary.com/dqx1m6nxh/image/upload/v1774318088/kinal-sports-field_sample1.jpg',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fieldName: 'Cancha 2 - Futbol 7',
        fieldType: 'NATURAL',
        capacity: 'FUTBOL_7',
        pricePerHour: 200,
        description: 'Cancha natural con pasto real, perfecta para futbol 7',
        photo: 'https://res.cloudinary.com/dqx1m6nxh/image/upload/v1774318088/kinal-sports-field_sample2.jpg',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fieldName: 'Cancha 3 - Futbol 11',
        fieldType: 'CONCRETO',
        capacity: 'FUTBOL_11',
        pricePerHour: 300,
        description: 'Cancha de concreto con estándar profesional',
        photo: 'https://res.cloudinary.com/dqx1m6nxh/image/upload/v1774318088/kinal-sports-field_sample3.jpg',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fieldName: 'Cancha 4 - Futbol 5 Premium',
        fieldType: 'SINTETICA',
        capacity: 'FUTBOL_5',
        pricePerHour: 180,
        description: 'Cancha sintética premium con vestuarios',
        photo: 'https://res.cloudinary.com/dqx1m6nxh/image/upload/v1774318088/kinal-sports-field_sample4.jpg',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const result = await Field.insertMany(fieldsData);
    console.log(`✅ ${result.length} canchas creadas exitosamente`);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedFields();
