import mongoose from 'mongoose';

const mockSchema = new mongoose.Schema({});

export default mongoose.model('mock', mockSchema);
