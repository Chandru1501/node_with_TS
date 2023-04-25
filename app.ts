import express from 'express';

const app = express();

import BodyParser  from 'body-parser';

import todosRoutes  from './routes/todos';

app.use(BodyParser.json())

app.use(todosRoutes);

app.listen(3000)

console.log('this server is running on port 3000')