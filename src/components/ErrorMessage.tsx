import React from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircle } from 'lucide-react';

type Props = {
  title?: string;
  description?: string;
};

function ErrorMessage({
  title = 'Uh oh! Something went wrong.',
  description = 'There was a problem with your request.',
}: Props) {
  return (
    <Alert variant="destructive" className="dark:bg-zinc-900">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

export default ErrorMessage;
