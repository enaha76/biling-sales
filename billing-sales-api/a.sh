#!/bin/bash

# Create the directory structure
mkdir -p src/controllers
mkdir -p src/models
mkdir -p src/routes

# Create the controller files
touch src/controllers/familleController.js
touch src/controllers/articleController.js
touch src/controllers/clientController.js
touch src/controllers/invoiceController.js
touch src/controllers/invoiceLineController.js

# Create the model files
touch src/models/db.js
touch src/models/familleModel.js
touch src/models/articleModel.js
touch src/models/clientModel.js
touch src/models/invoiceModel.js
touch src/models/invoiceLineModel.js

# Create the route files
touch src/routes/familleRoutes.js
touch src/routes/articleRoutes.js
touch src/routes/clientRoutes.js
touch src/routes/invoiceRoutes.js
touch src/routes/invoiceLineRoutes.js

# Create the main app file
touch src/app.js

# Create the .env file
touch .env

echo "File structure created successfully."
