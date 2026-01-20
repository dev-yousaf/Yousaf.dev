import React from 'react'
import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/resume-pdf';

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    // Generate the PDF stream (use React.createElement to avoid JSX in .ts)
    const stream = await renderToStream(React.createElement(ResumePDF));

    // Collect chunks from either a Web ReadableStream or a Node async iterable
    const chunks: Buffer[] = [];

    if (typeof (stream as any).getReader === 'function') {
      const reader = (stream as any).getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) chunks.push(Buffer.from(value));
      }
    } else {
      // Node Readable stream or async iterable
      for await (const chunk of stream as any) {
        chunks.push(Buffer.from(chunk));
      }
    }

    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Muhammad_Yousaf_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
