"use client";

import { useActionState } from 'react';
import { signInWithEmail } from './action';
import { DangerAlert } from '@/components/elements/Alerts';
export function MagicLinkForm() {

    const [state, formAction, pending] = useActionState(signInWithEmail, { success: false, error: null });

    return (
        <form action={formAction} >
            <div className="row gy-3">
                <div className="col-xl-12">
                    {state.error && (
                        <DangerAlert message={state.error} />
                    )}
                    <div className="input-group">
                        <span className="input-group-text" id="signin-email">
                            Email
                        </span>
                        <input
                            id="signin-email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="youremail@example.com"
                            aria-describedby="signin-email"
                            required
                        />
                    </div>

                </div>

                <div className="col-xl-12 d-grid">
                    <button type="submit" className="btn btn-primary" disabled={pending}>
                        {pending ? 'Sending sign in link...' : 'Continue with Email'}
                    </button>
                </div>


            </div>
        </form>
    );
}