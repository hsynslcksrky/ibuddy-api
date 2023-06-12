import { URL } from 'url';
import { dirname, join } from 'path';
import multer from 'multer';
import path from 'path';

// Get the current directory
const currentFileUrl = import.meta.url;
console.log(currentFileUrl)
const currentDirPath = dirname(new URL(currentFileUrl).pathname);
console.log(currentDirPath)
console.log((new URL(currentFileUrl).pathname))
const uploadsFolderPath = join(currentDirPath, '..', 'uploads').slice(3);

// Configure multer to specify the storage location and file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsFolderPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const fileName = file.fieldname + '-' + uniqueSuffix + fileExtension;
    cb(null, fileName);
  },
});

// Create the multer instance with the configured storage
const upload = multer({ storage });

// Define the upload route handler
const uploadProfilePicture = upload.single('profilePicture');

const handleUpload = (req, res) => {
  // Access the uploaded file using req.file
  const file = req.file;

  // Handle the file as needed (e.g., store in database, resize, etc.)

  // Return a success response
  res.json({ message: 'Profile picture uploaded successfully.' });
};

export { uploadProfilePicture, handleUpload };
