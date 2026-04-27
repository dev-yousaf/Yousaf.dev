import React from 'react'
import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/resume-pdf';

export const runtime = 'nodejs'

export async function GET(_request: NextRequest) {
  try {
    const pdfBytes = await renderToBuffer(React.createElement(ResumePDF));
    const buffer = Buffer.isBuffer(pdfBytes) ? pdfBytes : Buffer.from(pdfBytes);

    if (buffer.length === 0) {
      throw new Error('Generated PDF is empty');
    }

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Muhammad_Yousaf_Resume.pdf"',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
