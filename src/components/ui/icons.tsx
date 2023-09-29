import { Loader2 } from 'lucide-react';

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  spinner: (props: IconProps) => (
    <Loader2 className="h-6 w-6 animate-spin" {...props} />
  ),
};
