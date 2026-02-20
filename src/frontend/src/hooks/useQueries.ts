import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ExternalBlob } from '../backend';

interface SubmitApplicationParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  resume: Uint8Array;
}

export function useSubmitApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, phone, message, resume }: SubmitApplicationParams) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      const resumeBlob = ExternalBlob.fromBytes(resume as Uint8Array<ArrayBuffer>);
      const applicationId = await actor.submitApplication(name, email, phone, message, resumeBlob);
      return applicationId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
}
