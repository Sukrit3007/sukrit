// /src/api/work/route.js
import { NextResponse } from 'next/server';
import WorkModel from '@/lib/models/WorkModel'; // Adjust the path as needed
import { ConnectDB } from '@/lib/config/database';

const LoadDb = async()=>{
  await  ConnectDB();
  console.log('Connected to the database');
}

LoadDb();

export const GET = async (request) => {
  try {
    const works = await WorkModel.find({});
    return NextResponse.json(works);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return NextResponse.error(error);
  }
};
