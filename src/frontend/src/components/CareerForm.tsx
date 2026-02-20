import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitApplication } from '@/hooks/useQueries';
import { toast } from 'sonner';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  resume: FileList;
}

export function CareerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [fileName, setFileName] = useState<string>('');
  const submitApplication = useSubmitApplication();

  const onSubmit = async (data: FormData) => {
    try {
      if (!data.resume || data.resume.length === 0) {
        toast.error('Please upload your resume');
        return;
      }

      const file = data.resume[0];
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      await submitApplication.mutateAsync({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        resume: uint8Array,
      });

      toast.success('Application submitted successfully!');
      reset();
      setFileName('');
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Full Name"
          {...register('fullName', { required: 'Full name is required' })}
          className={errors.fullName ? 'border-destructive' : ''}
        />
        {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Phone Number"
          {...register('phone', { required: 'Phone number is required' })}
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume">Resume *</Label>
        <div className="relative">
          <Input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            {...register('resume', { required: 'Resume is required' })}
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setFileName(files[0].name);
              }
            }}
            className={`${errors.resume ? 'border-destructive' : ''} cursor-pointer`}
          />
          {fileName && (
            <div className="mt-1 text-sm text-muted-foreground flex items-center">
              <Upload className="h-4 w-4 mr-1" />
              {fileName}
            </div>
          )}
        </div>
        {errors.resume && <p className="text-sm text-destructive">{errors.resume.message}</p>}
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about yourself and why you'd like to join our team..."
          rows={4}
          {...register('message')}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitApplication.isPending}
        className="md:col-span-2 bg-[oklch(0.25_0.08_250)] hover:bg-[oklch(0.20_0.08_250)] text-white font-semibold"
      >
        {submitApplication.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </Button>
    </form>
  );
}
