import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { existsSync, mkdirSync, readdir } from 'fs';
import pkg from 'xlsx';
const { readFile, utils } = pkg;

const app = express();
const PORT = process.env.PORT || 5001;

// Allow cross-origin requests
app.use(cors());
app.use(express.json());


const uploadDir = path.join(process.cwd(), 'uploads');
if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Preserve original file name
  },
});

const upload = multer({ storage });


app.post('/upload', upload.single('file'), (req, res) => {
    console.log('Received file upload request'); 
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
    const filePath = path.join(uploadDir, file.filename);
    const workbook = readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
  
    res.json({
      message: 'File uploaded and parsed successfully!',
      data: jsonData,
    });
});

// Endpoint to download files
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(uploadDir, req.params.filename);
  if (existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send('File not found.');
  }
});


app.get('/files', (req, res) => {
  readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory.');
    }
    res.json(files);
  });
});

app.get('/excel', (req, res) => {
  const filePath = path.join(process.cwd(), 'newTabular.xlsx'); 
  res.download(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found.');
    }
  });
});

const defaultJsonFilePath = path.join(uploadDir, 'ctaData.json'); // Path to your default JSON file

app.get('/upload-json/ctaData.json', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5002/get-llama-json'); // Use POST instead of GET
    const llamaData = response.data;

    res.json({
      message: 'Successfully fetched Llama data',
      data: llamaData
    });
  } catch (error) {
    console.error('Error fetching Llama data:', error);
    res.status(500).json({ message: 'Failed to fetch Llama data' });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
