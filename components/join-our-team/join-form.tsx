'use client'

import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Div, P, comeFromBottomItem, textVariants } from '@/constants/animation'
import CVUpload from '../ui/Custom-ui/DropZone/drop-zone'

interface JoinTeamFormProps {
  dictionary: Dictionary['ApplyForm']
  isRTL?: boolean
}

export default function JoinTeamForm({ dictionary, isRTL }: JoinTeamFormProps) {
  const t = dictionary
  if (!t) return null

  const roles = [t.frontend, t.backend, t.fullstack, t.uiux, t.mobile, t.other]

  const applicationSchema = z.object({
    name: z.string().min(2, t.nameError || 'Name is required'),
    email: z.string().email(t.emailError || 'Invalid email'),
    role: z.string().min(1, t.roleError || 'Please select a role'),
    coverLetter: z.string().optional(),
    cv: z
      .any()
      .refine((file) => file?.length === 1, t.DropZone.errorRequired)
      .refine(
        (file) =>
          [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ].includes(file?.[0]?.type),
        t.DropZone.errorFormat || 'Only PDF or Word files are allowed'
      ),
  })

  type ApplicationForm = z.infer<typeof applicationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setValue,
    control,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(data: ApplicationForm) {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'cv') formData.append('cv', value[0])
      else formData.append(key, value as string)
    })

    // Example: send to API route
    // await fetch('/api/apply', { method: 'POST', body: formData })

    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6'
      dir={isRTL ? 'rtl' : 'ltr'}
      encType='multipart/form-data'
    >
      {/* Name */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.nameLabel || 'Full Name'}</Label>
        <Input {...register('name')} placeholder={t.namePlaceholder} />
        {errors.name && (
          <p className='text-sm text-destructive mt-1'>{errors.name.message}</p>
        )}
      </Div>

      {/* Email */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.emailLabel}</Label>
        <Input
          {...register('email')}
          placeholder={t.emailPlaceholder}
          type='email'
        />
        {errors.email && (
          <p className='text-sm text-destructive mt-1'>
            {errors.email.message}
          </p>
        )}
      </Div>

      {/* Role */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.roleLabel}</Label>
        <Select
          onValueChange={(value) => setValue('role', value)}
          defaultValue=''
        >
          <SelectTrigger
            isRTL={isRTL}
            className='w-full bg-transparent border border-border text-foreground'
          >
            <SelectValue
              placeholder={t.rolePlaceholder}
              className='text-muted-foreground'
            />
          </SelectTrigger>
          <SelectContent className='bg-popover text-popover-foreground font-[cairo]'>
            {roles.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.role && (
          <p className='text-sm text-destructive mt-1'>{errors.role.message}</p>
        )}
      </Div>

      {/* Cover Letter */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.coverLetterLabel}</Label>
        <Textarea
          className='placeholder:text-xs md:placeholder:text-sm'
          {...register('coverLetter')}
          placeholder={t.coverLetterPlaceholder}
        />
      </Div>

      {/* CV Upload */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.DropZone.label}</Label>
        <Controller
          name='cv'
          control={control}
          render={({ field }) => (
            <CVUpload
              dictionary={dictionary}
              onDrop={(files) => field.onChange(files)}
              file={field.value?.[0]}
              error={errors.cv?.message as string}
            />
          )}
        />
      </Div>

      {/* Submit */}
      <Div
        className='flex flex-col sm:flex-row gap-3 items-center'
        variants={comeFromBottomItem}
      >
        <Button
          type='submit'
          variant='default'
          disabled={isSubmitting}
          className='px-8 cursor-pointer'
        >
          {isSubmitting ? t.sending : t.submit}
        </Button>

        {(isSubmitted || isSubmitSuccessful) && (
          <P className='text-green-400 text-sm' variants={textVariants}>
            {t.success}
          </P>
        )}
      </Div>
    </form>
  )
}
