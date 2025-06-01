const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const payrollRoutes = require('./routes/routes.js');

const app = express();
const port = 4002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api', payrollRoutes);

// Server
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);

  try {
    const conn = await mongoose.connect('mongodb+srv://jamie:jamie123@cluster0.tklpeg5.mongodb.net/payrollDb?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`Connected to Payroll Services: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});
