"use client"

import * as React from "react"

// Theme switching removed — keep a no-op provider so imports remain valid
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
