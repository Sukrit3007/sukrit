// /src/api/work/route.js
import { NextResponse } from 'next/server';
import WorkModel from '@/lib/models/WorkModel';
import { ConnectDB } from '@/lib/config/database';

// Wrap the database connection in an async function
const connectToDatabase = async () => {
  try {
    await ConnectDB();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

// Only connect to the database when this specific route is hit
export const GET = async (request) => {
  // Connect to the database before handling the request
  await connectToDatabase();

  try {
    // Fetch data from the database
    const works = await WorkModel.find({});
    return NextResponse.json(works);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return NextResponse.error(error);
  }
};
