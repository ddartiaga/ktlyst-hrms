'use client';

interface VerificationMessageProps {
    email: string;
    onReset?: () => void;
}

export function VerificationMessage({ email, onReset }: VerificationMessageProps) {
    return (
        <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg
                        className="h-5 w-5 text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="ml-3 flex-1">
                    <h3 className="text-sm font-medium text-blue-800">
                        Check your email
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                        <p>
                            We've sent a magic link to <span className="font-medium">{email}</span>.
                            Click the link in the email to sign in.
                        </p>
                    </div>
                    {onReset && (
                        <div className="mt-4">
                            <button
                                type="button"
                                onClick={onReset}
                                className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            >
                                Use a different email address
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 