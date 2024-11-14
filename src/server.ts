import express from 'express';
import morgan from 'morgan';
import router from './routes/router';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('Hellow, world !');
  res.status(200).json({ message: 'Hello, World!' });
});

app.use('/api', router);

export default app;
