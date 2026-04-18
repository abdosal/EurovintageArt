@echo off
cd /d "c:\Users\Ghali\eurovintage-art"
git config --global user.name "Ghali"
git config --global user.email "ghali@example.com"
git remote set-url origin https://github.com/abdosal/Pintacueca.git
git add -A
git commit -m "Rebrand EuroVintage Art to Pintacueca & add ScrollToTop component"
git push origin main
pause
