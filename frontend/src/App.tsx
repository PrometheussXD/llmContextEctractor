import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('هنوز اتصال بررسی نشده.')
  const [loading, setLoading] = useState(false)

  async function checkBackend() {
    setLoading(true)
    setMessage('در حال بررسی اتصال…')

    try {
      const response = await fetch('/api/health')

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()

      if (data.status !== 'ok') {
        throw new Error('Unexpected response')
      }

      setMessage('اتصال به بک‌اند برقرار است ✅')
    } catch {
      setMessage('اتصال ناموفق بود؛ بررسی کن بک‌اند اجرا باشد.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main dir="rtl">
      <h1>ContextBridge</h1>
      <p>انتقال زمینهٔ مکالمه بین مدل‌های هوش مصنوعی</p>

      <button onClick={checkBackend} disabled={loading}>
        {loading ? 'در حال بررسی…' : 'بررسی اتصال به بک‌اند'}
      </button>

      <p role="status">{message}</p>
    </main>
  )
}

export default App