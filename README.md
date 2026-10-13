# llmContextEctractor
Cross-agent context transfer and structured memory platform.
## Backend setup

Run these commands from the repository root.

### Windows PowerShell

Create and activate a virtual environment:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Install dependencies:

```powershell
python -m pip install -r backend/requirements.txt
```

Start the development server:

```powershell
python -m uvicorn app.main:app --app-dir backend --reload
```

Health endpoint: http://127.0.0.1:8000/health

Interactive API documentation: http://127.0.0.1:8000/docs