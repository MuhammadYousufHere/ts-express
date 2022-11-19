import express from "express";
const app = express();
import todos from './routes/appRoutes'
const PORT = process.env.PORT || 8080;

app.use(express.json()) // to parse the body of the request
app.use('/todos', todos)

app.get('/', (req, res) => {
  res.send('HELLO')
})
app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`)
})