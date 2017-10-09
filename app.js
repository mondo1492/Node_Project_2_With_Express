import express from 'express';
import bodyParser from 'body-parser';
import { path } from 'path';

const app = express();

app.listen(3000, function() {
  console.log('Server Started on Port 3000...');
});
