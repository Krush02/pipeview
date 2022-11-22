import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'
import hubspotApi from '../lib/hubspot';

function useHubspot() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (session) {
            if (session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            hubspotApi.setAccessToken(session.user.accessToken);
        }
    }, [session]);
  
    return hubspotApi;
}

export default useHubspot;