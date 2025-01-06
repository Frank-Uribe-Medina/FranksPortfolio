#!/bin/bash
cd /home/ubuntu/FranksPortfolio
git pull origin main
source venv/bin/activate
pip install -r requirements.txt
flask db upgrade
deactivate
sudo systemctl restart gunicorn
sudo systemctl reload nginx
