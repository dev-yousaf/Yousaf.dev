'use client'

import { Download } from 'lucide-react'
import { useState } from 'react'

export const DownloadResume = () => {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    try {
      setDownloading(true)
      const link = document.createElement('a')
      link.href = `/api/resume?t=${Date.now()}`
      link.download = 'Muhammad_Yousaf_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to download resume. Please try again.')
    } finally {
      // Keep the loading state briefly so users can see that action happened.
      window.setTimeout(() => setDownloading(false), 700)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={downloading}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download className="w-4 h-4" />
      {downloading ? 'Generating...' : 'Download Resume'}
    </button>
  )
}
