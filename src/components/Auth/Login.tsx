import LoginForm from './LoginForm';
import { Flower } from "lucide-react";

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-brilliant-rose-100">
            <div className="w-full max-w-md">
                <div className="flex w-full mb-5 justify-center">
                    <a href="/" className="flex items-center">
                        <Flower width={50} height={50} color="#e08100" />
                    </a>
                </div>
                <div className="bg-blue-50 p-5 rounded">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;