import { useDropzone } from 'react-dropzone'
import { Card } from '@/components/ui/card'
import { Upload, FileText } from 'lucide-react'

export default function CVUpload({
  onDrop,
  file,
  error,
}: {
  onDrop: (accepted: File[]) => void
  file?: File
  error?: string
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        ['.docx'],
    },
    multiple: false,
  })

  return (
    <Card
      {...getRootProps()}
      className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer transition
        ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted'}
        ${error ? 'border-destructive' : ''}`}
    >
      <input {...getInputProps()} />
      <Upload className='w-8 h-8 text-muted-foreground mb-2' />
      {file ? (
        <div className='flex items-center gap-2 text-sm text-foreground'>
          <FileText className='w-4 h-4' />
          <span>{file.name}</span>
        </div>
      ) : (
        <p className='text-sm text-muted-foreground'>
          {isDragActive
            ? 'Drop your CV here…'
            : 'Drag & drop or click to upload PDF / Word'}
        </p>
      )}
      {error && <p className='text-destructive text-xs mt-2'>{error}</p>}
    </Card>
  )
}
