'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Div, P, comeFromBottomItem, textVariants } from '@/constants/animation'

interface JoinTeamFormProps {
  dictionary: Dictionary['ApplyForm']
  isRTL?: boolean
}

export default function JoinTeamForm({ dictionary, isRTL }: JoinTeamFormProps) {
  const t = dictionary
  if (!t) return null
  //  Roles
  const roles = [
    t.frontend || 'Frontend Developer',
    t.backend || 'Backend Developer',
    t.fullstack || 'Full Stack Developer',
    t.uiux || 'UI/UX Designer',
    t.mobile || 'Mobile Developer',
    t.other || 'Other',
  ]

  //  Validation schema (with i18n)
  const applicationSchema = z.object({
    name: z.string().min(2, t.nameError || 'Name is required'),
    email: z.string().email(t.emailError || 'Invalid email'),
    role: z.string().min(1, t.roleError || 'Please select a role'),
    coverLetter: z.string().optional(),
  })

  type ApplicationForm = z.infer<typeof applicationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(data: ApplicationForm) {
    await new Promise((r) => setTimeout(r, 600))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6'
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Name */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.nameLabel || 'Full Name'}</Label>
        <Input
          {...register('name')}
          placeholder={t.namePlaceholder || 'Enter your full name'}
        />
        {errors.name && (
          <p className='text-sm text-destructive mt-1'>{errors.name.message}</p>
        )}
      </Div>

      {/* Email */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>{t.emailLabel || 'Email'}</Label>
        <Input
          {...register('email')}
          placeholder={t.emailPlaceholder || 'you@example.com'}
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
        <Label className='mb-2 block'>
          {t.roleLabel || "Role you're applying for"}
        </Label>
        <select
          {...register('role')}
          className='w-full rounded-md border border-border bg-transparent px-3 py-2 text-foreground'
        >
          <option value='' className='text-black'>
            {t.rolePlaceholder || 'Select a role'}
          </option>
          {roles.map((r) => (
            <option key={r} value={r} className='text-black'>
              {r}
            </option>
          ))}
        </select>
        {errors.role && (
          <p className='text-sm text-destructive mt-1'>{errors.role.message}</p>
        )}
      </Div>

      {/* Cover Letter */}
      <Div variants={comeFromBottomItem}>
        <Label className='mb-2 block'>
          {t.coverLetterLabel || 'Cover Letter (optional)'}
        </Label>
        <Textarea
          {...register('coverLetter')}
          placeholder={
            t.coverLetterPlaceholder ||
            'Write a short introduction about yourself'
          }
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
          className='px-8'
        >
          {isSubmitting
            ? t.sending || 'Sending...'
            : t.submit || 'Submit Application'}
        </Button>

        {(isSubmitted || isSubmitSuccessful) && (
          <P className='text-green-400 text-sm' variants={textVariants}>
            {t.success || 'Application submitted successfully'}
          </P>
        )}
      </Div>
    </form>
  )
}
