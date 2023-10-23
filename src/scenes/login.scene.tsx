import { AppLayout } from '@/layouts';
import { LoginComponent } from '@/pods/login';

export const LoginScene: React.FC = () => {
  return (
    <AppLayout>
      <LoginComponent />
    </AppLayout>
  );
};
