const express = require('express');
const bodyParser = require('body-parser');
const familleRoutes = require('./routes/familleRoutes');
const articleRoutes = require('./routes/articleRoutes');
const factureRoutes = require('./routes/factureRoutes');
const clientRoutes = require('./routes/clientRoutes');
// const invoiceRoutes = require('./routes/invoiceRoutes');

// const invoiceLineRoutes = require('./routes/invoiceLineRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/familles', familleRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/invoices', factureRoutes); 
app.use('/api/clients', clientRoutes);
// app.use('/api/invoices', invoiceRoutes);
// app.use('/api/invoicelines', invoiceLineRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
