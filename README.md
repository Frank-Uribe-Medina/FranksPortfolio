To update your Flask application with changes from GitHub and ensure the updates are reflected on your server, follow these steps:

* * * * *

### **1\. Pull Updates from GitHub**

#### **Step 1: Navigate to Your Project Directory**

Ensure you're in the directory where your Flask application resides:

bash

Copy code

`cd /home/ubuntu/FranksPortfolio`

#### **Step 2: Pull the Latest Changes**

Use `git` to pull the latest changes from your repository:

bash

Copy code

`git pull origin main`

-   Replace `main` with the branch name you're working on if it's different.

* * * * *

### **2\. Apply Changes Locally**

#### **Step 1: Update Dependencies**

If you've added or updated dependencies in `requirements.txt`, install them in your virtual environment:

bash

Copy code

`source venv/bin/activate
pip install -r requirements.txt
deactivate`

#### **Step 2: Apply Database Migrations (If Applicable)**

If you're using a database and have made migrations, apply them:

bash

Copy code

`source venv/bin/activate
flask db upgrade
deactivate`

* * * * *

### **3\. Restart Necessary Services**

#### **Step 1: Restart Gunicorn**

Restart Gunicorn to load the updated code:

bash

Copy code

`sudo systemctl restart gunicorn`

#### **Step 2: Reload Nginx (If Configuration Changed)**

If you've made changes to the Nginx configuration, reload it:

bash

Copy code

`sudo nginx -t  # Test the configuration
sudo systemctl reload nginx`

* * * * *

### **4\. Verify the Update**

-   **Test in a Browser:** Visit your application URL (e.g., `http://yourdomain.com`) to ensure everything works.
-   **Test Locally:** Use `curl` to check the response:

    bash

    Copy code

    `curl -I http://127.0.0.1:8000`

* * * * *

### **5\. Troubleshooting**

#### **Logs to Check:**

-   **Nginx Logs:**

    bash

    Copy code

    `sudo tail -f /var/log/nginx/flask_app-error.log`

-   **Gunicorn Logs:**

    bash

    Copy code

    `sudo journalctl -u gunicorn`

#### **Check Running Processes:**

Ensure Gunicorn is running with the updated code:

bash

Copy code

`sudo systemctl status gunicorn`

* * * * *

### **6\. Automating the Process**

To streamline updates, consider these improvements:

-   **Git Hooks:** Use post-receive hooks to automatically pull updates when pushing to the repository.
-   **Deployment Scripts:** Create a shell script to pull updates, install dependencies, and restart services.

Example deployment script (`deploy.sh`):

bash

Copy code

`#!/bin/bash
cd /home/ubuntu/FranksPortfolio
git pull origin main
source venv/bin/activate
pip install -r requirements.txt
flask db upgrade
deactivate
sudo systemctl restart gunicorn
sudo systemctl reload nginx`

Make the script executable:

bash

Copy code

`chmod +x deploy.sh`

Run the script whenever you need to update:

bash

Copy code

`./deploy.sh`