const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Tinder Clone API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
